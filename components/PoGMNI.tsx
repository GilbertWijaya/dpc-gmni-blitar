
import { Container } from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import Link from "next/link"

const PoGMNI = () => {
    return (
        <>

            <div className="py-5">
                <Container>
                    <h3 className="text-center mb-4" style={{ color: 'rgba(201, 1, 20, 1)' }}>PEDOMAN ORGANISASI GMNI</h3>
                    <div
                    className="mx-auto mb-5"
                    style={{
                        width: '100%',
                        // maxWidth: '57rem',
                        height: '4px',
                        backgroundColor: 'rgba(201, 1, 20, 1)',
                    }}
                    ></div>

                    <Row className="g-4">
                    {/* Kolom Gambar */}
                    <Col md={5} className="d-flex align-items-stretch">
                        <div className="w-100 h-100">
                        <img
                            src="https://dpc-gmni-blitar.vercel.app/thumbnail/po-gmni.webp"
                            alt="Buku Pedoman Organisasi"
                            className="img-fluid rounded shadow h-100 w-100 object-fit-cover"
                            style={{ objectFit: 'cover' }}
                        />
                        </div>
                    </Col>

                    {/* Kolom Teks */}
                    <Col md={7} className="d-flex align-items-stretch">
                        <div  style={{ backgroundColor: "rgba(163, 0, 16, 1)" }} className="text-light p-4 p-md-5 rounded shadow w-100 d-flex flex-column justify-content-between">
                        <div >
                            <p>
                            Kami, anggota Gerakan Mahasiswa Nasional Indonesia adalah Pejuang Pemikir-Pemikir Pejuang Indonesia. Dari bara api pengabdian ini, kami mengaku bahwa:
                            </p>
                            <ol>
                            <li>
                                Kami adalah manusia-manusia jujur, tulus, dan berani serta setia
                                berbakti pada kaum marhaen...
                            </li>
                            <li>(<Link className="text-white" href="https://drive.google.com/drive/folders/1-HEZWHXdIKRQZDe05SjR5nGrs-SzYIZT">Unduh Pedoman Organisasi</Link>)</li>
                            </ol>
                        </div>
                        <p className="mt-4 fst-italic text-end">
                            Merdeka!!! GMNI Jaya!!! Marhaen Menang!!!
                        </p>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>

        
        </>
    )
}

export default PoGMNI