import { useState, useEffect } from "react";
import validation from "./validation";

const useForm = (submitForm) => {
  const [values, setValues] = useState({
    firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        country: "",
        password: "",
        confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false); // initial value is set to false

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values)); // shows the errors if some field are not filled
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }); // [errors]

  return { handleChange, handleFormSubmit, values, errors };
};

export default useForm;