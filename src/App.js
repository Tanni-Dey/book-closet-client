import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './components/Pages/AddBook/AddBook';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login';
import SignUp from './components/Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addbook' element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
