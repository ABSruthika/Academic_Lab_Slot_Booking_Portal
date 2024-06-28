//App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import StudentDashboard from './pages/StudentDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />        
        <Route path="/student-dashboard" element={<StudentDashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
