import React from 'react';

const Footer = () => {
  const styles = `
    .footer {
      display: flex;
      justify-content: center;
      background-color: #333;
      padding: 20px;
    }

    .footer ul {
      list-style: none;
      padding: 0;
      display: flex;
      gap: 20px;
    }

    .footer li {
      margin: 0;
    }

    .footer a {
      text-decoration: none;
      color: #fff;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  `;

  return (
    <footer>
      <style>{styles}</style>
      <ul>
        <li><a href="https://github.com/thumeshsai">GITHUB</a></li>
        <li><a href="https://www.instagram.com/th_u_me_sh/?next=%2F">INSTAGRAM</a></li>
        <li><a href="https://www.linkedin.com/in/thumesh-sai-02a025230/">LINKED IN</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
