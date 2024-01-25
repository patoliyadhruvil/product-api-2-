import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { dataEdit } from "../../services/action/product.action";
import { useNavigate } from "react-router";


const ProductEdit = () => {

  const{products} = useSelector((state) => state.ProductReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ProductData, setProductData] = useState(products);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductData({ ...ProductData, [name]: value });
};


  const handleUpSub = (e) =>{
    e.preventDefault();
    dispatch(dataEdit(ProductData));
    setProductData({
      name: '',
      email: '',
      password: '',
      number: '',
    })

    navigate('/view');
  }


  return (
    <Container className='edit-form-container'>
      <Form onSubmit={handleUpSub}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter The name" name="name" value={ProductData.name} onChange={handleChange}/>
          </Col>
          <Col>
            <Form.Label>Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Your Mobile Number" name="number" value={ProductData.number} onChange={handleChange}/>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Email" name="email" value={ProductData.email} onChange={handleChange}/>
          </Col>
          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" name="password" value={ProductData.password} onChange={handleChange}/>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default ProductEdit;
