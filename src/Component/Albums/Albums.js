
import { Outlet } from 'react-router-dom';

import './Albums.css';

export default function Albums() {

  return (
    <div className="container" id="albums">
      <h2>Album</h2>
      <Outlet />
    </div>
  )
}