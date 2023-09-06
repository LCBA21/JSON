import { useState } from 'react';
import { BrowserRouter as Router,Route,Routes, Link } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import UserList from './components/UserList';

function App() {
  // const [fullname,setFullName]=useState();
  // const [email,setEmail]=useState();
  // const [password,setPassword]=useState();
  // const [gender,setGender]=useState();

  return (
    <div className="App">
     
     <Router>
      <Routes>
        <Route
          path='/'
          element={<Register 
            
            />
          }
        />
        <Route
        path='/users'
        element={    <UserList/>}
        
        />
       
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
