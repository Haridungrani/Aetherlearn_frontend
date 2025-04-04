import { toast } from "react-toastify";
import { apiConnector } from "../connector";
import { videoendpoints ,postendpoints } from "../api";
import axios from 'axios';
import {setQueryParam} from '../../utils/queryFunction'


export async function createPost(description ,classroomID, setLoading,closeModal) {
    setLoading(true);
  
    try {
      
      const response = await apiConnector("POST", postendpoints.CREATE_POST , {description,classroomId:classroomID});
  
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
  
      console.log(response.data)
      closeModal();
    
    } catch (error) {
      toast.error(error.message);
    }
    
    setLoading(false);
}

export async function getPost( classroomID, setLoading,setData) {
    setLoading(true);
  
    try {
      
      const response = await apiConnector("GET", postendpoints.GET_POST+`?classroomId=${classroomID}`);
  
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
  
      console.log(response.data)
      setData(response.data.data)
    
    } catch (error) {
      toast.error(error.message);
    }
    
    setLoading(false);
}

export async function deletePost(postId,handleDeletePost) {
  const toastId = toast.loading("Deleting Post")

  try {
    const response = await apiConnector("POST", postendpoints.DELETE_POST+`?postId=${postId}`);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Deleted");
    handleDeletePost(postId);
  } catch (error) {
    toast.error(error.message);
  }
  toast.dismiss(toastId);
}

export async function deleteVideo(postId,handleDeletePost) {
  const toastId = toast.loading("Deleting Post")

  try {
    const response = await apiConnector("POST", postendpoints.DELETE_VIDEO+`?videoId=${postId}`);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Deleted");
    handleDeletePost(postId);
  } catch (error) {
    toast.error(error.message);
  }
  toast.dismiss(toastId);
}

// postId ,description

export async function editPost(description,id,setLoading,closeModal) {
  setLoading(true); 

  try {
    
    const response = await apiConnector("POST", postendpoints.EDIT_POST , { postId:id ,description:description});

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    console.log(response.data)
    closeModal();
  
  } catch (error) {
    toast.error(error.message);
  }
  
  setLoading(false);
}

export async function getPostById( id, setLoading,setFormData) {
  setLoading(true);

  try {
    
    const response = await apiConnector("GET", postendpoints.GET_POST_EDIT+`?ID=${id}`);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    setFormData({
      description:response.data.data[0].description
    })
  
  } catch (error) {
    toast.error(error.message);
  }
  
  setLoading(false);
}

export async function getVideoById( ID, setLoading,setFormData) {
  setLoading(true);

  try {
    
    const response = await apiConnector("GET", postendpoints.GET_VIDEO_EDIT+`?ID=${ID}`);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    console.log(response.data.data[0].title)
    setFormData({
      videoTitle:response.data.data[0].title,
      videoDesc:response.data.data[0].description
    })
   
  
  } catch (error) {
    toast.error(error.message);
  }
  
  setLoading(false);
}