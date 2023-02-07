import React from 'react'
import { useSelector } from 'react-redux'
import loadingBackground from './LoadingComponents.module.css'
export default function LoadingComponent() {

    const { isLoading } = useSelector(state => state.LoadingReducers);

    if(isLoading){
        return (
            <div className={loadingBackground.bgLoading}>
                <img src={require('../../assets/imgLoading/Loading.gif')} />
            </div>
        )
    } else{
        return '';
    }
    
}
