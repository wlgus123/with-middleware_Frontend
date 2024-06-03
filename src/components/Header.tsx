import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            {/* 왼쪽 로고 이미지 */}
            <img src="/Logo.svg" alt="로고" className="logo" />

            {/* 오른쪽 아이콘 */}
            <div className="icons">
                <img src="/icon/search_icon.svg" alt="검색 아이콘" className="icon" />
                <img src="/icon/alarm_icon.svg" alt="알람 아이콘" className="icon" />
            </div>
        </div>
    );
};

export default Header;
