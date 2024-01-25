import Header from './components/Header/Header';
import store from './store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; 
import ProductView from './components/ProductView/ProductView';
import ProductEdit from './components/ProductEdit/ProductEdit';
import Signup from './components/Signup/Signup';
import Sidebar from './components/Sidebar/sidebar';
import ProductForm from './components/ProductForm/ProductForm';
import Login from './components/Login/Login';

function App() {
  return (
    <Provider store={store}>
      <div className="page-wrapper">
        <Header />  
      </div>
      <Sidebar />
      <div className="page-body-wrapper">
        <div className="page-body">
          <Routes>
            <Route path="/" element={<ProductForm />} />
            <Route path="/View" element={<ProductView />} />
            <Route path="/Edit" element={<ProductEdit />} />
            <Route path='/SignUP' element={<Signup/>}/>
            <Route path='/Login' element={<Login/>}/>
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
