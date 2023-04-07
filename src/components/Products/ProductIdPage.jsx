import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetching from '../../hooks/useFetching'
import PostService from '../../API/PostService'
import Loader from '../UI/Loader/Loader'

function PostIdPage() {
    const params = useParams()
    
    const [post, setPost]=useState({})
    const [comments,setComments] = useState([])
    const [fetchPostbyId, isLoading,error]= useFetching(async(id)=>{
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading,comerror]= useFetching(async(id)=>{
      const response = await PostService.getCommentsByPostId(id)
      setComments(response.data)
  })


   useEffect(()=>{
    fetchPostbyId(params.id)
    fetchComments(params.id)
   },[])
    
  return (
    <div>
      <h1>posts page ID = {params.id}</h1>

      {isLoading
      ?<Loader></Loader>
      :<div>{post.title}</div>
      }
      <h1>
        Comments
      </h1>
      {isComLoading
      ? <Loader/>
      : <div>
          {comments.map(comm =>
            <div key={comm.id} style={{marginTop:15}}>
              <h5>User Mail: {comm.email}</h5>
              <div>Comment: {comm.body}</div>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default PostIdPage