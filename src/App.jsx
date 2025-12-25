import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Jawa from "./components/Jawa";
import Navbar from "./components/Navbar";
import Yezdi from "./components/Yezdi";

function App(){
  return(
    <main>
      <Navbar/>
      <div style={{background:'linear-gradient(75deg, #0F0F0F 10%, #153536 100%)'}}>
        <Home/>
        <Jawa/>
        <Yezdi/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}

export default App;
