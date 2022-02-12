let accessToken;
const clientID = 'f19ec88c71e84e5981cbe3abc63b688e';
const redirectURI = 'https://yoasobi-spotify.netlify.app';
const yoasobiID = '64tJ2EAv1R6UaZqc4iOCyj';

const Spotify = {
  getAccessToken() {
    if(accessToken) {
      return accessToken;
    }
    const url = window.location.href;
    const accessTokenMatch = url.match(/access_token=([^&]*)/);
    const expiresInMatch = url.match(/expires_in=([^&]*)/);

    if(accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      let expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('AccessToken', null, '/');
      return accessToken;
    } else {
      // don't login or expires accessToken
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
    
  },
  search(){
    const accessToken = Spotify.getAccessToken();

    fetch('https://api.spotify.com/v1/search?type=artist&q=yoasobi', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }
    ).then(response => response.json()
    ).then(jsonResponse => console.log(jsonResponse));
  },
  getArtist(){
    const accessToken = Spotify.getAccessToken();

    return fetch(`https://api.spotify.com/v1/artists/${yoasobiID}`,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()
    ).then(jsonResponse => {
      return {
        image: jsonResponse.images[0].url,
        name: jsonResponse.name,
        followers: jsonResponse.followers.total,
        genres: jsonResponse.genres.join(' '),
        popularity: jsonResponse.popularity
      }
    } );
  },
  getArtistAlbum(){
    const accessToken = Spotify.getAccessToken();

    return fetch(`https://api.spotify.com/v1/artists/${yoasobiID}/albums`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()
    ).then(jsonResponse => {
      return jsonResponse.items.map(album => {
        return {
          image: album.images[0].url,
          name: album.name,
          albumType: album['album_type'],
          releaseDate: album['release_date'],
          id: album.id
        }
      })
    })
  },
  getAlbum(albumID){
    const accessToken = Spotify.getAccessToken();
    
    return fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()
    ).then(jsonResponse => {
      return {
        popularity: jsonResponse.popularity,
        name: jsonResponse.name,
        image: jsonResponse.images[0].url,
        tracks: jsonResponse.tracks.items,
        releaseDate: jsonResponse['release_date'],
        albumType: jsonResponse['album_type']
      }
    });
  },
  getTrack(trackID){
    const accessToken = Spotify.getAccessToken();

    return fetch(`https://api.spotify.com/v1/tracks/${trackID}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => response.json()
    ).then(jsonResponse => jsonResponse.name);
  }
}

export default Spotify;
