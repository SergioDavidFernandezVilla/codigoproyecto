// LIBRERIAS
import React, { useState } from "react";

// CONTEXT PROVIDER
import { CarritoProvider } from "./components/products/context/useContextCarrito";
import { NotificacionProvider } from "./components/notificacion/context/useContextNotificacion";

// COMPONENTES
import HeaderComponent from "./components/menu/headerComponent/HeaderComponent";
import ContainerProductos from "./components/products/containerProductos/ContainerProductos";
import BackgroundComponent from "./components/presentacion/background/BackgroundComponent";
import NotificacionComponent from "./components/notificacion/notificacionComponent/NotificacionComponent";

function App() {
  const [modalCarrito, setModalCarrito] = useState<boolean>(false);

  return (
    <CarritoProvider>
      <NotificacionProvider>
        {modalCarrito && <BackgroundComponent />}

        <NotificacionComponent />

        <HeaderComponent
          modalCarrito={modalCarrito}
          setModalCarrito={setModalCarrito}
        />

        <main>
          <ContainerProductos />
        </main>
      </NotificacionProvider>
    </CarritoProvider>
  );
}

export default App;
