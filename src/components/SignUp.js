import React, {useState,useEffect} from 'react';
import {validate} from '../components/validate';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './toast';
import styled from './signUp.module.css';
import {Link} from 'react-router-dom';

const SignUp = () => {

     const [data , setData] = useState({
          name : "",
          email : "",
          password : "",
          confirmPassword : "",
          isAccepted : false,
     })

     const [errors , setErrors] = useState({});
     const [touched , setTouched] = useState({});

     useEffect(() => {
         setErrors(validate(data ,"signUp"))
     }, [data , touched]);

     const changeHandler = (event) => {
          if(event.target.name === "isAccepted"){
               setData({...data,[event.target.name] : event.target.checked})
          }else{
             setData({...data,[event.target.name] : event.target.value})
          }
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
                    name : true,
                    email : true,
                    password : true,
                    confirmPassword : true,
                    isAccepted : true,
               })
          }
     }

     return (
          <div className={styled.container}>
               <form className={styled.formContainer} onSubmit={submitHandler}>
                    <h1 className={styled.header}>Sign Up</h1>
                    <div className={styled.formField}>
                         <label>name</label>
                         <input 
                              className={(errors.name && touched.name) ? styled.uncompleted : styled.formInput} 
                              type ="text" 
                              name ="name" 
                              value={data.name} 
                              onChange={changeHandler} 
                              onFocus={focusHandler}
                         />
                         {errors.name && touched.name && <span>{errors.name}</span>}
                    </div>
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
                    <div className={styled.formField}>
                         <label>Confirm Password</label>
                         <input 
                              className={(errors.confirmPassword && touched.confirmPassword) ? styled.uncompleted : styled.formInput} 
                              type ="password" 
                              name ="confirmPassword" 
                              value={data.confirmPassword} 
                              onChange={changeHandler} 
                              onFocus={focusHandler}
                         />
                         {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                    </div>
                    <div className={styled.formField}>
                         <div className={styled.checkBoxContainer}>
                              <label>I Accept terms of privacy policy</label>
                              <input 
                                   className={styled.formInput} 
                                   type ="checkBox" 
                                   name ="isAccepted" 
                                   value={data.isAccepted} 
                                   onChange={changeHandler} 
                                   onFocus={focusHandler}
                              />
                         </div>
                         {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                    </div>
                    <div className={styled.formButtons}>
                         <Link to='/login'>Login</Link>
                         <button type="submit">sign Up</button>
                    </div>
               </form>

               <ToastContainer />
               
          </div>
     );
}

export default SignUp;
