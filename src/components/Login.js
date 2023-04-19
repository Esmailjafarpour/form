import React, {useState,useEffect} from 'react';
import {validate} from '../components/validate';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './toast';
import styled from './signUp.module.css';
import {Link} from 'react-router-dom';

const Login = () => {

     const [data , setData] = useState({
          email : "",
          password : "",
     })

     const [errors , setErrors] = useState({});
     const [touched , setTouched] = useState({});

     useEffect(() => {
         setErrors(validate(data ,"login"))
     }, [data , touched]);

     const changeHandler = (event) => {
          setData({...data,[event.target.name] : event.target.value})
     }

     const focusHandler = (event) => {
          setTouched({...touched,[event.target.name] : true})
          
     }

     const submitHandler = (event) => {
          event.preventDefault();
          if (!Object.keys(errors).length) {
               notify("success","you signed up successfully")
          } else {
               notify("error","invalid data")
               setTouched({
                    email : true,
                    password : true,
               })
          }
     }

     return (
          <div className={styled.container}>
               <form className={styled.formContainer} onSubmit={submitHandler}>
                    <h1 className={styled.header}>Login</h1>
                    <div className={styled.formField}>
                         <label>Email</label>
                         <input 
                              className={(errors.email && touched.email) ? styled.uncompleted : styled.formInput} 
                              type ="text" 
                              name ="email" 
                              value={data.email} 
                              onChange={changeHandler} 
                              onFocus={focusHandler}
                         />
                         {errors.email && touched.email && <span>{errors.email}</span>}
                    </div>
                    <div className={styled.formField}>
                         <label>Password</label>
                         <input 
                              className={(errors.password && touched.password) ? styled.uncompleted : styled.formInput} 
                              type ="password" 
                              name ="password" 
                              value={data.password} 
                              onChange={changeHandler} 
                              onFocus={focusHandler}
                         />
                         {errors.password && touched.password && <span>{errors.password}</span>}
                    </div>
          
                    <div className={styled.formButtons}>
                         <Link to='/signup'>sign Up</Link>
                         <button type="submit">Login</button>
                    </div>
               </form>

               <ToastContainer />
               
          </div>
     );
}

export default Login;
