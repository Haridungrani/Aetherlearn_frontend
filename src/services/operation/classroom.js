import { toast } from "react-toastify";
import { apiConnector } from "../connector";
import { classendpoints } from "../api";
import { setClasses,setLoading} from "../../slices/classlist";

export async function createClass(
  name,
  description,
  subject,
  setLoading,
  setShowCode
) {
  const toastId = toast.loading("Loading...");
  setLoading(true);
  try {
    const response = await apiConnector("POST", classendpoints.CREATE_API, {
      name,
      description,
      subject,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Created");
    setShowCode({
      open: true,
      code: response.data.data.classCode,
    });
  } catch (error) {
    toast.error("Could Not Create");
  }
  setLoading(false);
  toast.dismiss(toastId);
}

export async function joinClass(classCode, setLoading, setOpen) {
  const toastId = toast.loading("Loading...");
  setLoading(true);
  try {
    const response = await apiConnector("POST", classendpoints.JOIN_API, {
      classCode,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Joined");
    setOpen(false);
  } catch (error) {
    toast.error(error.message);
  }
  setLoading(false);
  toast.dismiss(toastId);
}


export async function getClasses(setClasses, setLoading) {
  const toastId = toast.loading("Loading...");
  setLoading(true);
  try {
    const response = await apiConnector("GET", classendpoints.GET_CLASSES);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    setClasses({
      joinedClasses:response.data.joinedClasses,
      ownClasses:response.data.ownClasses
    });
    
  } catch (error) {
    toast.error(error.message);
  }
  setLoading(false);
  toast.dismiss(toastId);
}


export  function getClasses2(){
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
          const response = await apiConnector("GET", classendpoints.GET_CLASSES);
      
          if (!response.data.success) {
            throw new Error(response.data.message);
          }
      
          dispatch(setClasses({
            joinedClasses:response.data.joinedClasses,
            ownClasses:response.data.ownClasses
          }));
          
        } catch (error) {
          toast.error(error.message);
        }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export async function getPeoples(classroomID,setData, setLoading) {
  const toastId = toast.loading("Loading...");
  setLoading(true);
  try {
    const response = await apiConnector("GET", classendpoints.GET_POPLES+`?classroomID=${classroomID}`);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    setData(response.data.students);
    
  } catch (error) {
    toast.error(error.message);
  }
  setLoading(false);
  toast.dismiss(toastId);
}

export async function removemember(classroomID,userId, setLoading,setData) {
  const toastId = toast.loading("Loading...");
  setLoading(true);
  try {
    const response = await apiConnector("GET", classendpoints.REMOVE_MEMBER+`?classroomID=${classroomID}&userID=${userId}`);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    //Delete Filter
    setData((prevData) => prevData.filter((item) => item._id !== userId)); // Filter out user by ID
  } catch (error) {
    toast.error(error.message);
  }
  setLoading(false);
  toast.dismiss(toastId);
}

export async function classDetails(classroomID,setLoading,setFormData,setClassCode) {
  const toastId = toast.loading("Loading...");
  setLoading(true);
  try {
    const response = await apiConnector("GET", classendpoints.CLASS_DETAILS+`?classroomID=${classroomID}`);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    //Delete Filter
   console.log(response.data.classRoom.name);
   setFormData({
    className: response.data.classRoom.name,
    subject: response.data.classRoom.subject,
    description: response.data.classRoom.description
    });
    setClassCode(response.data.classRoom.classCode)
  } catch (error) {
    toast.error(error.message);
  }
  setLoading(false);
  toast.dismiss(toastId);
}

