import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import AboutIcon from './components/AboutIcon';
import {FeedbackProvider} from './context/FeedbackContext';
import FeedbackStats from  './components/FeedbackStats'
import Card from './components/shared/Card';
import Post from './components/Post';

function App() {


  return(
    <FeedbackProvider>
    <Router>
      <Header/>
    <div className='container'>
      <Routes>
      <Route exact path='/' element={
        <>
          <FeedbackForm />
          <FeedbackStats/>
          <FeedbackList/>
        </>
      }>
      </Route>
      <Route path='/about' element={<AboutPage/>}/>
        <Route path='/post/*' element={<Post/>}/>
      </Routes>

        <AboutIcon/>
    </div>
    </Router>
    </FeedbackProvider>
  )

}

export default App;
