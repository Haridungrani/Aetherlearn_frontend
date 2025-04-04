const BASE_URL = "http://localhost:4000"

export const endpoints = {
    SENDOTP_API: BASE_URL + "/api/v1/auth/sendotp",
    SIGNUP_API: BASE_URL + "/api/v1/auth/signup",
    LOGIN_API: BASE_URL + "/api/v1/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/api/v1/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/api/v1/auth/reset-password",
}

export const classendpoints = {
  CREATE_API: BASE_URL + "/class/createclass",
  JOIN_API: BASE_URL + "/class/joinclass",
  GET_CLASSES :BASE_URL+"/class/getallclass",
  GET_POPLES :BASE_URL+"/class/getpeoples",
  REMOVE_MEMBER :BASE_URL+"/class/removemember",
  CLASS_DETAILS :BASE_URL +"/class/classdetail",
  UPDATE_DETAILS :BASE_URL +"/class/updateclassdetail",
  
}

export const videoendpoints = {
  GENRATE_URL: BASE_URL + "/api/v1/aws/generate-presigned-url",
}
  
export const postendpoints = {
  CREATE_POST : BASE_URL + "/api/v1/post/createpost",
  EDIT_POST : BASE_URL + "/api/v1/post/editpost",
  DELETE_POST : BASE_URL + "/api/v1/post/deletepost",
  GET_POST : BASE_URL + "/api/v1/post/getpost",

  VIDEO_DETAILS_SAVE: BASE_URL + "/api/v1/post/updatevideodetails",
  GET_VIDEO_METADATA: BASE_URL + "/api/v1/post/getvideos",
  GET_SINGLE_VIDEO: BASE_URL + "/api/v1/post/videometadata",
  DELETE_VIDEO : BASE_URL + "/api/v1/post/deletevideo",
  
  GET_POST_EDIT: BASE_URL + "/api/v1/post/getpostbyid",
  GET_VIDEO_EDIT: BASE_URL + "/api/v1/post/getvideobyid",
  
}