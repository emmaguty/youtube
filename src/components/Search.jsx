import React from "react";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user"/>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="userChatInfo">
                    <span>Emmanuel</span>
                </div>
            </div>
        </div>
    )
}  

export default Search;