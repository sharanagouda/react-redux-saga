import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import { getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const renderList=(user, i)=>(
    <div className='rowC'>
      <div>
           <h4 key={i}>{user.name}</h4>
      </div>
      <div>
           <h4 key={i}>{user.email}</h4>
      </div>
    </div>
  );

  return (
    <div className="App">
      <h1>React Redux Saga boilerplate with API call example</h1>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) =>renderList(user, i))}
    </div>
  );
}

export default App;
