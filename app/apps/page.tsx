//import Image from "next/image";

export default function About() {

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Apps</title>
      
      <div className="content-container">

        <div className="miniNavCont">

          <div className="trail-cont font-small">
            <a className="trail-text" href="./">Home</a>{'>'} 
            <a className="trail-text" href="#">Apps</a>
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

        <h1 className="font-heading font-bitcount font-accent pl-[1px]">Welcome to My Portfolio Site!</h1>

        <p className="font-normal font-merri flex">Apps</p> 
        

      </div>

    </div>
  );
}

