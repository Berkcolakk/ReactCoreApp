import Navbar from './Layouts/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Layouts/NotFound';
import CompanyList from './components/CompanyList';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
      </div>
      <Routes>
      <Route exact path="/" />
      <Route exact path='CompanyList' element={<CompanyList/>} />
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
