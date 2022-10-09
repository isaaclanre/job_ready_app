import React, { useState } from "react";
import "./Loginform.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



const LoginForm = () => {


    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
const [value , setValue] = useState({
    email: "",
    password: ""
})
const navigate = useNavigate();
const {email, password} = value
const handleChange =name => (event) => {
    setValue({...value, [name]: event.target.value})
}

const handleSubmit = async (event) => {
    try{
        event.preventDefault();
        const fetchData = await axios({
            method: 'post',
            url: 'http://localhost:4194/users/login',
            data: {
                email: email,
                password: password
            }
        })
        const response = await fetchData
        setValue({
            ...value,
            email: "",
            password: ""
        })
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("id",response.data.User.id)
        toast.success(response.data.message)
        console.log(response.data);
        const id = (response.data.User.id);

        navigate(`/admin/${id}`)
}catch(error){
    toast.error(error.response.data.message)
}
}
    return (
        <div className="background">

        <div className="cover">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email"
            value={email}
            onChange={handleChange("email")}
            />
            <input type="password" placeholder="Password" 
            value={password}
            onChange={handleChange('password')}
            />

            <div className="login-btn" onClick={handleSubmit}>Login</div>

            {/* <p className="text">Or login using</p> */}

            </form>
            <div>
                {/* <h3>Login Failed</h3>
                <p>Email or password incorrect</p> */}
            </div>
        </div>
        </div>
 
    )
}

export default LoginForm