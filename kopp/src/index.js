import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gateway from './pages/Gateway';
import ND from './pages/ND';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/input" element={<Gateway />}/>
      <Route path="/nd" element={<ND/>} />
    </Routes>
  </BrowserRouter>
);


