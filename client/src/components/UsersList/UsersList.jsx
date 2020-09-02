import React from 'react'

import './UsersList.css'

import onlineIcon from '../../assets/onlineIcon.png'

const UsersList = ({ usersList, room }) => {
    return (
        <div className="usersContainer">

            <h2 className="headingUsersContainer">
                Online Users
            </h2>

            <div className="usersList">
                {usersList.map((user) => {
                    return (
                        <div className="userDetails" key={user.id} >
                            <div className="userName">
                                <img src={onlineIcon} alt="Online Icon" className="onlineIcon" />
                                {user.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UsersList