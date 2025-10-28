
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
                    BADAN SEMI OTONOM GALERI RAKYAT
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
                    GALERI RAKYAT (Gerakan Lentera Rakyat Indonesia) adalah Badan Semi Otonom yang bernaung di bawah DPC GMNI Blitar, dengan fokus pada bidang publikasi, pers, dan media massa. Organisasi ini berperan sebagai garda terdepan dalam mengelola informasi, menyebarluaskan berita, serta mendokumentasikan kegiatan dan aspirasi anggota GMNI Blitar. Melalui platform ini, GALERI RAKYAT berkomitmen untuk menyuarakan kepentingan rakyat serta memperjuangkan nilai-nilai kebangsaan dan kerakyatan dalam konteks modern, sekaligus menjadi sarana edukasi dan pencerahan bagi masyarakat luas
                </p>
            </Container>
            
            <BsoBanner/>

        </>
    )
}

export default page