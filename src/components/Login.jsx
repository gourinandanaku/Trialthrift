// import { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper
// } from "@mui/material";
// import axios from "axios";
// function Login({ setUserRole }) {
//  var [d,setD]=useState({email:'',password:''})

// const inputHandler=async (e)=>{
// //  console.log(e);
 
//   setD({...d,[e.target.name]:e.target.value})
// console.log(d);
//  }

// const handleLogin = async () => {
//   try {
//     const res = await axios.post("http://localhost:5000/api/users/login", {
//     email: d.email, password: d.password 
//     });

//     if (res.data.token) {
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);
//       setUserRole(res.data.role);
//     } else {
//       alert("Login failed. Please check your credentials.");
//     }
//   } catch (error) {
//     alert(error.response?.data?.error || "Something went wrong");
//   }
// };



//   return (
//     <Box
//       maxWidth={400}
//       mx="auto"
//       mt={10}
//       component={Paper}
//       elevation={4}
//       p={4}
//       borderRadius={3}
//     >
//       <Typography variant="h5" align="center" gutterBottom>
//         Login
//       </Typography>
//       <TextField
//         label="Email"
//         type="email"
//         name="email"
//         value={d.email}
//         onChange={inputHandler}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Password"
//         type="password"
//         name="password"
//         value={d.password}
//         onChange={inputHandler}
//         fullWidth
//         margin="normal"
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         sx={{ mt: 2, fontWeight: 600 }}
//         onClick={handleLogin}
//       >
//         Login
//       </Button>
//     </Box>
//   );
// }
// export default Login;
      