import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PDAssessment from './components/PDAssessment';
import DebugScreen from './components/screens/DebugScreen';
import DebugIndexScreen from './components/screens/DebugIndexScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PDAssessment />} />
        <Route path="/debug" element={<DebugScreen />} />
        <Route path="/debug/screens" element={<DebugIndexScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
