import { useState } from 'react';
import { IonContent, IonPage, IonInput } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import './auth.css';

const ForgotPassword: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleConfirm = () => {
        if (email) setSent(true);
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <div style={{
                    minHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1a1a1a',
                    padding: '64px 24px',
                }}>

                    {/* X button floats above card */}
                    <button
                        onClick={() => history.goBack()}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '-20px',
                            position: 'relative',
                            zIndex: 10,
                            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                            cursor: 'pointer',
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Card */}
                    <div style={{
                        width: '100%',
                        maxWidth: '340px',
                        backgroundColor: '#faf6ef',
                        borderRadius: '20px',
                        padding: '40px 24px 32px',
                    }}>
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: 700,
                            color: '#1a1008',
                            margin: '0 0 8px',
                        }}>
                            Forgot Password?
                        </h2>
                        <p style={{
                            fontSize: '14px',
                            color: '#666',
                            lineHeight: 1.5,
                            margin: '0 0 24px',
                        }}>
                            An email verification Link will be sent to your email
                        </p>

                        {/* Email input */}
                        <div style={{
                            border: '1.5px solid #e0dbd4',
                            borderRadius: '12px',
                            backgroundColor: '#faf8f5',
                            padding: '0 14px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '8px',
                        }}>
                            <IonInput
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onIonInput={(e) => setEmail(e.detail.value!)}
                                style={{
                                    '--color': '#1a1a1a',
                                    '--placeholder-color': '#bbb',
                                    '--padding-start': '0',
                                    '--padding-end': '0',
                                    fontSize: '14px',
                                    width: '100%',
                                } as React.CSSProperties}
                            />
                        </div>

                        {/* Success message */}
                        {sent && (
                            <p style={{
                                fontSize: '13px',
                                fontWeight: 600,
                                color: '#4caf50',
                                margin: '4px 0 16px',
                            }}>
                                Link successfully sent
                            </p>
                        )}

                        {/* Spacer */}
                        {!sent && <div style={{ height: '24px' }} />}

                        {/* Confirm button */}
                        <Button onClick={handleConfirm}>
                            Confirm Email
                        </Button>

                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ForgotPassword;