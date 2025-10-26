
import { Container, Form } from "react-bootstrap"
import { Row } from "react-bootstrap"
import {Col} from "react-bootstrap"
import Image from "next/image"
import {Button} from "react-bootstrap"

const BlackBottom = () => {
    return (
        <>

            

            <div className="p-5 pb-5" style={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 1)" }}>
                <div className="container">
                    <div className="d-flex flex-column flex-md-row gap-4 justify-content-between align-items-start">

                        {/* Section Keterangan */}
                        <div className="keterangan d-flex flex-column flex-sm-row align-items-center gap-3">
                            <div className="logo">
                                <Image
                                    src="http://localhost:3000/logo_gmni-aset/logo_gmni.png"
                                    alt="logo_gmni"
                                    width={150}
                                    height={150}
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>

                            <div className="penjelasan text-center text-white mx-auto" style={{ maxWidth: "700px", width: "100%" }}>
                                <span className="">
                                    GMNI adalah singkatan dari Gerakan Mahasiswa Nasional Indonesia, sebuah organisasi mahasiswa ekstrakampus yang didirikan pada 23 Maret 1954 di Surabaya. Organisasi ini merupakan hasil peleburan dari tiga gerakan mahasiswa sebelumnya dan memiliki tujuan untuk mendidik kader bangsa dalam mewujudkan Sosialisme Indonesia berdasarkan Pancasila. GMNI aktif di hampir seluruh Indonesia dan sering melakukan kegiatan kaderisasi, advokasi, literasi, serta demonstrasi.
                                </span>
                            </div>
                        </div>

                        {/* Section Kontak */}
                        <div className="kontak d-flex text-center flex-column flex-sm-row align-items-center gap-3">
                            <div className="kontak text-white">
                                <div className="d-flex flex-column gap-2">
                                    <div><strong>Contact Person:</strong> 0812-3456-7890</div>
                                    <div><strong>Email:</strong> info@gmni-blitar.org</div>
                                    <div><strong>Alamat:</strong> Jl. Pahlawan No. 123, Blitar</div>
                                </div>
                            </div>

                            <div className="penjelasan text-white text-start w-100">
                                <Form className="p-5 rounded-xl" style={{ backgroundColor: "rgba(238, 7, 29, 1)" }}>
                                    <Row className="g-2">
                                        <Col xs={12} sm="auto">
                                            <Form.Control
                                            type="text"
                                            placeholder="Search"
                                            className="mr-sm-2"
                                            />
                                        </Col>
                                        <Col xs={12} sm="auto">
                                            <Button type="submit" style={{ backgroundColor: "rgba(44, 44, 44, 1)" }} className="w-100 w-sm-auto">Submit</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        
        </>
    )
}

export default BlackBottom