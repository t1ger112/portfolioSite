//import Image from "next/image";

export default function About() {

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - About</title>
      
      <div className="content-container">

        <div className="miniNavCont">

          <div className="trail-cont font-small">
            <a href="#">Home</a>{'>'} 
            <a href="#">About</a>
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

        <h1>Welcome to My About</h1>
        
        <p>aboutme</p> 
        

      </div>

    </div>
  );
}

