import {Card, Button, Form, Row, Col} from 'react-bootstrap';

function ProductCard(props){
const product = props.product 
    return(
        <Card>
            <Card.Body>
            <Card.Img className="card-img-top" src={product.picture}></Card.Img>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button className="">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard