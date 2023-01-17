   
import './App.css';
import Container from './Container';
import NavBar from './NavBar';
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Common from './ReactRouter/Common';
// import Home from './ReactRouter/Home';
// import Products from './ReactRouter/Product';
// import About from './ReactRouter/About';


function App() {
  return ( 
    //  <BrowserRouter>
    //  <Routes>
    //   <Route path='/'element={<Common/>}>
    //     <Route index element={<Home/>}/>
    //     <Route index path='About' element={<About/>}/>
    //     <Route index path='Products' element={<Products/>}/>
    //   </Route>
    //  </Routes>
    //  </BrowserRouter>
    <>
    <NavBar/>
    <Container/>
    </>
  );
}

export default App;
