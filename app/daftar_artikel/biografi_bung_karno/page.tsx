
import { Container } from "react-bootstrap"
import Image from "next/image"

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
                    src="https://dpc-gmni-blitar.vercel.app/thumbnail/banner_thumbnail.png"
                    alt="thumbnail"
                    width={700}
                    height={650}
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />

                {/* Judul */}
                <h3 className="mt-4" style={{ color: "rgba(0, 0, 0, 1)" }}>
                    BIOGRAFI BUNG KARNO
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
                    **Biografi Bung Karno: Bapak Proklamator dan Presiden Pertama Indonesia**

                    **Pendahuluan**

                    Soekarno, atau yang lebih dikenal dengan sebutan Bung Karno, adalah salah satu tokoh paling berpengaruh dalam sejarah Indonesia. Sebagai Bapak Proklamator dan Presiden pertama Indonesia, ia memainkan peran kunci dalam perjuangan kemerdekaan bangsa dari penjajahan. Kehidupannya penuh dengan dinamika politik, perjuangan ideologis, dan upaya tiada henti untuk memajukan bangsa.

                    **Kehidupan Awal**

                    Soekarno lahir dengan nama asli Koesno Sosrodihardjo pada 6 Juni 1901 di Surabaya, Jawa Timur. Ayahnya, Raden Soekemi Sosrodihardjo, adalah seorang guru sekolah dasar, sementara ibunya, Ida Ayu Nyoman Rai, berasal dari keluarga bangsawan Bali. Koesno muda kemudian berganti nama menjadi Soekarno setelah sering jatuh sakit, sesuai tradisi Jawa yang mempercayai pergantian nama dapat membawa keberuntungan.

                    Sejak kecil, Soekarno menunjukkan kecerdasan dan minat yang besar terhadap politik dan budaya. Setelah menyelesaikan pendidikan dasarnya, ia melanjutkan studi ke Sekolah Teknik (Technische Hoogeschool) di Bandung, yang kini dikenal sebagai Institut Teknologi Bandung (ITB), dan meraih gelar insinyur pada tahun 1926.

                    **Perjuangan Kemerdekaan**

                    Pada tahun 1927, Soekarno bersama beberapa rekannya mendirikan Partai Nasional Indonesia (PNI). Partai ini memiliki tujuan untuk mencapai kemerdekaan Indonesia melalui cara non-kooperatif dengan pemerintah kolonial Belanda. Akibat kegiatan politiknya yang semakin berpengaruh, Soekarno ditangkap dan dipenjara oleh pemerintah kolonial pada tahun 1929. Namun, setelah dibebaskan pada tahun 1931, ia terus melanjutkan perjuangan untuk kemerdekaan.

                    Selama masa pendudukan Jepang, Soekarno bekerjasama dengan pemerintah pendudukan Jepang, dengan harapan bahwa Jepang akan membantu Indonesia meraih kemerdekaan. Pada tanggal 17 Agustus 1945, Soekarno bersama Mohammad Hatta memproklamasikan kemerdekaan Indonesia, menjadikan Indonesia sebagai negara yang berdaulat.    
                </p>
            </Container>


        </>
    )
}

export default page