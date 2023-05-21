import {Navbar, Button, Modal, Container, Nav} from 'react-bootstrap';
import { useState } from 'react';
function NavbarComponent(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Navbar expand="sm">
            <Navbar.Brand>The Pie Shop</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button onClick={handleShow}>Cart Items</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>Basket</Modal.Header>
            <Modal.Body>Shopping cart items here</Modal.Body>
        </Modal>
        </>
    )
}

export default NavbarComponent