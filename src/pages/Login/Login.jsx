import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email Format").required("Required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const [user, setUser] = useState({});

  function handleCallBackResponse(response) {
    console.log("Inside callback: " + response.credential);
    var userObject = jwtDecode(response.credential);
    localStorage.setItem("user", JSON.stringify(response.credential));
    console.log(userObject);
    setUser(userObject);
    navigate("/home");
    //document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /* global google */
    // document.getElementById("loggedIn").hidden = true;
    google.accounts.id.initialize({
      client_id:
        "784024240177-tov8pjvhb3a1s0hj6v1r75hs1sopjn97.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    const cred = JSON.parse(localStorage.getItem("user"));
    if (cred) {
      let userObj = jwtDecode(cred);
      console.log("User Data: " + userObj);
      setUser(userObj);
    }

    //google.accounts.id.prompt();
  }, []);
 const location=useLocation();
 const redirectedFrom=location.state?.location.pathname;
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log(values);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", user.accessToken);
        alert("Signed In Succesfully");
        alert(redirectedFrom);
        redirectedFrom ? navigate(redirectedFrom) :  navigate("/");
        // ...
      
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        alert(errorCode);
      });
  };

  return (
    <div id="theLginPage">
      <h1>Login Page</h1>
      <div id="lginPageCard">
        
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="loginPage">
              <div id="InputFieldDiv">
                <Field
                  className="InputField"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Email"
                />
                <ErrorMessage className="eMsg" component="div" name="email" />
              </div>
              <div id="InputFieldDiv">
                <Field
                  className="InputField"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Password"
                />
                <ErrorMessage className="eMsg" component="div" name="password" />
              </div>
              <input className="InputFieldBtn" type="submit" value="Login" />
            </Form>
          </Formik>

          <Link className="soup" to="/signup">
            Create Account
          </Link>
        
      </div>

      <div id="signInDiv"></div>
    </div>
  );
}

export default Login;
