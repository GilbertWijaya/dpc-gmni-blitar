
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
                        <Image src="https://dpc-gmni-blitar.vercel.app/logo_bso/pasar_rakyat.png" className="img-fluid" alt="logo_bso" width={150} height={150}/>
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

export default BsoBanner