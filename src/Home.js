import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import AppsIcon from '@material-ui/icons/Apps';
import Search from './Search';

function Home() {

  const seed = Math.floor(Math.random() * 5000);

  return (
    <div className="home">

      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        </div>
      </div>

      <div className="home__body">
        <img src="https://tctechcrunch2011.files.wordpress.com/2015/09/googlelogo_color_300x104dp.png?w=600&h=208" alt="google"/>
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
