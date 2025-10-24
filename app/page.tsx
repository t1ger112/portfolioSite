//import Image from "next/image";

export default function Home() {

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Home</title>
      
      <div className="content-container">

        <div className="miniNavCont">
          <div className="trail-cont font-small">
            <a className="trail-text" href="./">Home</a>{'>'}  
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


        <div className="section-cont content-col">  
          <h1 className="font-heading">Welcome to my Portfolio!</h1>
          <p>This is the homepage of my portfolio website.</p> 
        </div>

        <div className="section-cont content-col">
          <h1 className="font-heading">Activity:</h1>
          <p>temp</p> 
        </div>

        <div className="section-cont content-col">
          <h1 className="font-heading">Certifications:</h1>
          <p>temp</p> 
        </div>

        <div className="section-cont content-col">
          <h1 className="font-heading">Digital CV:</h1>
          <p>temp</p> 
        </div>
        
        <div className="section-cont content-col">
          <h1 className="font-heading">My Apps:</h1>
          <p>temp</p> 
        </div>

      </div>

    </div>
  );
}

