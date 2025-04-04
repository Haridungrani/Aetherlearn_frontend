import { deletePost,deleteVideo } from "../services/operation/post";
import { openEdit } from "../Pages/UploadPost/UploadPost";

export const videoOption =[
    {
        name:"Edit",
        function:openEdit
    },
    {
        name:"Delete",
        function:deleteVideo,
    },
];

export const postOption =[
    {
        name:"Edit",
        function:openEdit
    },
    {
        name:"Delete",
        function:deletePost,
    }
];
