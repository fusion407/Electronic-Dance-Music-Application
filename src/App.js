import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <NavBar />
      </div>
      <Home />
    </div>
  );
}

export default App;
