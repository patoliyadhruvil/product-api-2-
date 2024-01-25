import { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Userlogin, popUpSignIn } from '../../services/action/authAction';
import {  useNavigate } from 'react-router';



const Login = () => {

    const navigate = useNavigate();
    const {isLogin , user} = useSelector(state => state.userReducer);

    const [LoginInput , setLoginInput] = useState({
        email : '',
        password : ''
    })

    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLoginInput({...LoginInput , [name] : value})

    }

    const dispatch = useDispatch();

    const handlesubmit = (e) => {

        e.preventDefault();

        dispatch(Userlogin(LoginInput.email , LoginInput.password))
        console.log("Login" , LoginInput);

    }

    const handleSignUp = () => {
        console.log("Hello");
        dispatch(popUpSignIn())
    }

    if(isLogin){
    return(
        <>
            <h1>Welcome to Login Page</h1>
        </>
    )
    }else{
        return (
            <>
                <Form onSubmit={handlesubmit}>
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" name="email" placeholder="name@example.com" onChange={handlechange} value={LoginInput.email}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handlechange} value={LoginInput.password}/>
                    </FloatingLabel>
                    <Button type='submit'>
                        Login
                    </Button>
                    ||||
                    <Button onClick={handleSignUp}>
                        Google
                    </Button>
                </Form>
            </>
        );
    }


}

export default Login;