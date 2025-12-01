import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TokuAssessment from './components/TokuAssessment';
import DebugScreen from './components/screens/DebugScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TokuAssessment />} />
        <Route path="/debug" element={<DebugScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
