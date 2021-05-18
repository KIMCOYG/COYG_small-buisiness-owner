import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getUserById} from '../modules/posts';
import {reducerUtils} from "../lib/asyncUtils";
import UserInfo from "../component/UserInfo";


const UserInfoContainer = () =>{
    const {data, loading, error} = useSelector(state => state.posts.post[id] || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserById());
    }, [dispatch])

    if(loading && !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    console.log('container    ', data)
    return (
        <UserInfo lists={data}/>
    )

}
export default UserInfoContainer