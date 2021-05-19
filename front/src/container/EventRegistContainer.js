import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {reducerUtils} from "../lib/asyncUtils";
import {getMyShopsById} from "../modules/posts";
import EventRegistGetSid from "../component/EventRegistGetSid";


const EventRegistContainer = ({uId}) => {
    const {data, loading, error} = useSelector(state => state.posts.post[uId] || reducerUtils.initial());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMyShopsById(uId));
    }, [uId, dispatch])

    if(loading && !data) return '로딩중'
    if(error) return 'error'
    if(!data) return null
    console.log('container    ', data)

    return (
        <EventRegistGetSid uId={uId} lists={data}/>
    )

}
export default EventRegistContainer