'use client'

import ThemeSlider from "@/utils/themeSlider";

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

          <ThemeSlider />
        </div>

        <h1 className="font-heading font-bitcount font-accent pl-[1px]">Loading...</h1>    

      </div>

    </div>
  );
}

