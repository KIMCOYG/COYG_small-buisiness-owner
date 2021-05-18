import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../modules/posts';
import Home from "../component/Home";
import {reducerUtils} from "../lib/asyncUtils";


const PostListContainer = () =>{
    const {data, loading, error} = useSelector(state => state.posts.posts || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    if(loading) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    console.log('container    ', data)
    return (
        <Home lists={data}></Home>
    )

}
export default PostListContainer