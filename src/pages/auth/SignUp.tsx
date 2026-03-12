import { useState } from 'react';
import { IonContent, IonPage, IonInput } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Auth.css';

const EyeOff = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
);

const EyeOn = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);

const SignUp: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
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
                            <h1 className="auth-title">Sign Up</h1>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="auth-card">

                        {/* Google */}
                        <button className="google-btn">
                            <svg width="20" height="20" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                            </svg>
                            Signup with Google
                        </button>

                        <p className="auth-or">OR</p>

                        {/* Email */}
                        <div className="field-group">
                            <label className="field-label">Email</label>
                            <div className="field-wrap">
                                <IonInput
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onIonInput={(e) => setEmail(e.detail.value!)}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="field-group">
                            <label className="field-label">Password</label>
                            <div className="field-wrap">
                                <IonInput
                                    type={showPw ? 'text' : 'password'}
                                    placeholder="Enter Password"
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
                                    placeholder="Re-enter Password"
                                    value={confirmPassword}
                                    onIonInput={(e) => setConfirmPassword(e.detail.value!)}
                                />
                                <button className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
                                    {showConfirm ? <EyeOn /> : <EyeOff />}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button className="auth-btn" onClick={() => history.push('/auth/verify-email')}>
                            Sign Up
                        </button>

                        {/* Footer */}
                        <p className="auth-footer">
                            Already have an account?{' '}
                            <span className="auth-footer-link" onClick={() => history.push('/auth/signin')}>Login</span>
                        </p>
                    </div>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default SignUp;