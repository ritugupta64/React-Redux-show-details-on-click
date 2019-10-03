import React, { Component } from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My First Redux App</h1>
                <SongList />
                <SongDetails />
            </div>
        )
    }
}

export default App
