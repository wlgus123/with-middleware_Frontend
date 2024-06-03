import React from 'react';
import '../styles/Post.css';

const Post: React.FC = () => {
    return (
        <div className="post-container">
            <div className="post-form">
                <input type="text" placeholder="제목을 입력하세요" className="post-title" />
                <div className="post-date">
                    <label>모집 기간:</label>
                    <div className="post-date-inputs">
                        <input type="date" className="post-input" />
                        <span>~</span>
                        <input type="date" className="post-input" />
                    </div>
                </div>
                <textarea placeholder="내용을 입력하세요 (링크 필수)" className="post-content"></textarea>
                <button className="post-button">게시하기</button>
            </div>
        </div>
    );
};

export default Post;
