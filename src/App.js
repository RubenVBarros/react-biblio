import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Library from './Pages/Library';
import Addbook from './Pages/Addbook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
        <Route path='/library' element={<Library></Library>}/>
        <Route path='/add' element={<Addbook></Addbook>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
