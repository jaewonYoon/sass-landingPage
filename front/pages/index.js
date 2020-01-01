import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'; 
import CarouselContainer from '../components/Carousel.Component'; 
import MainItem from '../components/MainItem.Component';
const Home = () => {
    const {me} = useSelector(selector => selector.user);
    const dispatch = useDispatch(); 
    useEffect( () => {
        if(me && me.id){
            console.log(`me가 로그인한 상태입니다.`);
        } 
    },[me && me.id])
    return (
        <>
            <CarouselContainer/>
            <MainItem/>
        </>
    )
}

export default Home; 