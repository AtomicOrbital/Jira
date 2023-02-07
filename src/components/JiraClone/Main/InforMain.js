import React from 'react'
import { useSelector } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';
export default function InforMain() {
    const { projectDetail } = useSelector(state => state.ProjectReducer);

    const renderAvatar = () => {
        return projectDetail.member?.avatar.map((user, index) => {
            return <div key={index} className="avatar">
                <img src={user.avatar} alt={user.avatar} />
            </div>
        })
    }

    return (
        <div>
            <h3>{projectDetail.projectName}</h3>
            <section>
                {ReactHtmlParser(projectDetail.description)}
            </section>
            <div className="info" style={{ display: 'flex' }}>
                <div className="search-block">
                    <input className="search" />
                    <i className="fa fa-search" />
                </div>
                <div className="avatar-group" style={{ display: 'flex' }}>
                    {renderAvatar()}
                </div>
                <div style={{ marginLeft: 20 }} className="text">Only My Issues</div>
                <div style={{ marginLeft: 20 }} className="text">Recently Updated</div>
            </div>
        </div>
    )
}
