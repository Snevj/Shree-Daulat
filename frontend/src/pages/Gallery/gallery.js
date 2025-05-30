import React, { useState } from 'react';
import { Camera, ZoomIn, Grid3X3 } from 'lucide-react';
import image1 from '../../assets/images/stoneImage1.jpg'
import image2 from '../../assets/images/stoneImage2.jpg'
import image3 from '../../assets/images/stoneImage3.jpg'
import image4 from '../../assets/images/stoneImage4.jpg'
import image5 from '../../assets/images/stoneImage5.jpg'
import image6 from '../../assets/images/stoneImage6.jpg'
import image7 from '../../assets/images/stoneImage7.jpg'
import './gallery.css'

// Sample data - replace with your actual slides data
const slides = [
  { src: image1, alt: 'Gallery Image 1', title: 'Beige Sandstone' },
  { src: image2, alt: 'Gallery Image 2', title: 'Kandla Grey Sandstone' },
  { src: image3, alt: 'Gallery Image 3', title: 'Sandstone' },
  { src: image4, alt: 'Gallery Image 4', title: 'Urban Life' },
  { src: image5, alt: 'Gallery Image 5', title: 'Abstract Art' },
  { src: image6, alt: 'Gallery Image 6', title: 'Wildlife' },
  { src: image7, alt: 'Gallery Image 7', title: 'Street Photography' },
  { src: image7, alt: 'Gallery Image 8', title: 'Minimalist' },
  { src: image7, alt: 'Gallery Image 9', title: 'Portrait' },
];

// Images Component
const Images = ({ data, onClick }) => {
  return (
    <div className="gallery-grid">
      {data.map((slide, index) => (
        <div
          key={index}
          className="gallery-item"
          onClick={() => onClick(index)}
        >
          <div className="image-container">
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
            />
            <div className="overlay">
              <div className="overlay-content">
                <ZoomIn className="zoom-icon" size={24} />
                <span className="image-title">{slide.title}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Simple Lightbox Component (since we can't import the actual library)
const SimpleLightbox = ({ open, index, slides, onClose, onNext, onPrev }) => {
  if (!open || index < 0) return null;

  const currentSlide = slides[index];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>×</button>
        <img src={currentSlide.src} alt={currentSlide.alt} />
        <div className="lightbox-caption">{currentSlide.title}</div>
        {index > 0 && (
          <button className="lightbox-nav lightbox-prev" onClick={onPrev}>‹</button>
        )}
        {index < slides.length - 1 && (
          <button className="lightbox-nav lightbox-next" onClick={onNext}>›</button>
        )}
      </div>
    </div>
  );
};

function App() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  const handleImageClick = (currentIndex) => {
    setIndex(currentIndex);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIndex(-1);
  };

  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="gallery-app">
      {/* Gallery Header */}
      <div className="gallery-header">
        <div className="header-content">
          <div className="header-icon">
            <Camera size={32} />
          </div>
          <div className="header-text">
            <h1>Our Gallery</h1>
            <p>Discover our collection of beautiful Natural Stones</p>
          </div>
        </div>
        <div className="gallery-stats">
          <div className="stat">
            <Grid3X3 size={20} />
            <span>{slides.length} Images</span>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <Images data={slides} onClick={handleImageClick} />

      {/* Custom Lightbox */}
      <SimpleLightbox
        open={open}
        index={index}
        slides={slides}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      
    </div>
  );
}

export default App;