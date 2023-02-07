import React from 'react'
import { useSelector } from 'react-redux';

export default function HeaderMain() {
    const { projectDetail } = useSelector(state => state.ProjectReducer);
    return (
        <div className="header">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={{ backgroundColor: 'white' }}>
                    <li className="breadcrumb-item">Project</li>
                    <li className="breadcrumb-item">JiraClone</li>
                    <li className="breadcrumb-item" aria-current="page">
                        Jira Board
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                        {projectDetail.projectName}
                    </li>
                </ol>
            </nav>
        </div>
    )
}
