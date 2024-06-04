// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Post from './pages/Post';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/post" element={<Post />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
