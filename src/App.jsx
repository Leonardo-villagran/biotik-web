import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutBiotik from './views/AboutBiotick';
import HowItWorks from './views/HowItWorks';
import Advantages from './views/Advantages';
import DataSecurity from './views/DataSecurity';
import DataProcessing from './views/DataProcessing';
import WhyChooseBiotik from './views/WhyChooseBiotik';
import Header from './views/Header';
import Menu from './views/Menu';

function App() {

  const b1 = './images/1.png';
  const b2 = './images/2.png';
  const b3 = './images/3.png';
  const b4 = './images/4.png';
  const b5 = './images/5.png';
  const b6 = './images/6.png';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <Header />
      <Menu />
      
      <div className="row">
        <div className="col-md-8 d-flex ">
          <div className="card mb-4 flex-fill p-5">
            <AboutBiotik />
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card mb-4 flex-fill">
            <img src={b1} className="card-img-top" alt="Imagen de BiotiK" />
          </div>
        </div>
        <div className="col-md-8 d-flex">
          <div className="card mb-4 flex-fill p-5">
            <HowItWorks />
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card mb-4 flex-fill">
            <img src={b2} className="card-img-top" alt="Imagen de BiotiK" />
          </div>
        </div>
        <div className="col-md-8 d-flex">
          <div className="card mb-4 flex-fill p-5">
            <Advantages />
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card mb-4 flex-fill">
            <img src={b3} className="card-img-top" alt="Imagen de BiotiK" />
          </div>
        </div>
        <div className="col-md-8 d-flex">
          <div className="card mb-4 flex-fill p-5">
            <DataSecurity />
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card mb-4 flex-fill">
            <img src={b4} className="card-img-top" alt="Imagen de BiotiK" />
          </div>
        </div>
        <div className="col-md-8 d-flex">
          <div className="card mb-4 flex-fill p-5">
            <DataProcessing />
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card mb-4 flex-fill">
            <img src={b5} className="card-img-top" alt="Imagen de BiotiK" />
          </div>
        </div>
        <div className="col-md-8 d-flex">
          <div className="card mb-4 flex-fill p-5">
            <WhyChooseBiotik />
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card mb-4 flex-fill">
            <img src={b6} className="card-img-top" alt="Imagen de BiotiK" />
          </div>
        </div>

      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        Volver al menú
      </button>    
      </div>
  );
}

export default App;