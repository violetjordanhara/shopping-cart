import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../products';

function Store(){
    return(
        <>
        <h1 align="center" className="p-3">Welcome to The Pie Shop</h1>
        <Row xs={1} md={3} className='g-4'>
            {productsArray.map((product, idx) => (
                <Col align="center" key={idx}>
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default Store;