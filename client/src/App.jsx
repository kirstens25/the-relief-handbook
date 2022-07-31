import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/header'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'
import ClassInfo from './pages/class-info'
import StudentInfo from './pages/student-info'
import DailyInfo from './pages/daily-info'

export default function App() {
  return (
<>
<Router>
  <div className='container'>
    <Header />
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

   <Route path='/class-info' element={<ClassInfo />} />
   <Route path='/student-info' element={<StudentInfo />} />
   <Route path='/daily-info' element={<DailyInfo />} />
    </Routes>
  </div>
</Router>
<ToastContainer />

</>
  );
}
