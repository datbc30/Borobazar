import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Slider from './component/Slider/Slider';

function App() {
  return (
    <div className="">
      <Header />
      <div className='grid-container'>
        <Slider />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
