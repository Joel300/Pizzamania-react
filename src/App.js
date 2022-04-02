import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Slider from './Slider.js';
import About from './About.js';
import Pizzatype from './Pizzatype.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      <Header />
      <Slider />  
      <About />
      <Pizzatype />
      <Footer />
    </div>
  );
}

export default App;
