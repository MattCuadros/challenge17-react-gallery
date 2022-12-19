import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App=()=>{


  return (
    <div className="d-flex flex-column justify-content-between">
      <Header title="Galería de Imágenes con React"/>
      <div className="grid-gallery text-center">
        <Card url="https://images.pexels.com/photos/13862472/pexels-photo-13862472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"title="Destinos" description="Descubre mis lugares favoritos para ir de Vacaciones"/>
        <Card url="https://images.pexels.com/photos/13054478/pexels-photo-13054478.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"title="Platos" description="Te invito a conocer mis Platos favoritos"/>
        <Card url="https://images.pexels.com/photos/6744288/pexels-photo-6744288.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"title="Mis Mascotas" description="Ellos son Mya & Clauss, mis compañeros inseparables"/>
        <Card url="https://images.pexels.com/photos/14690500/pexels-photo-14690500.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"title="Compras" description="Aquí te muestro los mejores lugares donde ir de compras."/>
        <Card url="https://images.pexels.com/photos/63633/bar-local-cong-ireland-63633.jpeg?auto=compress&cs=tinysrgb&w=600"title="Bares" description="Si a ti también te gusta conocer la bohemia de otros lugares, te enseño mis favoritos"/>
        <Card url="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600"title="Naturaleza" description="Acá te muestro los mejores lugares para desconectarse por un momento"/>
        <Card url="https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=600"title="Moda" description="Acá te enseño mis mejores outfit para este 2023"/>
        <Card url="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"title="Eventos" description="Te enseño los mejores eventos que se aproximan"/>
      </div>
      <Footer />
    </div>
  );
};

export default App;