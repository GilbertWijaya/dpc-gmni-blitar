'use client'

import { Carousel } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";

// --- DATA DUMMY ---
const bannerData = [
  {
    image: 'https://dpc-gmni-blitar.vercel.app/thumbnail/banner_thumbnail.png',
    title: 'Visi',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores dolore provident recusandae iusto corporis dolor cupiditate debitis harum aliquid, assumenda alias itaque esse ab deleniti? Voluptate reiciendis nobis nihil.',
  },
  {
    image: 'https://dpc-gmni-blitar.vercel.app/thumbnail/artikel_thumbnail.jpg',
    title: 'Misi',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores dolore provident recusandae iusto corporis dolor cupiditate debitis harum aliquid, assumenda alias itaque esse ab deleniti? Voluptate reiciendis nobis nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores dolore provident recusandae iusto corporis dolor cupiditate debitis harum aliquid, assumenda alias itaque esse ab deleniti? Voluptate reiciendis nobis nihil.',
  },
];



// const Jumbotron = () => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex: number) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect} fade>
//       {bannerData.map((slide, i) => (
//         <Carousel.Item
//           key={i}
//           style={{ minHeight: '60vh', height: '100dvh', position: 'relative' }}
//         >
//           {/* Background Image */}
//           <Image
//             src={slide.image}
//             alt={slide.title}
//             fill
//             priority={i === 0}
//             sizes="100vw"
//             style={{
//               objectFit: 'cover',
//               filter: 'brightness(50%)',
//             }}
//           />

//           {/* Caption */}
//           <Carousel.Caption
//             className="d-flex flex-column justify-content-center align-items-start align-items-md-start h-100 p-3 p-md-5"
//           >
//             <div
//               className="bg-dark bg-opacity-50 p-3 p-md-4 rounded w-100 w-md-auto text-center text-md-start"
//               style={{ maxWidth: '600px' }}
//             >
//               <h1 className="display-5 display-md-4 fw-bold mb-3">
//                 {slide.title}
//               </h1>
//               <p className="lead mb-0">{slide.description}</p>
//             </div>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };
const Jumbotron = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {bannerData.map((slide, i) => (
        <Carousel.Item
          key={i}
          style={{ minHeight: '90vh', height: '100dvh', position: 'relative' }}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              filter: 'brightness(50%)',
            }}
          />

          {/* Caption */}
          <Carousel.Caption
            className="d-flex flex-column justify-content-center align-items-start align-items-md-start h-100 p-3 p-md-5"
          >
            <div
              className="bg-dark bg-opacity-10 p-3 p-md-4 rounded w-100 w-md-auto text-center text-md-start overflow-scroll"
              style={{ maxWidth: '900px' }}
            >
              <h1 className="display-5 display-md-4 fw-bold mb-3">
                {slide.title}
              </h1>
              <p className="lead mb-0">{slide.description}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
  {/* Tambahkan style global untuk semua deskripsi */}
      <style jsx>{`
        .description {
          text-align: justify;
          line-height: 1.6;
          color: #333;
        }
      `}</style>
};

export default Jumbotron;
