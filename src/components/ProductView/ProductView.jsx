import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { dataDelete, dataGet, datasingle } from "../../services/action/product.action";
import { useEffect } from "react";


const ProductView = () => {

  const { products } = useSelector(state => state.ProductReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = async (id) => {
    await dispatch(datasingle(id))
    navigate('/Edit');  
  }

  const handleDelete = (id) => {
    dispatch(dataDelete(id))
  }

  useEffect(() => {
    dispatch(dataGet());
  }, [dispatch])

  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((add, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{add.name}</td>
              <td>{add.email}</td>
              <td>{add.password}</td>
              <td>{add.number}</td>
              <td>
                <Button variant="info" onClick={() => handleUpdate(add.id)}>
                  Update
                </Button>
                |||||
                <Button variant="danger" onClick={() => handleDelete(add.id)}>
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default ProductView;