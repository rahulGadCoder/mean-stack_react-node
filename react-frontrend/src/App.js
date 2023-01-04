import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './components/HeaderBar';
import SideNav from './components/SideNav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div classNameName="App">
        <HeaderBar />
        <br />
        <SideNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
