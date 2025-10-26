
import Image from "next/image"
import Link from "next/link"

const BsoBanner = () => {
    return (
        <>

            <div className="banner-container d-flex flex-wrap justify-content-center align-items-center  p-4 gap-5" style={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 1)" }}>

                <div className="image-container d-flex flex-column justify-content-center align-items-center">

                    <Link href="/bso/galeri_rakyat" className="text-center" style={{ textDecoration: "none" }}>
                        <Image src="https://dpc-gmni-blitar.vercel.app/logo_bso/galeri_rakyat_fix.png" className="img-fluid" alt="logo_bso" width={150} height={150}/>
                        <span className="text-white text-center font-semibold">GALERI RAKYAT</span>
                    </Link>

                </div>
                <div className="image-container d-flex flex-column justify-content-center align-items-center">

                    <Link href="/bso/pasar_rakyat" className="text-center" style={{ textDecoration: "none" }}>
                        {/* <Image src="https://dpc-gmni-blitar.vercel.app/logo_bso/pasar_rakyat.png" className="img-fluid" alt="logo_bso" width={230} height={230}/> */}
                        <Image src="https://dpc-gmni-blitar.vercel.app/logo_bso/pasar_rakyat.png" className="img-fluid" alt="logo_bso" width={200} height={200}/>
                        <span className="text-white text-center font-semibold">PASAR RAKYAT</span>
                    </Link>

                </div>
                <div className="image-container d-flex flex-column justify-content-center align-items-center">

                    <Link href="/bso/mega_dinandra" className="text-center" style={{ textDecoration: "none" }}>
                        <Image src="https://dpc-gmni-blitar.vercel.app/logo_bso/mega_dinandra.png" className="img-fluid" alt="logo_bso" width={150} height={150}/>
                        <span className="text-white text-center font-semibold">MEGA DINANDRA</span>
                    </Link>

                </div>
                <div className="image-container d-flex flex-column justify-content-center align-items-center">

                    <Link href="/bso/bulls_gaming" className="text-center" style={{ textDecoration: "none" }}>
                        <Image src="https://dpc-gmni-blitar.vercel.app/logo_bso/bulls_gaming.png" className="img-fluid" alt="logo_bso" width={150} height={150}/>
                        <span className="text-white text-center font-semibold">BULLS GAMING</span>
                    </Link>

                </div>

            </div>

        </>
    )
}

// const BsoBanner = () => {
//   const logos = [
//     { src: "http://localhost:3000/berjalan_aset/berjalan1.jpg", alt: "berjalan1" },
//     { src: "http://localhost:3000/logo_gmni-aset/logo_bintang.png", alt: "berjalan2" },
//     { src: "http://localhost:3000/logo_gmni-aset/logo_kepengurusan.png", alt: "berjalan3" },
//     { src: "http://localhost:3000/logo_gmni-aset/logo_komunikasi.png", alt: "berjalan4" },
//   ];

//   // Gandakan untuk marquee looping
//   const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

//   return (
//     <section className="py-5" style={{ backgroundColor: "rgba(45, 45, 45, 1)" }}>
//       <div className="overflow-hidden position-relative">
//         <div
//           className="d-flex align-items-center"
//           style={{
//             width: "max-content",
//             animation: "gmniMarquee 40s linear infinite",
//           }}
//         >
//           {repeatedLogos.map((logo, idx) => (
//             <div
//               key={idx}
//               className="mx-5 flex-shrink-0 logo-container"
//             >
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={120}
//                 height={120}
//                 className="logo-img"
//                 style={{
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animasi berjalan dan efek zoom in */}
//       <style jsx>{`
//         @keyframes gmniMarquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .logo-container {
//           transition: transform 0.4s ease, filter 0.4s ease;
//         }

//         .logo-img {
//           filter: grayscale(100%) brightness(90%);
//           transition: transform 0.4s ease, filter 0.4s ease;
//         }

//         /* efek zoom in saat hover */
//         .logo-img:hover {
//           filter: grayscale(0%) brightness(100%);
//           transform: scale(1.15); /* zoom in */
//           animation: zoomIn 0.5s ease-in-out;
//         }

//         @keyframes zoomIn {
//           from {
//             transform: scale(0.8);
//             opacity: 0.7;
//           }
//           80% {
//             transform: scale(1.2);
//             opacity: 1;
//           }
//           to {
//             transform: scale(1.15);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

export default BsoBanner