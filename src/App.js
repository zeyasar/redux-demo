import logo from './logo.svg';
import './App.css'
// import store from './app/store'
// import { ordered } from './features/cake/cakeSlice';
import { fetchUser } from './features/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  
  // store.dispatch(ordered())
  // store.dispatch(fetchUser())
  // console.log(store.getState());
  // console.log(store.dispatch(fetchUser()));
  const user = useSelector(state=>state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])
  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
