import React from 'react';
import { Component } from 'react';
import './App.css';


class App extends Component{
  handleClick = () => {
    alert("you clicked button");
  };
  render(){
    return(
      <>
      <div class="background">
      

     <div class="announcementBar" role="banner" >      
      <a class="links" href="/Homepagelink" target="_blank">Home Page </a>
       <a class= "links" href="/Aboutuslink" target="_blank">About Us </a>
       <a class="links" href="/offerlink" target="_blank">Offer</a>
       <a class="links" href="/priseliselink" target="_blank">Price List</a>
        <a class="links" href="/bloglink.jsx" target="_blank">Blog</a>
        <a class="links" href="/contactuslink" target="_blank">Contact Us</a>
    </div>

        <div className='Intro'>
          <h1> PawJoy: Pet Paradise</h1></div>
          <div className="caption">
          <p>Welcome to PawJoy: Where pets thrive and owners connect for a healthier, happier community.</p>
          </div>
      
          <button class="button button1" onClick={this.handleClick}>Check Offer!</button>
          </div>
    </>
    )
  }

}

export default App;