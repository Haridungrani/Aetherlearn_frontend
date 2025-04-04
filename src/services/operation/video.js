import { toast } from "react-toastify";
import { apiConnector } from "../connector";
import { videoendpoints ,postendpoints } from "../api";
import axios from 'axios';
import {setQueryParam} from '../../utils/queryFunction'

export async function getSignedUrl( setLoading,classroomID,file) {
  setLoading(true);

  try {
    
    const response = await apiConnector("GET", videoendpoints.GENRATE_URL+`?classroomID=${classroomID}&fileType=video/${file.name.split('.')[1]}`);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    console.log(response.data.url)
    

    setQueryParam('id', response.data.dbId);
    setQueryParam('stage', 2);
    setLoading(false);
    uploadFile(file,response.data.url)

  } catch (error) {
    toast.error(error.message);
  }
  
}

const uploadFile = async (file, url) => {
  console.log("Uploading...");
  try {
      const response = await axios.put(url, file, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
              const percentComplete = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              console.log(`Upload progress: ${percentComplete}%`);
              // setProgress(percentComplete); // Update progress state
          },
      });

      console.log('Upload successful:', response.data);
  } catch (error) {
      console.error('Error uploading file:', error);
  }
};


export async function updateDetailsOfVideo(formData ,dbId, setLoading,closeModal) {
  setLoading(true);

  try {
    
    const response = await apiConnector("POST", postendpoints.VIDEO_DETAILS_SAVE , {formData,dbId});

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


export async function getVideoMetadata(classroomID , setData,setLoading) {
  setLoading(true);

  try {
    
    const response = await apiConnector("GET", postendpoints.GET_VIDEO_METADATA+`?classroomId=${classroomID}`);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    setData(response.data.videos)

  
  } catch (error) {
    toast.error(error.message);
  }

  setLoading(false);
}

export async function getSingleMetaData(videoID,setLoading,setVideoData) {
  setLoading(true);

  try {
    
    const response = await apiConnector("GET", postendpoints.GET_SINGLE_VIDEO+`?videoID=${videoID}`);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    setVideoData(response.data.videos)

  
  } catch (error) {
    toast.error(error.message);
  }

  setLoading(false);
}