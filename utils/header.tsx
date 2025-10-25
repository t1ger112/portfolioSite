
'use client';

export default function Header() {
  return (

    <div className="width-container font-bitcount">

      <div className="navbar-container">

        <div className="nav-left-group">
          <div className="nav-btn">
            <a id="navHome" className="font-navbar nav-btn-a" href="./">HOME</a> 
          </div>

          <div className="nav-btn">
            <a id="navActivity" className="font-navbar nav-btn-a" href="./activity">ACTIVITY</a>
          </div>

          <div className="nav-btn">
            <a id="navInfo" className="font-navbar nav-btn-a" href="./info">INFO</a>
          </div>

          <div className="nav-btn">
            <a id="navAbout" className="font-navbar nav-btn-a" href="./apps">APPS</a>
          </div>

        </div>

        <div className="nav-right-group">
          <div className="nav-btn font-accent">
            <a id="navLinkedin" className="font-navbar nav-btn-a" target="_blank" href="https://linkedin.com/in/freddiemichaelrobinson">CONTACT</a>
          </div>
        </div>

      </div>

    </div>
    
  );
}

