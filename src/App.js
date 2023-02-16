import{
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Comments from "./components/comments/Comments";
import Home from './components/Home';
import Upload from './components/upload/Upload';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/comments' element={<Comments currentUserId='1'/>}/>
        <Route path='/upload' element={<Upload/>}/>
        {/* <Navbar/>
        <Comments currentUserId="1"/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;