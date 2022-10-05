import React, { Component } from "react";
import './IpodBody.css'

class IpodBody extends Component {
    render() {
        return (
            <div className="Ipod-container">
                <div className="Ipod-screen">
                    <div className="main-screen">
                        <div className="screen-leftside">
                            <div className="NavBar">
                                <p>9:41</p>
                                <i class="fa-solid fa-battery-full"></i>
                            </div>
                            
                            <div className="AppList">
                                <div className="Music tiles">
                                    <div className="app-icon music"></div>
                                    <p>Music</p>
                                </div>
                                <div className="Podcast tiles">
                                    <div className="app-icon podcast"></div>
                                    <p>Podcast</p>                                    
                                </div>
                                <div className="Games tiles">
                                    <div className="app-icon games"></div>
                                    <p>Games</p>
                                </div>
                                <div className="Settings tiles">
                                    <div className="app-icon settings"></div>
                                    <p>Settings</p>
                                </div>

                                <div className="tiles">
                                    <div className="app-icon"></div>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="screen-rightside"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IpodBody;