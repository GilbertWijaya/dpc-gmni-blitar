import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { NavbarBrand, NavbarCollapse, NavbarToggle, NavLink, NavDropdown, DropdownDivider,DropdownItem , Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';


function Topbar() {
  return (
    <Navbar expand="lg" className="bg-body-danger" sticky='top' style={{ backgroundColor: "rgb(153,0,15)" }} variant='dark'>
      <Container fluid="md">
        <NavbarBrand href='#' className='fw-bold d-flex align-items-center'>
            <Image src="https://dpc-gmni-blitar.vercel.app/logo_gmni/LOGO_GMNI.png" alt='logo_gmni' width={60} height={50}/>
            <span style={{ marginLeft: '10px', color: 'white', fontSize: '1.25rem' }}>
                GMNI
            </span>
        </NavbarBrand>
        <NavbarToggle aria-controls="navbarScroll" />
        <NavbarCollapse id="navbarScroll">
          <Nav
            className="mx-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <NavLink href="/" className='mx-2 fw-semibold'>Home</NavLink>
            <NavLink href="/struktural_pengurusan" className='mx-2 fw-semibold'>Struktural</NavLink>
            <NavLink href="/daftar_artikel" className='mx-2 fw-semibold'>Artikel</NavLink>
            <NavDropdown title="Badan Semi Otonom" className='mx-2 custom-navdropdown-title fw-semibold' color='text-white' style={{ color:"#fff" }} id="navbarScrollingDropdown">
              <DropdownItem href="/bso/galeri_rakyat">BSO Galeri Rakyat</DropdownItem>
              <DropdownItem href="/bso/pasar_rakyat">
                BSO Pasar Rakyat
              </DropdownItem>
              <DropdownItem href="/bso/mega_dinandra">
                BSO Mega Dinandra
              </DropdownItem>
              <DropdownItem href="/bso/bulls_gaming">
                BSO Bulls Gaming
              </DropdownItem>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="light">🔎</Button>
          </Form>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;