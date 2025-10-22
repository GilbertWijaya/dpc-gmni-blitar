
import { Container } from "react-bootstrap"
import { Card } from "react-bootstrap"
import {CardImg} from "react-bootstrap"
import {CardText} from "react-bootstrap"
import {CardTitle} from "react-bootstrap"
import {CardBody} from "react-bootstrap"
import Link from "next/link"

const page = () => {
    return (
        <>

            <Container fluid="md" className="pt-5 pb-5">

                <h3 className="text-center mb-4 " style={{ color: "rgba(153, 0, 15, 1)" }}>DAFTAR ARTIKEL</h3>
                {/* <hr 
                    className="mx-auto my-3"
                    style={{ width: "100%", maxWidth: "57rem", height: "4px", backgroundColor: "rgba(255, 0, 15, 1)", border: "none" }} 
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

                <div className="d-flex flex-wrap justify-content-center gap-4">

                    <Link href="/daftar_artikel/biografi_bung_karno" style={{ textDecoration: "none" }}>
                        <Card style={{ width: '18rem' }} className="rounded-top-4">
                        <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/thumbnail/artikel_thumbnail.jpg" />
                        <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                            <CardTitle>Biografi Bung Karno</CardTitle>
                            <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                        </CardBody>
                        </Card>
                    </Link>
                    <Link href="/daftar_artikel/Indonesia_menggugat" style={{ textDecoration: "none" }}>
                        <Card style={{ width: '18rem' }} className="rounded-top-4">
                        <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/thumbnail/artikel_thumbnail.jpg" />
                        <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                            <CardTitle>Indonesia Menggugat</CardTitle>
                            <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                        </CardBody>
                        </Card>
                    </Link>

                </div>
            </Container>


        </>
    )
}

export default page