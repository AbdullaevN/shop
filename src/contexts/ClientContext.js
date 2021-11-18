// import React, { createContext, useContext, useEffect, useReducer } from "react";
// import { auth } from "../FireBase";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";

// export const clientContext = createContext();
// const INIT_STATE = {
//   user: null,
//   email: null,
// };

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case "LOGIN_USER":
//       return { ...state, user: action.payload };
//     case "LOGOUT_USER":
//       return { ...state, user: action.payload };
//     case "EMAIL":
//       return { ...state, email: action.payload };
//     default:
//       return state;
//   }
// };

// const ClientContextProvider = (props) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   console.log(props);
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         dispatch({
//           type: "LOGIN_USER",
//           payload: user,
//         });
//       } else {
//         dispatch({
//           type: "LOGOUT_USER",
//           payload: null,
//         });
//       }
//     });
//   }, []);

//   const createUserWithEmailAndPasswordHandler = async (email, password) => {
//     try {
//       const { user } = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const logOut = async () => {
//     signOut(auth)
//       .then(() => {
//         dispatch({
//           type: "LOGOUT_USER",
//           payload: null,
//         });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };
//   let adminEmail = "kubaismailov02@gmail.com";

//   const loginUserWithEmail = async (email, password) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       if (email === adminEmail) {
//         dispatch({
//           type: "EMAIL",
//           payload: email,
//         });
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <clientContext.Provider
//       value={{
//         createUserWithEmailAndPasswordHandler,
//         loginUserWithEmail,
//         logOut,
//         user: state.user,
//         email: state.email,
//         adminEmail,
//       }}
//     >
//       {props.children}
//     </clientContext.Provider>
//   );
// };

// export default ClientContextProvider;
