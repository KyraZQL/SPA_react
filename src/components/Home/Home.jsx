import React, { Component } from 'react'

// import SearchList from '../SearchList/SearchList.jsx'
// 'Home' is already defined as the class name, so provide an alias
// 'Home-header' from the SCSS file gets transformed to 'HomeHeader'
//    because '-' is not allowed in JS variable names
import { Home as HomeCss, HomeHeader } from './Home.module.scss'

class Home extends Component {
  render() {
    return (
      <div className={HomeCss}>
        <h1 className={HomeHeader}>Welcome to the MP2!</h1>
    
      </div>
    )
  }

}

export default Home
