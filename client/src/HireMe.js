import React, { useState, useEffect } from "react";
// import { useState } from "react";
import "./HireMe.css";
import axios from 'axios'

const HireMe = () => {
  const [user, setUser] = useState([]);

  const baseURL = 'http://localhost:4194/hire/getEmployeesToHire'

  const fetchData = async() => {
    const response = await axios.get(baseURL)
    // const data = response.data
    console.log("Response",response['data']['record'])
    let result = response['data']['record'];
    setUser(result)
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(user)

  return (
        <div className="main-container">
            <div className="heading">
              <h1 className="heading__title">HIRE ME</h1>
              <p className="heading__credits"><a className="heading__link" target="_parent" href="https://dribbble.com/sl">Here Is A List Of Our Engineers You Can Hire</a></p>
            </div>

            {
              user.map((candidate) => {
                if(candidate.reactScore > 79) {
                  return(
                    <div className="card card-1">
                      <div className="card__icon"><i className="fas fa-bolt"></i></div>
                      <p className="card__exit"><i className="fas fa-times"></i></p>
                      <h2 className="card__title"> 
                      <p>FirstName: {candidate.user.firstName}</p>
                      <p>LastName: {candidate.user.lastName}</p>
                      <p>Email: {candidate.user.email}</p>
                      <p>Stack: React</p>
                      <p>PhoneNumber: {candidate.user.phone}</p>
                      <p>Location: {candidate.user.address}</p>
                      <p>Country: {candidate.user.country}</p>
                      </h2>
                      <p className="card__apply">
                        <a className="card__link" href="google.com">Hire Now <i className="fas fa-arrow-right"></i></a>
                      </p>
                    </div>
                  )
                }else if(candidate.javaScore > 79){
                  return(
                    <div className="card card-1">
                      <div className="card__icon"><i className="fas fa-bolt"></i></div>
                      <p className="card__exit"><i className="fas fa-times"></i></p>
                      <h2 className="card__title"> 
                      <p>FirstName: {candidate.user.firstName}</p>
                      <p>LastName: {candidate.user.lastName}</p>
                      <p>Email: {candidate.user.email}</p>
                      <p>Stack: Java</p>
                      <p>PhoneNumber: {candidate.user.phone}</p>
                      <p>Location: {candidate.user.address}</p>
                      <p>Country: {candidate.user.country}</p>
                      </h2>
                      <p className="card__apply">
                        <a className="card__link" href="google.com">Hire Now <i className="fas fa-arrow-right"></i></a>
                      </p>
                    </div>
                  )
                }else if(candidate.nodeScore > 79){
                  return(
                    <div className="card card-1">
                      <div className="card__icon"><i className="fas fa-bolt"></i></div>
                      <p className="card__exit"><i className="fas fa-times"></i></p>
                      <h2 className="card__title"> 
                      <p>FirstName: {candidate.user.firstName}</p>
                      <p>LastName: {candidate.user.lastName}</p>
                      <p>Email: {candidate.user.email}</p>
                      <p>Stack: Node.js</p>
                      <p>PhoneNumber: {candidate.user.phone}</p>
                      <p>Location: {candidate.user.address}</p>
                      <p>Country: {candidate.user.country}</p>
                      </h2>
                      <p className="card__apply">
                        <a className="card__link" href="google.com">Hire Now <i className="fas fa-arrow-right"></i></a>
                      </p>
                    </div>
                  )
                }else if(candidate.csharpScore > 79){
                  return(
                    <div className="card card-1">
                      <div className="card__icon"><i className="fas fa-bolt"></i></div>
                      <p className="card__exit"><i className="fas fa-times"></i></p>
                      <h2 className="card__title"> 
                      <p>FirstName: {candidate.user.firstName}</p>
                      <p>LastName: {candidate.user.lastName}</p>
                      <p>Email: {candidate.user.email}</p>
                      <p>Stack: .Net</p>
                      <p>PhoneNumber: {candidate.user.phone}</p>
                      <p>Location: {candidate.user.address}</p>
                      <p>Country: {candidate.user.country}</p>
                      </h2>
                      <p className="card__apply">
                        <a className="card__link" href="google.com">Hire Now <i className="fas fa-arrow-right"></i></a>
                      </p>
                    </div>
                  )
                }
              })
            }
          
        </div>
  );
};

export default HireMe;

