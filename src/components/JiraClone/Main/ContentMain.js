import React from 'react'
import { useSelector } from 'react-redux';

export default function ContentMain() {

    const { projectDetail } = useSelector(state => state.ProjectReducer);

    const renderCardTaskList = () => {
        return projectDetail.lstTask?.map((taskDetail, index) => {
            return <div key={index} className="card" style={{ width: '16rem', height: '24rem' }}>
                <div className="card-header">
                    {taskDetail.statusName}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}>
                        <p>
                            Each issue has a single reporter but can have multiple
                            assignees
                        </p>
                        <div className="block" style={{ display: 'flex' }}>
                            <div className="block-left">
                                <i className="fa fa-bookmark" />
                                <i className="fa fa-arrow-up" />
                            </div>
                            <div className="block-right">
                                <div className="avatar-group" style={{ display: 'flex' }}>
                                    <div className="avatar">
                                        <img src={require("../../../assets/img/download (1).jfif")} alt='1' />
                                    </div>
                                    <div className="avatar">
                                        <img src={require("../../../assets/img/download (2).jfif")} alt='2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <p>
                            Each issue has a single reporter but can have multiple
                            assignees
                        </p>
                        <div className="block" style={{ display: 'flex' }}>
                            <div className="block-left">
                                <i className="fa fa-check-square" />
                                <i className="fa fa-arrow-up" />
                            </div>
                            <div className="block-right">
                                <div className="avatar-group" style={{ display: 'flex' }}>
                                    <div className="avatar">
                                        <img src={require("../../../assets/img/download (1).jfif")} alt='1' />
                                    </div>
                                    <div className="avatar">
                                        <img src={require("../../../assets/img/download (2).jfif")} alt='2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
            </div>
        })
    }
    return (
        <div className="content" style={{ display: 'flex' }}>

            {renderCardTaskList()}
        </div>

    )
}
