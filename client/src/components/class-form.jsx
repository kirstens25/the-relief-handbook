import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createClass } from '../features/classes/classSlice'
import { useNavigate } from 'react-router-dom'


export default function ClassForm() {
  const [formData, setFormData] = useState({
    extraCurricActivities: '',
    events: '',
    morningRoutines: '',
    afternoonRoutines: '',
    rewardsSystem: '',
    behaviourStrategies: '',
  })

 const { extraCurricActivities, events, morningRoutines, afternoonRoutines, rewardsSystem, behaviourStrategies } = formData


  const dispatch = useDispatch()
  const navigate = useNavigate()


  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createClass({ extraCurricActivities, events, morningRoutines, afternoonRoutines, rewardsSystem, behaviourStrategies }))
    setFormData('')
    navigate('/share-relief')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>

        <p className="section-header2">Weekly Routines</p>
        <div className='form-group'>
          <label htmlFor='text'>Extra Curricular Activities</label>
          <input
            type='text'
            name='extra curric activities'
            placeholder='i.e. Monday - French @ 10am and Tuesday - Sport 1:30pm' 
            id='extraCurricActivities'
            value={extraCurricActivities}
            onChange={(e) => setFormData(e.target.value)}
          />
        </div>
        <div className='form-group'>
        <label htmlFor='text'>Events</label>
          <input
            type='text'
            name='events'
            placeholder='i.e. Assembly at 8:30am every 3rd Friday' 
            id='events'
            value={events}
            onChange={(e) => setFormData(e.target.value)}
          />
        </div>
        

        <p className="section-header3">Daily Routines</p>
        <div className='form-group'>
          <label htmlFor='text'>Morning Routines</label>
          <input
            type='text'
            name='text'
            id='morningRoutines'
            value={morningRoutines}
            onChange={(e) => setFormData(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Afternoon Routines</label>
          <input
            type='text'
            name='text'
            id='afternoonRoutines'
            value={afternoonRoutines}
            onChange={(e) => setFormData(e.target.value)}
          />
        </div>

        <p className="section-header1">Classroom Systems</p>
        <div className='form-group'>
          <label htmlFor='text'>Rewards System</label>
          <input
            type='text'
            name='text'
            id='rewardsSystem'
            value={rewardsSystem}
            onChange={(e) => setFormData(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Behaviour Management Strategies</label>
          <input
            type='text'
            name='text'
            id='behaviourStrategies'
            value={behaviourStrategies}
            onChange={(e) => setFormData(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Save information
          </button>
        </div>
      </form>
    </section>
  )
}
