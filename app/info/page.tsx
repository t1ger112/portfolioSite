//import Image from "next/image";

export default function About() {

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Info</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <a className="trail-text" href="./">Home</a>{'>'} 
            <a className="trail-text" href="#">Info</a>
          </div>

          <div className="themeCont">
             <div className="themeSlideLabel">
              <a className="font-small">Theme:</a>
            </div>
            <div className="themeSliderCont">
              <a className="font-small themeSlider">Light/Dark</a>
            </div>
          </div>
         
        </div>


        <div className="section-cont">
          <h1 className="font-heading">Information Page</h1>

        </div>

      </div>

    </div>

  );
}

