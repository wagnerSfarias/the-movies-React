
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";

export default function RoutesApp(){
    return(
        <BrowserRouter>
             <Routes> 
                <Route path='/'  element={<Home/>}/>
               <Route path='/detail/:id'  element={<Detail/>}/>
               <Route path='/mylist'  element={<Favorite/>}/>
              </Routes> 
        </BrowserRouter>
    )
}