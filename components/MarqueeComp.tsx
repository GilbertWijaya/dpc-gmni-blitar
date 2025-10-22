'use client';

import { Container } from 'react-bootstrap';
import Image from 'next/image';

// Dummy logo list
const runningMarqueeLogos = [
  { src: 'https://dpc-gmni-blitar.vercel.app/berjalan/berjalan1.jpg', alt: 'Logo 1' },
  { src: 'https://dpc-gmni-blitar.vercel.app/berjalan/berjalan2.jpg', alt: 'Logo 2' },
  { src: 'https://dpc-gmni-blitar.vercel.app/berjalan/berjalan3.jpg', alt: 'Logo 3' },
  { src: 'https://dpc-gmni-blitar.vercel.app/berjalan/berjalan4.jpg', alt: 'Logo 4' },
];

const MarqueeComp = () => {
  // Duplikasi list agar looping tidak ada jeda
  const logos = [...runningMarqueeLogos, ...runningMarqueeLogos];

  return (
    <section className="py-5 bg-light">
      <Container className="overflow-hidden position-relative">
        <div
          className="d-flex"
          style={{
            width: 'max-content',
            animation: 'marquee 20s linear infinite',
          }}
        >
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-4 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                style={{
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s ease',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(0%)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(100%)')
                }
              />
            </div>
          ))}
        </div>
      </Container>

      {/* Inline style for animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default MarqueeComp;
