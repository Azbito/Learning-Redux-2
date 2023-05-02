import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counter'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

function App() {
  const dispatch = useDispatch()
  const { count } = useSelector(state => state.counter)

  return (
    <div className="App">
      <img src="images/redux.png" alt="Redux" />
      <p>Toolkit</p>
      <div className="container">
        <h1>The count is: {count}</h1>
        <div className="buttons">
          <button
            className="btn-increase"
            onClick={() => dispatch(increment())}
          >
            <AddIcon />
          </button>
          <button
            className="btn-decrease"
            onClick={() => dispatch(decrement())}
          >
            <RemoveIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
