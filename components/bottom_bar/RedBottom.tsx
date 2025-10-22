
import { Card, CardBody, CardHeader, CardText, CardTitle, Container } from "react-bootstrap"

const RedBottom = () => {
    return (
        <>

            <div className="p-5 pb-5" style={{ width: "100%", height: "auto", backgroundColor: "rgba(201, 1, 20, 1)" }}>

                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-sm-center gap-5">

                    <Card
                    style={{ width: '18rem' , height: "15rem", backgroundColor: "rgba(185, 0, 18, 1)"}}
                    className="mb-2 text-white text-center"
                    >
                    <CardHeader className="fw-semibold" style={{  backgroundColor: "rgba(163, 0, 16, 1)" }}>FACEBOOK</CardHeader>
                    {/* <CardBody >
                        <CardTitle> Card Title </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </CardText>
                    </CardBody> */}
                    </Card>
                    <Card
                    style={{ width: '18rem' , height: "15rem", backgroundColor: "rgba(185, 0, 18, 1)"}}
                    className="mb-2 text-white text-center"
                    >
                    <CardHeader className="fw-semibold" style={{  backgroundColor: "rgba(163, 0, 16, 1)" }}>INSTAGRAM</CardHeader>
                    {/* <CardBody >
                        <CardTitle> Card Title </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </CardText>
                    </CardBody> */}
                    </Card>
                    <Card
                    style={{ width: '18rem' , height: "15rem", backgroundColor: "rgba(185, 0, 18, 1)"}}
                    className="mb-2 text-white text-center"
                    >
                    <CardHeader className="fw-semibold" style={{  backgroundColor: "rgba(163, 0, 16, 1)" }}>X</CardHeader>
                    {/* <CardBody >
                        <CardTitle> Card Title </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </CardText>
                    </CardBody> */}
                    </Card>
                    

                </div>
            </div>
        
        </>  
    )
}

export default RedBottom