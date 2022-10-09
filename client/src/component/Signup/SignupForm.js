import React,{useState} from "react";
import useForm from "./useForm";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './signUp.css'



const SignupForm = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
     email: "",
     phone: "",
     address: "",
     country: "",
     password: "",
     confirm_password: ""
  })

  const {
    firstName,
    lastName,
     email,
     phone,
     address,
     country,
     password,
     confirm_password,
  } = values

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const handleSubmit = async(event) => {
    try {
      event.preventDefault();

   const fetchData = axios({
      method: 'post',
      url: 'http://localhost:4194/users/reg',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        country: country,
        password: password,
        confirm_password: confirm_password
      }
   })
    const response = await fetchData

    setValues({
      ...values,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      password: "",
      confirm_password: ""
    })
    toast.success(response.data.message)
    navigate('/login')
    } catch (err){
      toast.error(err.response.data.Error)
    }
  }

  return (
    <div className="container">
    
      <div className="app-wrapper">
        <div>
        <ToastContainer/>
          <h2 className="title">Create Account</h2>
        </div>
        <form onSubmit={handleSubmit} className="form-wrapper">
          <div className="name">
            <label className="label">First Name</label><br/>
            <input
              type="text"
              className="input"
              name="firstName"
              value={firstName}
              onChange={handleChange('firstName') }
            />
          </div>

          <div className="name">
            <label className="label">Last Name</label><br/>
            <input
              type="text"
              className="input"
              name="lastName"
              value={lastName}
              onChange={ handleChange('lastName') }
            />
          </div>

          <div className="name">
            <label className="label">Email</label><br/>
            <input
              type="email"
              className="input"
              name="email"
              value={email}
              onChange={ handleChange('email') }
            />
          </div>


          <div className="name">
            <label className="label">Phone Number</label><br/>
            <input
              type="text"
              className="input"
              name="phone"
              value={phone}
              onChange={ handleChange('phone') }
            />
          </div>

          <div className="name">
            <label className="label">Address</label><br/>
            <input
              type="text"
              className="input"
              name="address"
              value={address}
              onChange={ handleChange('address') }
            />
          </div>

          <div className="name">
            <label className="label">Country</label><br/>
            <input
              type="text"
              className="input"
              name="country"
              value={country}
              onChange={handleChange('country') }
            />
          </div>

          <div className="name">
            <label className="label">Password</label><br/>
            <input
              type="password"
              className="input"
              name="password"
              value={password}
              onChange={ handleChange('password') }
            />
          </div>

          <div className="name">
            <label className="label">Confirm Password</label><br/>
            <input
              type="password"
              className="input"
              name="confirm_password"
              value={confirm_password}
              onChange={handleChange('confirm_password')}
            />
          </div>

          <div>
            <button className="submit" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;