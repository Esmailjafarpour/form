import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';

//npm install react-router-dom@5.2.0
//import {Route , Switch , Redirect} from 'react-router-dom';

// npm install react-router-dom@6
import {Route , Routes , Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* // react-router-dom@5.2.0 */}
      {/* <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Redirect from='/' to='/signup'/>
      </Switch> */}

      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<Navigate to="/signup"/>} />
      </Routes>


    </div>
  );
}

export default App;
