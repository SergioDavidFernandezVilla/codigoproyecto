import { useState } from "react";
import "./App.css";
import ButtonComponent from "./components/presentacion/ButtonComponent.jsx";
import HeaderComponent from "./components/menu/HeaderComponent.jsx";
import ContainerProductos from "./components/containerProductos/ContainerProductos.jsx";
function App() {
  return (
    <>
      <HeaderComponent />

      <main>
        <ContainerProductos />
      </main>
    </>
  );
}

export default App;
