import React from 'react';
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { slides } from "./data";
import "yet-another-react-lightbox/styles.css";
import { Captions, Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from './Images';

function App() {
  // Remove the TypeScript notation
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);
  
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Lightbox</button>
      <Images data={slides} onClick={(currentIndex) => setIndex(currentIndex)} />
      
      <Lightbox
        plugins={[Captions, Fullscreen, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
        }}
        close={() => setOpen(false)}
        open={open || index >= 0}
        index={index}
        slides={slides}
        
        onClose={() => {
          setOpen(false);
          setIndex(-1);
        }}
      />
    </>
  );
}

export default App;