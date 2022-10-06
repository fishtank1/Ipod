import React, { Component } from "react";
import MainScreen from "./MainScreen";
import BooksScreen from "./BooksScreen";
import SettingsScreen from "./SettingsScreen";
import GamesScreen from "./GamesScreen";
import PodcastScreen from "./PodcastScreen";
import MusicScreen from "./MusicScreen";
import './IpodBody.css'

class IpodBody extends Component {
    render() {
        return (
            <div className="Ipod-container">
                <div className="Ipod-screen">
                    <MainScreen />
                    <MusicScreen />
                    <PodcastScreen />
                    <GamesScreen />
                    <SettingsScreen />
                    <BooksScreen />
                </div>
            </div>
        )
    }
}

export default IpodBody;