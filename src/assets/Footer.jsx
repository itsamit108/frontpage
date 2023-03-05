import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container text-white" style={{ marginTop: '100vh' }}>
      <footer>
        <hr />
        <div className="d-flex justify-content-between">
          <p>
            {`© ${currentYear} FrontPage. All rights reserved.`}
          </p>
          <a
            href="https://github.com/itsamit108"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Profile"
          >
            <FaGithub size={25} className="github-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
