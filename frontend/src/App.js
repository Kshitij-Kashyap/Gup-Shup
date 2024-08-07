import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./Components/Auth/Login";
import Register from './Components/Auth/Register';
import Chat from './Components/Page/Chat';
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/authContext';


function App() {
  const {authUser} = useAuthContext();
  return (
    <div>
      <div className="App">
        <Routes>
          <Route path='/login' element={
            authUser ? <Navigate to={'/'}/> : <Login/>
          }/>
          <Route path='/register' element={
            authUser ? <Navigate to={'/'}/> : <Register/>
          }/>
          <Route path='/' element={
            authUser ?  <Chat/> : <Navigate to={'/login'}/>
          }/>
        </Routes>
      </div>
    <Toaster/>
    </div>
  );
}

export default App;
