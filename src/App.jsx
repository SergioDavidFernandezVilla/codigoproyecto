import { useState, useEffect } from "react";
import "./App.css";
import HeaderComponent from "./components/menu/HeaderComponent.jsx";
import ContainerProductos from "./components/containerProductos/ContainerProductos.jsx";
import BackgroundComponent from "./components/presentacion/background/BackgroundComponent.jsx";
import NotificacionComponent from "./components/presentacion/notificacion/NotificacionComponent.jsx";

function App() {
  const [cantidadProductos, setCantidadProductos] = useState(0);
  const [modalCarrito, setModalCarrito] = useState(false);
  const [carrito, setCarrito] = useState([]);

  // NOTIFICACIONES MODO
  const [modoNotificacionGrupo, setModoNotificacionGrupo] = useState({
    agregarAlCarrito: false,
    eliminarDelCarrito: false,
  });

  return (
    <>
      {modalCarrito && <BackgroundComponent />}

      {/*QUE SOLO APAREZCA CUANDO SE LE LLAME A LA NOTIFICACION*/}
      {modoNotificacionGrupo.activo && (
        <NotificacionComponent modoNotificacionGrupo={modoNotificacionGrupo} />
      )}

      <HeaderComponent
        modoNotificacionGrupo={modoNotificacionGrupo}
        setModoNotificacionGrupo={setModoNotificacionGrupo}
        cantidadProductos={cantidadProductos}
        setCantidadProductos={setCantidadProductos}
        carrito={carrito}
        setCarrito={setCarrito}
        modalCarrito={modalCarrito}
        setModalCarrito={setModalCarrito}
      />

      <main>
        <ContainerProductos
          carrito={carrito}
          setCarrito={setCarrito}
          modoNotificacionGrupo={modoNotificacionGrupo}
          setModoNotificacionGrupo={setModoNotificacionGrupo}
          cantidadProductos={cantidadProductos}
          setCantidadProductos={setCantidadProductos}
        />
      </main>
    </>
  );
}

export default App;
