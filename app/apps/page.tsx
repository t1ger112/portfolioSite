//import Image from "next/image";

export default function About() {

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Apps</title>
      
      <div className="content-container">

        <div className="miniNavCont">

          <div className="trail-cont font-small">
            <a href="./">Home</a>{'>'} 
            <a href="#">Apps</a>
          </div>

          <div className="themeCont">
             <div className="themeSlideLabel">
              <a className="font-small">Theme:</a>
            </div>
            <div className="themeSliderCont">
              <a className="themeSlider">O/I</a>
            </div>
          </div>
         
        </div>

        <h1 className="font-heading">Welcome to My Portfolio Site!</h1>

        <p>Apps</p> 
        

      </div>

    </div>
  );
}

