import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Product from "./components/Product";
import Services from "./components/Services";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/products" element={<Product/>}/>
    {/* <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/> */}
   </Routes>
   <Services/>
   </BrowserRouter>
    </>
   
  );
}

export default App;
