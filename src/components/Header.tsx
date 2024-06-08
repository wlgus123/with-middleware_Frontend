import React from 'react';
import '../styles/Header.css';
import {GlobalStyle} from "../styles/styled/GlobalStyle";

const Header: React.FC = () => {
    return (
        <div className="header">
        <GlobalStyle />
            {/* 왼쪽 로고 이미지 */}
            <img src="/images/header/Logo.svg" alt="로고" className="logo" />

            {/* 오른쪽 아이콘 */}
            <div className="icons">
                <img src="/images/header/search_icon.svg" alt="검색 아이콘" className="icon"/>
                <img src="/images/header/user_icon.svg" alt="유저 아이콘" className="icon"/>
                <img src="/images/header/alarm_icon.svg" alt="알람 아이콘" className="icon"/>
            </div>
        </div>
    );
};

export default Header;
