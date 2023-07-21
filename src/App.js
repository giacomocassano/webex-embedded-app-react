import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import InitiatorPage from './pages/InitiatorPage';
import SharedPage from './pages/SharedPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {WebexProvider} from './store/WebexContext';

function App() {
  return (
    <WebexProvider>
      <Router>
        <Routes>
          <Route path='shared' element={<SharedPage />} />
          <Route path='' element={<InitiatorPage />} />
        </Routes>
      </Router>
    </WebexProvider>
  );
}

export default App;
