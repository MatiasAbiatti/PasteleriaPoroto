import { BrowserRouter, Link, Routes, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}></Route>
          <Route  path="/categoria/:category" element={<ItemListContainer />}></Route>         
          <Route  path="/item/:id" element={<ItemDetailContainer />}></Route>  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
