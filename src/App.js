import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Route, Router, Switch, useHistory } from 'react-router-dom';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import CreateProject from './pages/CreateProjcet/CreateProject';
import DrawerJira from './pages/HOC/DrawerJira';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProjectManagement from './pages/ProjectManagement/ProjectManagement';
import IndexJiraClone from './Sagas/JiraSaga/IndexJiraClone';
import JiraCloneTemplate from './templates/HomeTemplate/JiraCloneTemplate';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import { history } from './util/history';





function App() {

  // const history = useHistory();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // console.log(history);
  //   dispatch({
  //     type: 'ADD_HISTORY',
  //     history: history
  //   })
  // })

  return (
    <Router history={history}>
      
      <DrawerJira />
      <LoadingComponent />
      <Switch>
        <UserLoginTemplate exact path="/login" Component={Login} />
        <JiraCloneTemplate exact path="/jira" Component={IndexJiraClone} />
        <JiraCloneTemplate exact path='/createProject' Component={CreateProject} />
        <JiraCloneTemplate exact path='/projectmanagement' Component={ProjectManagement} />
        <JiraCloneTemplate exact path='/projectdetail/:projectId' Component={IndexJiraClone} />
        
        <JiraCloneTemplate exact path='/' Component={ProjectManagement} />
      </Switch>


    </Router>
  );
}

export default App;
