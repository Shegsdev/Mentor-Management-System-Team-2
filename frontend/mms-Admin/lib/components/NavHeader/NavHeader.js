import React from 'react';
import "./NavHeader.css";

export const NavHeader = ({ title }) => {
  return (
    <header className="module-header">
      <h2 className="title">{title}</h2>
    </header>
  );
};
