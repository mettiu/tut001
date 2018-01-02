import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderContainer from './shared/HeaderContainer';
import ErrorBox from './shared/ErrorBoxContainer';
import HomePageCont from './home/HomePageContainer';
import ProfilePage from './account/ProfilePage';
import LoginPage from './account/LoginPageContainer';
import RegisterPage from './account/RegisterPageContainer';
import RegistrationSuccessPage from './account/RegistrationSuccessPageContainer';

export default function Template(props) {
  const { authentication, progress } = props;
  return (
    <Router>
      <div className="wrapper">
        <HeaderContainer username="anonymous" authentication={authentication} />
        <section className="page-content container-fluid">
          <ErrorBox />
          <Route exact path="/" component={HomePageCont} />
          <Route path="/account/profile/:id" component={ProfilePage} />
          <Route exact path="/account/login" component={LoginPage} />
          <Route exact path="/account/register" component={RegisterPage} />
          <Route exact path="/account/registration-success" component={RegistrationSuccessPage} />
        </section>
        <div className="loader-wrapper" style={progress > 0 ? { display: 'block' } : { display: 'none' }}>
          <div className="loader-box">
            <div className="loader">Loading...</div>
          </div>
        </div>
      </div>
    </Router>
  );
}
