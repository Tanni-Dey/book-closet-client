import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddBook from './components/Pages/AddBook/AddBook';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login';
import ManageBook from './components/Pages/ManageBook/ManageBook';
import SignUp from './components/Pages/SignUp/SignUp';
import Header from './components/Shared/Header/Header';
import RequiredAuth from './components/Shared/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/book/:id' element={<RequiredAuth>
          <ManageBook />
        </RequiredAuth>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
