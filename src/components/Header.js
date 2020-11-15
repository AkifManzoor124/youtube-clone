import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {

    const [inputSearch, setInputSearch] = useState('')

    return (

        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                <Link to='/'>
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png">

                </img>   
                </Link>
            </div>
            <div className='header__input'>
                <input
                    placeholder='Search'
                    type="text"
                    onChange={e => setInputSearch(e.target.value)} />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header__inputButton' />
                </Link>
            </div>
            <div className='header__icons'>
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <Avatar className='header__avatar' alt="Akif Manzoor" src="https://acreeye.web.app/img/dogs/image2.jpeg" />
            </div>
        </div >
    )
}

export default Header