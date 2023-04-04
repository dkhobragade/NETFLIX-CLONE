import './App.css';
import Header from './components/Header/Header';
import SignIn from './components/Sign/SignIn';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBarStaring from './components/Page/NavBarStaring';
import Page1 from './components/Page/Page1';
import Bg from './components/Page/Bg'



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/home' element={<Bg/>}/>
      </Routes>
    </BrowserRouter> 

    </>
  );
}

export default App;
