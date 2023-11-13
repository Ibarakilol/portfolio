import React from 'react';

import './footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer__copyrights">© {currentYear} Nikita Lopanov.</span>
    </footer>
  );
};

export default Footer;
