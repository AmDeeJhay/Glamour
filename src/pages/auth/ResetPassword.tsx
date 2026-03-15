import { useState } from 'react';
import { IonContent, IonPage, IonInput } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Auth.css';

const EyeOff = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
);

const EyeOn = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const ResetPassword: React.FC = () => {
    const history = useHistory();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPw, setShowPw] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <IonPage>
            <IonContent fullscreen className="auth-content">
                <div className="auth-page">

                    {/* Header */}
                    <div className="auth-header">
                        <div className="auth-header-content">
                            <img src="/Glamourlogo.svg" alt="Glamour" className="auth-logo" />
                            <h1 className="auth-title">Reset Password</h1>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="auth-card">

                        <p style={{ fontSize: '14px', color: '#666', margin: '0 0 16px', fontFamily: 'DM Sans, sans-serif' }}>
                            Create a new password for your account.
                        </p>

                        {/* New Password */}
                        <div className="field-group">
                            <label className="field-label">New Password</label>
                            <div className="field-wrap">
                                <IonInput
                                    type={showPw ? 'text' : 'password'}
                                    placeholder="Enter New Password"
                                    value={password}
                                    onIonInput={(e) => setPassword(e.detail.value!)}
                                />
                                <button className="eye-btn" onClick={() => setShowPw(!showPw)}>
                                    {showPw ? <EyeOn /> : <EyeOff />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="field-group">
                            <label className="field-label">Confirm Password</label>
                            <div className="field-wrap">
                                <IonInput
                                    type={showConfirm ? 'text' : 'password'}
                                    placeholder="Re-enter New Password"
                                    value={confirmPassword}
                                    onIonInput={(e) => setConfirmPassword(e.detail.value!)}
                                />
                                <button className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
                                    {showConfirm ? <EyeOn /> : <EyeOff />}
                                </button>
                            </div>
                        </div>

                        <button className="auth-btn" onClick={() => history.push('/auth/signin')}>
                            Reset Password
                        </button>

                        <p className="auth-footer">
                            Remembered your password?{' '}
                            <span className="auth-footer-link" onClick={() => history.push('/auth/signin')}>Log in</span>
                        </p>

                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ResetPassword;
