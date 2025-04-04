import { toast } from "react-toastify";
import { setLoading,setSignupData  } from "../../slices/auth";
import { apiConnector } from "../connector";
import { setToken , setUser } from "../../slices/profile";


export function sendOtp(email, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", 'http://localhost:4000/api/v1/auth/sendotp', {email, checkUserPresent: true,})
        if(!response.data.success) {
            throw new Error(response.data.message)
          }
          toast.success("OTP Sent Successfully")
          navigate("/verify")
      }
       catch (error) {
        console.log("SENDOTP API ERROR............", error)
        toast.error("Could Not Send OTP")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
}

export function signUp(accountType,  firstName, lastName, email, password, confirmPassword , otp, navigate){
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
        otp = otp.join('');
       const response = await apiConnector("POST", 'http://localhost:4000/api/v1/auth/signup', {accountType,  firstName, lastName, email, password,confirmPassword,  otp})
       
        if(!response.data.success){
          
          throw new Error(response.data.msg)
        }
        toast.success("Signup Success");
        dispatch(setSignupData(null))
        navigate('/login');
    }
     catch (error) {
      console.log("SignUp API ERROR............", error)
      toast.error(error.message)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export  function login(email,password,navigate){
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", 'http://localhost:4000/api/v1/auth/login', {email, password,})
      console.log("LOGIN API RESPONSE............", response)

      if(!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      dispatch(setUser({ ...response.data.user}))
      
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.user))
     
    navigate('/dashboard')
    }
     catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error(error.message)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/dashboard")
    toast.success("Logged Out")
  }
}