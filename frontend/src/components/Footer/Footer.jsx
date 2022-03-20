import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
            <medium className='copy-color'> Ken and Jacob's YouTube Clone &copy;{new Date().getFullYear()}</medium> <b>| No Rights Reserved | Open-Source</b>
      </div>
      <nav>
        <li className = "footer-list"><a href="https://github.com/kenubwell" className = "footer-ref" target="_blank"><medium className = 'footer-color'>Ken's GitHub</medium></a></li>
        <li className = "footer-list"><a href="https://github.com/Jacob-Petersen-1" className = "footer-ref" target="_blank"><medium className = 'footer-color'>Jacob's GitHub</medium></a></li>
      </nav>
    </footer>
  );
};

export default Footer;
