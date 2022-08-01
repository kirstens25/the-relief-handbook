import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ClassForm from '../components/class-form'
import Spinner from '../components/spinner'
import { getClass, reset } from '../features/classes/classSlice'
import logo from '../assets/logo.png'

export default function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { classes, isLoading, isError, message } = useSelector(
    (state) => state.classes
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getClass())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <img src={logo} width="75%"></img>
        <h1>Welcome {user && user.name}</h1>
        <p>Add Classroom Information</p>
      </section>

      <ClassForm />
    </>
  )
}