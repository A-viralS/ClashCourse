import logo from './logo.svg';
import './App.css';
import CardsFormat from '../src/CardsFormat'
import Spline from '@splinetool/react-spline';
function App() {
  return (
    <div className="App">
      <Spline scene="https://prod.spline.design/CyT6S8XXMhJpOhur/scene.splinecode" />
      <CardsFormat />
    </div>
  );
}

export default App;
