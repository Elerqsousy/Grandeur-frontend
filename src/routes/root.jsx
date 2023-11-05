import React from 'react';
<<<<<<< HEAD
import {
  Outlet,
} from 'react-router-dom';
=======
import { Outlet, NavLink, Link } from 'react-router-dom';

import TopBar from '../components/topbar';
import logoGreen from '../assets/logo-green.png';

const navRoutes = [
  {
    name: 'All Units',
    route: '/',
  },
  {
    name: 'My Visits',
    route: '/reservations',
  },
  {
    name: 'Book a Visit',
    route: '/book-visit',
  },
  {
    name: 'Add Unit',
    route: '/unit-form',
  },
  {
    name: 'Remove Unit',
    route: '/remove-unit',
  },
];
>>>>>>> dev

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <div>
          <Link to="/" className="logo">
            <img src={logoGreen} alt="Grandeur logo" />
          </Link>
        </div>
        <nav>
          <ul>
            {navRoutes.map((item) => (
              <li key={item.route} className="transition-all ease-in-out duration-75">
                <NavLink
                  to={item.route}
                  className={({ isActive }) => isActive && 'active'}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <TopBar navRoutes={navRoutes} />
        <Outlet />
      </div>
    </>
  );
}
