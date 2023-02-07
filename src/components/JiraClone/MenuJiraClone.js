import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuJiraClone() {
    return (
        <div className="menu">
            <div className="account">
                <div className="avatar">
                    <img src={require("../../assets/img/download.jfif")} alt={require("../../assets/img/download.jfif")} />
                </div>
                <div className="account-info">
                    <p>Jira Clone</p>
                    <p>Report bugs</p>
                </div>
            </div>
            <div className="control">
                <div>
                    <i className="fa fa-credit-card mr-1" />
                    <NavLink className='text-dark text-decoration-none' to='/jira' activeClassName='active font-weight-bold'> Jira Board</NavLink>
                </div>
                <div>
                    <i className="fa fa-cog mr-1" />
                    <NavLink className='text-dark text-decoration-none' to='/createProject' activeClassName='active font-weight-bold'> Create Project</NavLink>
                </div>
                <div>
                    <i className="fa fa-cog mr-1" />
                    <NavLink className='text-dark text-decoration-none' to='/projectmanagement' activeClassName='active font-weight-bold'> Project Management</NavLink>
                </div>
            </div>
            <div className="feature">
                <div>
                    <i className="fa fa-truck" />
                    <span> Releases</span>
                </div>
                <div>
                    <i className="fa fa-equals" />
                    <span> Issues and filters</span>
                </div>
                <div>
                    <i className="fa fa-paste" />
                    <span> Pages </span>
                </div>
                <div>
                    <i className="fa fa-location-arrow" />
                    <span> Reports</span>
                </div>
                <div>
                    <i className="fa fa-box" />
                    <span> Components</span>
                </div>
            </div>
        </div>
    )
}
