import React from 'react';
import '../styles/MainContent.css';

const MainContent: React.FC = () => {
    return (
        <main className="main-content">
            <div className="tabs">
                <button className="tab">최근 게시물</button>
                <button className="tab">인기 게시물</button>
                <button className="tab">추가 모집</button>
            </div>
            <div className="posts">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div className="post" key={index}>
                        <h3>게시물 {index + 1}</h3>
                        <p>내용...</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default MainContent;
