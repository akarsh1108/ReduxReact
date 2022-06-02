import './App.css';
import Navbar from './Navbar';
import Shop from './shop';

function App() {
  return (
   <>
      <Navbar/>
      <div className="container my-3">
      <Shop/>
    </div>
    </>
  );
}

export default App;
