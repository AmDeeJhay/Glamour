import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import polygonSvg from '/polygon.svg';
import polygonBgSvg from '/polygonbg.svg';

const perks = [
    'Access all Glamour features',
    'Participate in platform\nactivities',
    '₦10,000 welcome bonus',
];

const Promo: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage>
            <IonContent fullscreen>
                <div
                    style={{
                        minHeight: '100dvh',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        background: '#E6C58E',
                        overflow: 'hidden',
                        paddingBottom: 'calc(env(safe-area-inset-bottom) + 14px)',
                    }}
                >
                    {/* Patterned page background */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            zIndex: 0,
                            pointerEvents: 'none',
                            background:
                                'repeating-linear-gradient(100deg, rgba(255,255,255,0.24) 0 2px, transparent 2px 12px)',
                            opacity: 0.55,
                        }}
                    />

                    {/* Close */}
                    <div
                        style={{
                            position: 'relative',
                            zIndex: 5,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            padding: 'max(14px, env(safe-area-inset-top)) 16px 0',
                        }}
                    >
                        <button
                            onClick={() => history.replace('/home')}
                            aria-label="Close"
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: '999px',
                                border: '1px solid rgba(255,255,255,0.55)',
                                background: 'rgba(247, 230, 198, 0.8)',
                                color: '#8c7150',
                                fontSize: 24,
                                lineHeight: 1,
                                cursor: 'pointer',
                            }}
                        >
                            ×
                        </button>
                    </div>

                    {/* Intro copy */}
                    <section
                        style={{
                            position: 'relative',
                            zIndex: 5,
                            padding: '10px 20px 18px',
                        }}
                    >
                        <h1
                            style={{
                                margin: 0,
                                fontSize: 'clamp(36px, 5.5vw, 48px)',
                                lineHeight: 1.05,
                                fontWeight: 700,
                                letterSpacing: '-0.6px',
                                color: '#192B42',
                            }}
                        >
                            Unlock Glamour Access
                        </h1>
                        <p
                            style={{
                                margin: '12px 0 0',
                                fontSize: 'clamp(14px, 3.5vw, 16px)',
                                lineHeight: 1.35,
                                fontWeight: 500,
                                color: '#4f5a68',
                            }}
                        >
                            Get full access to the Glamour platform
                            <br />
                            and start participating in earning activities.
                        </p>
                    </section>

                    {/* Offer card */}
                    <section
                        style={{
                            position: 'relative',
                            zIndex: 5,
                            margin: '0 20px',
                            borderRadius: 10,
                            padding: 10,
                            overflow: 'hidden',
                        }}
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'none',
                                zIndex: 0,
                            }}
                        >
                            <image href={polygonSvg} width="100" height="100" preserveAspectRatio="none" />
                        </svg>
                        <div
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                borderRadius: 14,
                                padding: '24px 18px 22px',
                                overflow: 'hidden',
                            }}
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'none',
                                    zIndex: 0,
                                }}
                            >
                                <image href={polygonBgSvg} width="100" height="100" preserveAspectRatio="none" />
                            </svg>

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div
                                    style={{
                                        fontSize: 'clamp(36px, 10vw, 56px)',
                                        letterSpacing: 1,
                                        color: '#F2F6FA',
                                        fontWeight: 500,
                                    }}
                                >
                                    ₦13,000
                                </div>

                                <div style={{ borderTop: '3px dashed rgba(249, 233, 202, 0.9)', margin: '16px 0 18px' }} />

                                <div style={{ display: 'grid', gap: 16 }}>
                                    {perks.map((perk) => (
                                        <div key={perk} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                            <span
                                                style={{
                                                    width: 24,
                                                    height: 24,
                                                    borderRadius: '999px',
                                                    background: '#3D6186',
                                                    color: '#D6E8FA',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 700,
                                                    fontSize: 14,
                                                    lineHeight: 1,
                                                    marginTop: 1,
                                                    flexShrink: 0,
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span
                                                style={{
                                                    whiteSpace: 'pre-line',
                                                    color: '#D6DEE9',
                                                    fontSize: 'clamp(14px, 3.8vw, 18px)',
                                                    lineHeight: 1.25,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {perk}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ borderTop: '3px dashed rgba(249, 233, 202, 0.9)', margin: '18px 0 20px' }} />

                                <button
                                    style={{
                                        width: '80%',
                                        margin: '0 auto',
                                        display: 'block',
                                        height: 48,
                                        borderRadius: 12,
                                        border: '1px solid rgba(255,255,255,0.45)',
                                        background: 'linear-gradient(180deg, #E8C27F 0%, #C88B32 100%)',
                                        color: '#FFF8E9',
                                        fontWeight: 700,
                                        fontSize: 24,
                                        letterSpacing: 0.2,
                                        boxShadow: '0 0 22px rgba(251, 188, 87, 0.65), 0 6px 12px rgba(4, 8, 16, 0.42)',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Unlock Access
                                </button>
                            </div>
                        </div>
                    </section>

                    <div
                        style={{
                            marginTop: 'auto',
                            textAlign: 'center',
                            padding: '20px 16px 0',
                            color: 'rgba(90, 67, 34, 0.9)',
                            fontSize: 17,
                            fontWeight: 500,
                            position: 'relative',
                            zIndex: 5,
                        }}
                    >
                        Secure payment powered by Paystack
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Promo;