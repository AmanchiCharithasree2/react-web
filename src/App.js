
import './App.css';
import Home from './components/Home/Home';
import NewsComponent from './components/news/NewsComponent';
import Video from './components/video/Video';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello friends!!</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video' element={<Video/>}/>
        <Route path='/news' element={<NewsComponent/>}>
        <Route/>
        <Route/>
      </Routes>
      </BrowserRouter>
      
      <Home/>
    </div>
  );
}

export default App;
