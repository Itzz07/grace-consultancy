import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto text-center">
        &copy; {new Date().getFullYear()} Consultancy Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
