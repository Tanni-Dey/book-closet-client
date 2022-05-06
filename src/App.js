import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './components/Pages/About/About';
import AddBook from './components/Pages/AddBook/AddBook';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login';
import ManageAllbooks from './components/Pages/ManageAllbooks/ManageAllbooks';
import ManageBook from './components/Pages/ManageBook/ManageBook';
import MyBooks from './components/Pages/MyBooks/MyBooks';
import NotFound from './components/Pages/NotFound/NotFound';
import SignUp from './components/Pages/SignUp/SignUp';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import RequiredAuth from './components/Shared/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/addbook' element={<RequiredAuth>
          <AddBook />
        </RequiredAuth>} />
        <Route path='/mybooks' element={<RequiredAuth>
          <MyBooks />
        </RequiredAuth>} />
        <Route path='/allbooks' element={<RequiredAuth>
          <ManageAllbooks />
        </RequiredAuth>} />
        <Route path='/book/:id' element={<RequiredAuth>
          <ManageBook />
        </RequiredAuth>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
