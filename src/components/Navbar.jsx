import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">GART TUBE</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Emmanuel</span>
                <button>logout</button>
            </div>
        </div>
    )
}  

export default Navbar;