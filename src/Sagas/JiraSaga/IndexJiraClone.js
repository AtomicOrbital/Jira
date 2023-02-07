import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContentMain from '../../components/JiraClone/Main/ContentMain'
import HeaderMain from '../../components/JiraClone/Main/HeaderMain'
import InforMain from '../../components/JiraClone/Main/InforMain'
import { ProjectReducer } from '../../redux/reducers/ProjectReducer'

export default function IndexJiraClone(props) {
    console.log("props", props);
    const { projectDetail } = useSelector(state => state.ProjectReducer);
    console.log("projectDetail", projectDetail);
    const dispatch = useDispatch();

    useEffect(() => {
        const { projectId } = props.match.params;
        dispatch({
            type: 'GET_PROJECT_DETAIL',
            projectId
        })
    }, [])
    return (
        <div className='main'>
            <HeaderMain />
            <InforMain />
            <ContentMain />
        </div>
    )
}
