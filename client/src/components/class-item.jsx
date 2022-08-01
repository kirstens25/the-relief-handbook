import { useDispatch } from 'react-redux'
import { deleteClass } from '../features/classes/classSlice'

export default function ClassItem ({ classroom }) {
  const dispatch = useDispatch()

  // come back to here
  return (
    <div className='classroom'>
      <div>{new Date(classroom.createdAt).toLocaleString('en-US')}</div>
      <h2>{classroom.text}</h2>
      <button onClick={() => dispatch(deleteClass(classroom._id))} className='close'>
        X
      </button>
    </div>
  )}