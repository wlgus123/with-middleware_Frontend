import React from 'react';
import '../modal/Login';

interface LoginProps {
    onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
    return (
        <div className="login-modal">
            <div className="login-modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>로그인</h2>
                <form>
                    <label>
                        이메일:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        비밀번호:
                        <input type="password" name="password" required />
                    </label>
                    <button type="submit">로그인</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
