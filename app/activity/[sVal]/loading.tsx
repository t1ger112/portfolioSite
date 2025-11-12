'use client'

export default function Loading() {

  return (
    
    <div className="app-container">

      <title>Freddie Robinson - Loading</title>
      
      <div className="content-container">

        <div className="miniNavCont">

          <div className="trail-cont font-small">
            <a className="trail-text" href="./">Home</a>{'>'} 
            <a className="trail-text" href="#">Loading...</a> 
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

        <h1 className="font-heading font-bitcount font-accent pl-[1px]">Loading...</h1>    

      </div>

    </div>
  );
}

