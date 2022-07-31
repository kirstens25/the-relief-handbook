import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Login from './pages/login'
import Register from './pages/register'
import ClassInfo from './pages/class-info'
import StudentInfo from './pages/student-info'
import DailyInfo from './pages/daily-info'



function App() {
  return (
    <>
    <Router>
   <div class="bg-red-500">
<Routes>   
  <Route path='/' element={<Dashboard />} />
  <Route path='/' element={<Login />} />
  <Route path='/' element={<Register />} />
  <Route path='/' element={<classInfo />} />
  <Route path='/' element={<studentInfo />} />
  <Route path='/' element={<dailyInfo />} />


  </Routes>
  
  </div>
    </Router>
    </>
  );
}

export default App;
