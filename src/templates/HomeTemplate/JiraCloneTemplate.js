import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import MenuJiraClone from '../../components/JiraClone/MenuJiraClone';
import ModalJiraClone from '../../components/JiraClone/ModalJiraClone/ModalJiraClone';
import SidebarJiraClone from '../../components/JiraClone/SidebarJiraClone';
import '../../index.css';

export default function JiraCloneTemplate(props) {


    const { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <Fragment>
            <div className='jira'>
                <SidebarJiraClone />
                <MenuJiraClone />
                    <Component {...propsRoute} />
                <ModalJiraClone />
            </div>
        </Fragment>
    }}>

    </Route>
}
