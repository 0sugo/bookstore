import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cartegories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Categories" element={<Cartegories />} />
      </Routes>
    </div>
  );
}

export default App;
