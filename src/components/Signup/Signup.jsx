import { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { UserCreate } from '../../services/action/authAction';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';


function Signup() {

    const navigate = useNavigate();
    const { isSignup } = useSelector(state => state.userReducer);

    const [signupinput, setsignupinput] = useState({
        fname: "",
        email: "",
        password: "",
        c_password: "",
    })

    const handlechange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setsignupinput({ ...signupinput, [name]: value })

    }

    const dispatch = useDispatch();

    const handlesubmit = (e) => {

        e.preventDefault();

        dispatch(UserCreate(signupinput.email, signupinput.password));
        console.log("signup", signupinput);

    }
    if (isSignup) {
        // navigate("/Login")
        return(
            <Login/>
        )
    } else {
        return (
            <>
                <Form onSubmit={handlesubmit}>
                    <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-3 mt-3">
                        <Form.Control type="fname" name="fname" placeholder="Dhruvil Patoliya" onChange={handlechange} value={signupinput.fname} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" name="email" placeholder="name@example.com" onChange={handlechange} value={signupinput.email} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handlechange} value={signupinput.password} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3">
                        <Form.Control type="password" name="c_password" placeholder="Confirm Password" onChange={handlechange} value={signupinput.c_password} />
                    </FloatingLabel>

                    <NavLink to="/Login" className="text-decoration-none text-danger fs-5">
                        Alreadry have an account ? <a href="#">Login</a>
                    </NavLink>
                    <br />
                    <div className="bt pt-3">
                        <Button type='submit'>
                            Sing Up
                        </Button>
                    </div>
                </Form>
            </>
        );

    }
}

export default Signup;