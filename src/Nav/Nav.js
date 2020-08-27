import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className='Nav'>
      <Link to={'/'}>
        Bookmark List
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link to={'/add-bookmark'}>
        Add Bookmark
      </Link>
    </nav>
  );
}