import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PDAssessment from './components/PDAssessment';
import DebugScreen from './components/screens/DebugScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PDAssessment />} />
        <Route path="/debug" element={<DebugScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
