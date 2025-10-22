
'use client';

export default function Header() {
  return (
    
    <div className="navbar-container">

      <div className="nav-left-group">
        <div className="nav-btn">
          <a className="font-navbar" href="#home">HOME</a>
        </div>

        <div className="nav-btn">
          <a className="font-navbar" href="#skills">ACTIVITY</a>
        </div>

        <div className="nav-btn">
          <a className="font-navbar" target="_blank" href="https://github.com/t1ger112">GITHUB</a>
        </div>

        <div className="nav-btn">
          <a className="font-navbar" href="#about">ABOUT</a>
        </div>
      </div>

      <div className="nav-right-group">
        <div className="nav-btn">
          <a className="font-navbar" target="_blank" href="https://linkedin.com/in/freddiemichaelrobinson">CONTACT</a>
        </div>
      </div>

    </div>
  );
}

