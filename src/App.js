import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component.jsx';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import{setCurrentUser} from './redux/user/user.action';

class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state={
  //     currentUser:null
  //   };
  // }

  unsubscrimeFromAuth= null;

  componentDidMount(){
    const {setCurrentUser}=this.props;

    this.unsubscrimeFromAuth=auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
        });
      }
      setCurrentUser(userAuth);
    });
  };

  componentWillUnmount(){
    this.unsubscrimeFromAuth();
  };

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component= {Homepage}/>
          <Route path='/shop' component= {ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
        
      </div>
    );
  }
 
}

const mapDispatchToProps= dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
