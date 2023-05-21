import {Navbar, Button, Modal, Container, Nav} from 'react-bootstrap';
function NavbarComponent(){
    return(
        <Navbar expand="sm">
            <Navbar.Brand>The Store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button>Cart Items</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent