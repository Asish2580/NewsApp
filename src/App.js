
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";


const App=() =>{
 const pageSize=7
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        
        <Routes>
        <Route exact path="/" element={<News key="general" country={"in"} pageSize={pageSize}  category={"general"}/>}/>

        <Route exact path="/general" element={<News key="general" country={"in"} pageSize={pageSize}  category={"general"}/>}/>
        <Route exact path="/business" element={<News key="business" country={"in"} pageSize={pageSize}  category={"business"}/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" country={"in"} pageSize={pageSize}  category={"entertainment"}/>}/>
        <Route exact path="/health" element={<News key="health" country={"in"} pageSize={pageSize}  category={"health"}/>}/>
        <Route exact path="/science" element={<News key="science" country={"in"} pageSize={pageSize}  category={"science"}/>}/>
        <Route exact path="/sports" element={<News key="sports" country={"in"} pageSize={pageSize}  category={"sports"}/>}/>
        <Route exact path="/technology" element={<News key="technology" country={"in"} pageSize={pageSize}  category={"technology"}/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
    }
    export default App;

