
"use client";


import { Container } from "react-bootstrap"
import Image from "next/image"
import BsoBanner from "@/components/BsoBanner"

const page = () => {
    return (
        <>

            <Container
                fluid="md"
                className="mt-5 mb-5 d-flex flex-column justify-content-center align-items-center text-center px-3"
                style={{ width: "100%", height: "auto" }}
                >
                {/* Gambar responsif */}
                <Image
                    src="https://dpc-gmni-blitar.vercel.app/thumbnail/banner_thumbnail.webp"
                    alt="thumbnail"
                    width={700}
                    height={650}
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />

                {/* Judul */}
                <h3 className="mt-4" style={{ color: "rgba(0, 0, 0, 1)" }}>
                    BADAN SEMI OTONOM PASAR RAKYAT
                </h3>

                {/* Garis Merah
                <hr
                    className="mx-auto my-3"
                    style={{
                    width: "100%",
                    maxWidth: "57rem",
                    height: "4px",
                    backgroundColor: "rgba(255, 0, 15, 1)",
                    border: "none"
                    }}
                /> */}
                <div
                    className="mx-auto mb-5"
                    style={{
                        width: '100%',
                        maxWidth: '57rem',
                        height: '4px',
                        backgroundColor: 'rgba(201, 1, 20, 1)',
                    }}
                ></div>

                {/* Paragraf responsif */}
                <p className="mt-2" style={{ maxWidth: "900px", width: "100%" }}>
                    Pasar Rakyat adalah Badan Semi Otonom yang berada di bawah naungan Dewan Pengurus Cabang GMNI Blitar. BSO ini fokus pada bidang pemasaran dan pengembangan minat serta bakat kader dalam dunia jual beli atau marketing. Pasar Rakyat bertujuan untuk memberikan wadah bagi kader GMNI dalam mengasah keterampilan dan pengetahuan mereka di bidang ekonomi dan bisnis, terutama dalam hal pemasaran. Melalui program-programnya, Pasar Rakyat berupaya mendorong kader agar lebih kompeten dalam dunia usaha dan memiliki jiwa kewirausahaan yang tangguh, sekaligus berkontribusi pada pengembangan ekonomi masyarakat lokal.    
                </p>
            </Container>
            <BsoBanner />

        </>
    )
}

export default page