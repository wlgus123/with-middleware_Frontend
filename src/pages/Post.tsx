import React from 'react';
import '../styles/Post.css';

const Post: React.FC = () => {
    return (
        <div className="post-container">
            <div className="post-form">
                <input type="text" placeholder="제목" className="post-input" />
                <input type="text" placeholder="모집 기간" className="post-input" />
                <textarea placeholder="내용을 입력하세요..." className="post-textarea"></textarea>
                <button className="post-button">게시하기</button>
            </div>
        </div>
    );
};

export default Post;
