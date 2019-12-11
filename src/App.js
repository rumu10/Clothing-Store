import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component'
import {auth} from './firebase/firebase.util'

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    };
  }

  unsubscrimeFromAuth= null;

  componentDidUpdate(){
    this.unsubscrimeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({
        currentUser:user
      });
    })
  };

  componentWillUnmount(){
    this.unsubscrimeFromAuth();
  };

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component= {Homepage}/>
          <Route path='/shop' component= {ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
        
      </div>
    );
  }
 
}

export default App;
