import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Await, useNavigate } from 'react-router';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { Productadmin } from '../../services/action/product.action';


const ProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ProductData, setProductData] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProductData({ ...ProductData, [name]: value });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    await dispatch(Productadmin(ProductData))
    setProductData({
      name: '',
      email: '',
      password: '',
      number: '',
    })
    navigate("/view");
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <div className="form">
          <div className="col-9 detail">
            <Form className="pt-3 form-container" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group controlId="formGridFirstName">
                  <Form.Label className="mb-0">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter The Name"
                    name="name"
                    value={ProductData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGridNumber">
                  <Form.Label className="mb-0">Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Your Mobile Number"
                    name="number"
                    value={ProductData.number}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="mb-0">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={ProductData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                  <Form.Label className="mb-0">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    value={ProductData.password}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default ProductForm;
