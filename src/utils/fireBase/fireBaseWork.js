// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";


// export const loginHandle=(email,password)=>{

//     const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     localStorage.setItem("user",user.accessToken);
//     // ...
//     alert("Signed In Succesfully")
//     //navigate("/");
//     return true;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     //const errorMessage = error.message;
//     alert(errorCode);
//     return false;
//   });
// }