import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Sidebar />
                <main className="main-content">
                    <h1>Welcome to the Dashboard</h1>
                </main>
            </div>
        </div>
    );
}

export default App;
