import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import './SignUp.css';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Format").required("Required"),
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid Phone Number")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password Should be atleat 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const initialValues = {
  email: "",
  fname: "",
  lname: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const OnSubmit = (values) => {

  console.log(values);


console.log("Email"+values.email);

  const auth = getAuth(app);

   
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert("Logged in successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
};

function SignUp() {

//    const [email, setEmail] = useState("");
//    const [password, setPassword] = useState("");
// const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
  

  return (
    <div id="theRegPage">
      <h1>Sign Up Page</h1>


      <div>

      <Formik
        initialValues={initialValues}
        onSubmit={OnSubmit}
        validationSchema={validationSchema}
      >
        <Form id="RegCard">
        <label htmlFor="">Email:</label>
          <div className="inputFieldRoom">
          
          <Field className="RegInput" type="email" name="email" id="" placeholder="Enter Email"/><br />
          <ErrorMessage className="error" component="div" name="email"  />
          </div>
          <label htmlFor="">First Name:</label>
          <div className="inputFieldRoom">
          
          <Field  className="RegInput" type="text" name="fname" id="" placeholder="First Name" /><br />
          <ErrorMessage className="error" component="div" name="fname" />
          </div>
          <label htmlFor="">Last Name:</label>
          <div className="inputFieldRoom">
         
          <Field  className="RegInput" type="text" name="lname" id="" placeholder="Last Name" /><br />
          <ErrorMessage className="error" component="div"  name="lname" />
          </div>
          <label htmlFor="">Phone Number:</label>
          <div className="inputFieldRoom">
        
          <Field  className="RegInput" type="number" name="phone" id="" placeholder="XXXX-XXXXXXX" /><br />
          <ErrorMessage className="error" component="div"  name="phone" />
          </div>
          <label htmlFor="">Password:</label>
          <div className="inputFieldRoom">
          
          <Field  className="RegInput" type="password" name="password" id="" /><br />
          <ErrorMessage className="error" component="div"  name="password" />
          </div>
          <label htmlFor="">Confirm Password:</label>
          <div className="inputFieldRoom">
         
          <Field  className="RegInput" type="password" name="confirmPassword" id="" /><br />
          <ErrorMessage className="error" component="div"  name="confirmPassword" />
          </div>
          <input className="InputBtnReg" type="submit" value="Register" />
        </Form>
      </Formik>

      <Link to="/login">Have Account? Sign In?</Link>
      </div>
    </div>
  );
}

export default SignUp;
