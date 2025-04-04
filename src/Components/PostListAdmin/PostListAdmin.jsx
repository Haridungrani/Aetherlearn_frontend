import React, { useEffect, useState } from 'react'
import s from './PostListAdmin.module.css'
import { getPost } from '../../services/operation/post';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../Spinner/Spinner';
import Option from '../Option/option';
import { postOption } from '../../utils/optionData';



const PostListAdmin = ({setEditOpen}) => {

  const { classroomID } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDeletePost = (postId) => {
    setData(prevPosts => prevPosts.filter(post => post._id !== postId));
}

  useEffect(() => {
    getPost(classroomID, setLoading, setData)
  }, [classroomID]);

  return (
    <div className={s.container32}>
      {
        loading ? (<div className={s.loadingContainer}><LoadingSpinner /><p>Buckle up! We’re diving into your video vault!</p></div>) : (
          <>
            {
              data.length == 0 ? (<>No Data</>) : (
                <div >
                  {
                    data.map((item) => (
                      <div className={s.videoContainer}>

                        {/* Uploader Details */}

                        <div className={s.uploaderDetails}>
                          <div className={s.detailsWrapper}>
                            <div className={s.badge}>
                              <p>{item.userId.firstName[0]}</p>
                            </div>
                            <div>
                              <p className={s.names}>{item.userId.firstName} {item.userId.lastName}</p>
                              {
                                item.createdAt && <p className={s.date}>{item.createdAt.split('T')[0]}</p>
                              }
                            </div>
                          </div>
                          <div className={s.optionContaienr}>
                            <Option optionData={postOption} id={item._id} handleDeletePost={handleDeletePost} setEditOpen={setEditOpen}/>
                          </div>
                        </div>

                        {/* Video Display  */}

                        <div className={s.decriptionBox}>
                          {/* <p>{item.description}</p> */}
                          <p
                            dangerouslySetInnerHTML={{ __html: item.description }}
                            style={{ whiteSpace: 'pre-line' }}
                          />
                        </div>
                      </div>
                    ))
                  }
                </div>
              )
            }
          </>
        )
      }
    </div>
  )

}

export default PostListAdmin