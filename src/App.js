import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux"; 
import './App.css';
import { selectuser } from './features/userSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { auth } from './firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { logout, login } from './features/userSlice';
import Widgets from './Widgets';

function App() {
const user = useSelector(selectuser);
const dispatch = useDispatch();

useEffect(() => {
   auth.onAuthStateChanged(userAuth => {
    if(userAuth){
      //user is logged in
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL,
      }))
    }else {
      //user is logged out
      dispatch(logout());
    }
   });
}, [dispatch]);

  return (
    <div className="app">
 
     {/*Header*/}
     <Header />

     {!user ? (
      <Login />
     ) : (
        <div className="app__body">
       <Sidebar />
       <Feed />
       <Widgets />
     </div>
     )}
    
    </div>
  );
}

export default App;
