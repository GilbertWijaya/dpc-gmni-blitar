
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
                    INDONESIA MENGGUGAT
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
                <p className="mt-2 text-start" style={{ maxWidth: "900px", width: "100%" }}>
                    <h3>Indonesia Menggugat: Manifesto Perlawanan Soekarno terhadap Kolonialisme</h3>

                    <br />

                    <h3>Pendahuluan</h3>

                    "Indonesia Menggugat" adalah sebuah pidato legendaris yang disampaikan oleh Soekarno di hadapan Pengadilan Kolonial Belanda pada tahun 1930. Pidato ini tidak hanya menggambarkan keteguhan hati Soekarno sebagai pemimpin pergerakan kemerdekaan, tetapi juga menjadi manifesto yang menginspirasi perjuangan melawan penjajahan di Indonesia. Dalam pidatonya, Soekarno secara terbuka menantang kekuasaan kolonial Belanda dan mengecam ketidakadilan serta penindasan yang dilakukan terhadap rakyat Indonesia.

                    <br />
                    <br />

                    <h3>Latar Belakang</h3>

                    Pada tahun 1927, Soekarno bersama para pemuda nasionalis lainnya mendirikan Partai Nasional Indonesia (PNI), sebuah organisasi yang bertujuan untuk memperjuangkan kemerdekaan Indonesia dari penjajahan Belanda. PNI berkembang pesat dan dengan cepat menjadi ancaman bagi pemerintah kolonial. Melihat pengaruh Soekarno dan PNI yang semakin kuat, pemerintah Belanda mulai mengambil tindakan represif.

                    Pada 29 Desember 1929, Soekarno ditangkap oleh pemerintah kolonial Belanda bersama beberapa pemimpin PNI lainnya dengan tuduhan menghasut dan merencanakan pemberontakan. Mereka dibawa ke penjara Banceuy di Bandung, dan kasusnya disidangkan pada tahun 1930 di Pengadilan Landraad, Bandung.

                    <br />
                    <br />

                    <h3>Isi Pidato Indonesia Menggugat</h3>

                    Pidato "Indonesia Menggugat" disampaikan Soekarno pada tanggal 18 Agustus 1930 di hadapan Pengadilan Landraad sebagai pembelaan atas tuduhan yang diarahkan kepadanya. Namun, pidato ini bukan hanya sekadar pembelaan hukum, melainkan juga menjadi deklarasi politik yang menentang keberadaan kolonialisme di Indonesia.

                    Dalam pidato tersebut, Soekarno dengan tegas menyatakan bahwa yang seharusnya duduk di kursi terdakwa bukanlah dirinya atau PNI, melainkan kolonialisme Belanda yang telah menindas rakyat Indonesia selama berabad-abad. Ia mengkritik keras kebijakan-kebijakan Belanda yang hanya memperkaya bangsa kolonial sementara rakyat Indonesia hidup dalam kemiskinan dan penderitaan.
                </p>
            </Container>


        </>
    )
}

export default page