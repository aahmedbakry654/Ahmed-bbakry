// src/App.jsx
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div id="root">
      <div className="container">
        <div className="main-content">
          <Hero />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;