
import Image from "next/image"

const LogoGmni = () => {
    return (
        <>

            <div className="banner-container d-flex flex-wrap justify-content-center align-items-center  p-4 gap-5" style={{ width: "100%", backgroundColor: "rgba(45, 45, 45, 1)" }}>

                <div className="image-container d-flex flex-column justify-content-center align-items-center">

                    <Image src="https://dpc-gmni-blitar.vercel.app/logo_gmni-aset/logo_gmni.png" className="img-fluid" alt="logo_bso" width={150} height={150}/>
                    {/* <span className="text-white text-center font-semibold">GALERI RAKYAT</span> */}

                </div>
                <div className="image-container d-flex flex-column justify-content-center align-items-center">

                    <Image src="https://dpc-gmni-blitar.vercel.app/logo_gmni-aset/logo_bintang.png" className="img-fluid" alt="logo_bso" width={150} height={150}/>
                    {/* <span className="text-white text-center font-semibold">GALERI RAKYAT</span> */}

                </div>
                <div className="image-container d-flex flex-column justify-content-center align-items-center">

                    <Image src="https://dpc-gmni-blitar.vercel.app/logo_gmni-aset/logo_kepengurusan.png" className="img-fluid" alt="logo_bso" width={150} height={150}/>
                    {/* <span className="text-white text-center font-semibold">GALERI RAKYAT</span> */}

                </div>
                <div className="image-container d-flex flex-column justify-content-center align-items-center">

                    <Image src="https://dpc-gmni-blitar.vercel.app/logo_gmni-aset/logo_komunikasi.png" className="img-fluid" alt="logo_bso" width={150} height={150}/>
                    {/* <span className="text-white text-center font-semibold">GALERI RAKYAT</span> */}

                </div>
                
            </div>
        
        </>
    )
}

export default LogoGmni