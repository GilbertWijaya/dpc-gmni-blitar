'use client';

import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import Image from 'next/image';
import {Container} from 'react-bootstrap';

// const galleryImages = [
//   'http://localhost:3000/gallery-aset/galeri1.jpg',
//   'http://localhost:3000/gallery-aset/galeri2.jpg',
//   'http://localhost:3000/gallery-aset/galeri3.jpg',
//   'http://localhost:3000/gallery-aset/galeri4.jpg',
// ];
const galleryImages = [
  '/gallery-aset/galeri1.webp',
  '/gallery-aset/galeri2.webp',
  '/gallery-aset/galeri3.webp',
  '/gallery-aset/galeri4.webp',
];

const GallerySlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    
    <>

      <Container>

        <h3 className="text-center mb-4" style={{ color: 'rgba(201, 1, 20, 1)' }}>GALLERI</h3>
        <div
        className="mx-auto mb-5"
        style={{
            width: '100%',
            // maxWidth: '57rem',
            height: '4px',
            backgroundColor: 'rgba(201, 1, 20, 1)',
        }}
        ></div>    

        <div className="py-4">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            fade
            controls
            indicators
            className="mx-auto"
            style={{ maxWidth: '800px' }}
          >
            {galleryImages.map((imgSrc, i) => (
              <Carousel.Item key={i} className="position-relative">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                  }}
                >
                  <Image
                    src={imgSrc}
                    alt={`Slide ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    style={{
                      objectFit: 'contain', // Changed from 'cover' to 'contain'
                      borderRadius: '0.5rem',
                    }}
                    priority={i === 0}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>

    </>

  );
};

export default GallerySlider;
