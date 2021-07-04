import React, { useState } from 'react';
import './Header.css';
import { Avatar, IconButton } from '@material-ui/core';
import { Home, Search, Flag } from '@material-ui/icons';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ForumIcon from '@material-ui/icons/Forum';
import AddIcon from '@material-ui/icons/Add';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        setSearchInput('');
    };

    return (
        <div className="header">
            <div className="header__left">
                <img 
                    alt="Facebook logo (square)" 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                />
                <div className="header__input">
                    <form>
                        <Search />
                        <input type="text" placeholder="Search" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
                        <button onClick={handleSearch}>
                            Hidden submit
                        </button>
                    </form>
                </div>
            </div>

            <div className="header__center">
                <div className="header__option
                header__option--active">
                    <Home fontSize="large" />
                </div>
                <div className="header__option">
                    <Flag fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName.split(" ")[0]}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
