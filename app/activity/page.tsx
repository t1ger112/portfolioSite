//import Image from "next/image";

export default function Activity() {

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Activity</title>
      
      <div className="content-container">

        <div className="miniNavCont">

          <div className="trail-cont font-small">
            <a href="./">Home</a>{'>'} 
            <a href="#">Activity</a>
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

        <h1 className="font-heading">My Activity!</h1>

        <p>Activity</p> 
        

      </div>

    </div>
  );
}

