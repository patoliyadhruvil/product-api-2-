import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userSignOut } from '../../services/action/authAction';


function Header() {

  const {isLogin} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handlelogout = () => {
    dispatch(userSignOut())
  }

  return (
    <header className="product-admin-header shadow-lg">
      <nav className="navbar navbar-expand-lg bg-gradient">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-dark" >
            <img src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/logo.svg" alt="image" width={200} />
          </NavLink>

          {
            isLogin ?
             <Button onClick={handlelogout}>Logout</Button> 
             : <>
                  <NavLink to="/SignUP" className='text-decoration-none'>Sign in</NavLink>
             </>
          }
        </div>
      </nav>
    </header>
  );
}

export default Header;
