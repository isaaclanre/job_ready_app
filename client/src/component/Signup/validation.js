const validation = (values) => {
    let errors = {};
  
    if (!values.firstName) {
      errors.firstName = "Firstname is required";
    }
  
    if (!values.lastName) {
      errors.lastName = "Lastname is required";
    }
  
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
  
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (values.phoneNumber.length !== 11) {
      errors.phoneNumber = "Phone number must be 11 character long";
    }

    if (!values.address) {
        errors.address = "Address is required";
    }
    
    if (!values.country){
        errors.country = 'country is required'
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more then 5 characters.";
    }
  
    // if (!values.confirmPassword !== values.password) {
    //   errors.confirmPassword = "Password must be the same";
    // }
    // // else if (values.confirmPassword === values.password) {
    // //   errors.confirmPassword = "success";
    // // }
  
    return errors;
  };
  
  export default validation;