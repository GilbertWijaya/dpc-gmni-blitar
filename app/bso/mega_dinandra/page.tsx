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
                    BADAN SEMI OTONOM MEGA DINANDRA
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
                    MEGA DINANDRA adalah Badan Semi Otonom dari DPC GMNI Blitar yang bergerak di bidang advokasi, pendidikan politik, hukum, serta bantuan hukum. Organisasi ini berfokus pada pemberdayaan anggota dan masyarakat melalui pendidikan politik yang mendalam, peningkatan kesadaran hukum, serta advokasi yang efektif. MEGA DINANDRA bekerja sama dengan Alumni GMNI untuk memberikan bantuan hukum yang berintegritas dan memperjuangkan keadilan sosial di berbagai sektor. Tujuan utama organisasi ini adalah membentuk kader-kader yang memiliki kesadaran politik yang tinggi dan berperan aktif dalam menciptakan perubahan positif di masyarakat.    
                </p>
            </Container>
            <BsoBanner />

        </>
    )
}

export default page