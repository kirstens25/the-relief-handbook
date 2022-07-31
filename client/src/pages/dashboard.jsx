import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ClassForm from '../components/class-form'
import ClassItem from '../components/class-item'
import Spinner from '../components/spinner'
import { getClass, reset } from '../features/classes/classSlice'

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
        <h1>Welcome {user && user.name}</h1>
        <p>Relief Dashboard</p>
      </section>

      <ClassForm />

      <section className='content'>
        {classes.length > 0 ? (
          <div className='classroom'>
            {classes.map((classroom) => (
              <ClassItem key={classroom._id} classsroom={classroom} />
            ))}
          </div>
        ) : (
          <h3>You have not set any classes</h3>
        )}
      </section>
    </>
  )
}