import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Topics from './Topics';
import Settings from './Settings';
const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/topics' element={<Topics/>} />
    <Route path='/settings' element={<Settings/>} />
  </Routes>
);
}
export default Main;