import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import Login from './modal/Login';

const Sidebar: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const closeLoginModal = () => {
        setShowLogin(false);
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className={`toggle-button ${isCollapsed ? 'collapsed' : ''}`} onClick={toggleSidebar}>
                <img src={`/images/sidebar/${isCollapsed ? 'arrow_right' : 'arrow_left'}.svg`} alt="Toggle Sidebar" />
            </button>
            <div className="sidebar-header">
                <img src="/images/sidebar/default_profile.svg" alt="Profile" className="profile-image" />
                {!isCollapsed && (
                    <button className="login-button" onClick={handleLoginClick}>로그인</button>
                )}
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/post">
                            <img src="/images/sidebar/write_icon.svg" alt="글쓰기 아이콘" className="nav-icon" />
                            <span className="nav-text">글쓰기</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src="/images/sidebar/team_icon.svg" alt="팀 프로젝트 아이콘" className="nav-icon" />
                            <span className="nav-text">팀 프로젝트</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/sidebar/designer_icon.svg" alt="디자이너 아이콘" className="nav-icon" />
                            <span className="nav-text">디자이너</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/sidebar/developer_icon.svg" alt="개발자 아이콘" className="nav-icon" />
                            <span className="nav-text">개발자</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/sidebar/study_icon.svg" alt="스터디 아이콘" className="nav-icon" />
                            <span className="nav-text">스터디</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/sidebar/heart_icon.svg" alt="찜한 게시물 아이콘" className="nav-icon" />
                            <span className="nav-text">찜한 게시물</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/sidebar/RecentlyViewed_icon.svg" alt="최근 본 게시물 아이콘" className="nav-icon" />
                            <span className="nav-text">최근 본 게시물</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {showLogin && <Login onClose={closeLoginModal} />}
        </aside>
    );
};

export default Sidebar;
