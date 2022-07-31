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
  <div className='container'>
    {/* <Header /> */}
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

   <Route path='/class-info' element={<classInfo />} />
   <Route path='/student-info' element={<studentInfo />} />
   <Route path='/daily-info' element={<dailyInfo />} />
    </Routes>
  </div>
</Router>

</>
  );
}

export default App;
