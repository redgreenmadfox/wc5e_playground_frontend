import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Users from './pages/Users';
import NoMatchPage from './pages/NoMatchPage';
import Classes from './pages/Classes';
import Spells from './pages/Spells';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path='posts' element={<Posts/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='classes' element={<Classes/>}/>
          <Route path='spells' element={<Spells/>}/>

          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
