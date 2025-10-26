
import { Container } from "react-bootstrap"
import { Card } from "react-bootstrap"
import {CardImg} from "react-bootstrap"
import {CardBody} from "react-bootstrap"
import {CardTitle} from "react-bootstrap"
import {CardText} from "react-bootstrap"
import Link from "next/link"

const ArtikelBeranda = () => {
    return (
        <>

            <div className="py-5">

                <Container>

                    <h3 className="text-center mb-4" style={{ color: 'rgba(201, 1, 20, 1)' }}>ARTIKEL</h3>
                    <div
                    className="mx-auto mb-5"
                    style={{
                        width: '100%',
                        // maxWidth: '57rem',
                        height: '4px',
                        backgroundColor: 'rgba(201, 1, 20, 1)',
                    }}
                    ></div>

                    <div className="d-flex flex-wrap justify-content-center gap-4">

                        <Link href="/daftar_atikel/biografi_bung_karno" style={{ textDecoration: "none" }}>
                            <Card style={{ width: '18rem' }} className="rounded-top-4">
                            <CardImg className="rounded-top-4" variant="top" src="https://dpc-gmni-blitar.vercel.app/thumbnail/artikel_thumbnail.jpg" />
                            <CardBody className="text-center text-dark rounded-bottom-3" style={{ backgroundColor: "rgba(217, 217, 217, 1)" }}>
                                <CardTitle>BIOGRAFI BUNG KARNO</CardTitle>
                                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                            </CardBody>
                            </Card>
                        </Link>
                        <Link href="/daftar_atikel/Indonesia_menggugat" style={{ textDecoration: "none" }}>
                            <Card style={{ width: '18rem' }} className="rounded-top-4">
                            <CardImg className="rounded-top-4" variant="top" src="https://dpc-gmni-blitar.vercel.app/thumbnail/artikel_thumbnail.jpg" />
                            <CardBody className="text-center text-dark rounded-bottom-3" style={{ backgroundColor: "rgba(217, 217, 217, 1)" }}>
                                <CardTitle>INDONESIA MENGGUGAT</CardTitle>
                                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                            </CardBody>
                            </Card>
                        </Link>

                    </div>

                    <div className="d-flex justify-content-center mt-5">
                        <Link
                            href="/daftar_artikel"
                            className="btn text-white px-4 py-2 rounded-pill shadow"
                            style={{
                            backgroundColor: 'rgba(250, 29, 51, 1)',
                            fontWeight: '600',
                            }}
                        >
                            LIHAT SEMUA
                        </Link>
                    </div>
                    
                </Container>

            </div>

        
        </>
    )
}

export default ArtikelBeranda