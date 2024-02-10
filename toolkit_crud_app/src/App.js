import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CreateForm from './components/CreateForm';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<CreateForm/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
