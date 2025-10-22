
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

                <h3 className="text-center mb-4 " style={{ color: "rgba(153, 0, 15, 1)" }}>STRUKTURAL ORGANISASI</h3>
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

                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/vita.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>SARINAH VITA</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/bagus.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>BUNG BAGUS</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/iko.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>BUNG RIKO</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/rahadian.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>BUNG RAHADIAN</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/puan.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>SARINAH PUAN</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/anggie.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>SARINAH ANGGIE</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/arif.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>BUNG ARIF</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/ziya.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>SARINAH ZIYA</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/afifah.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>SARINAH AFIFAH</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/ulin.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>BUNG ULIN</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>
                    <Card style={{ width: '18rem' }} className="rounded-top-4">
                    <CardImg className="rounded-top-4" variant="top" src="http://localhost:3000/struktural/hal_2/rijal.jpg" />
                    <CardBody className="text-center text-white rounded-bottom-3" style={{ backgroundColor: "rgba(163, 0, 16, 1)" }}>
                        <CardTitle>BUNG RIJAL</CardTitle>
                        <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                    </CardBody>
                    </Card>

                </div>

            </Container>


        </>
    )
}

export default page