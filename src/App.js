import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About';

function App() {
  const [them, setThem] = useState('light');

  const toggleThem = () => {
    if (them === 'light') {
      setThem('dark');
    } else {
      setThem('light')
    }
  }

  return (
    <div data-theme={them}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
            <button onClick={toggleThem}>Toggle dark mode</button>
          </div>
        </div>
      </div>
      <About></About>
    </div>
  );
}

export default App;
