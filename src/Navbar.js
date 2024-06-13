import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="navbar-user">
        <img src="notification.png" alt="Notificaciones" />
        <span>Username</span>
        <img src="user.png" alt="Usuario" />
      </div>
    </nav>
  );
};

export default Navbar;
