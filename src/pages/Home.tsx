import { IonContent, IonPage } from '@ionic/react';
import ReadyPlayerMeAvatar from '../components/ReadyPlayerMeAvatar';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen style={{ '--background': '#ffffff' } as any}>
                <div style={{ background: '#ffffff', minHeight: '100%', paddingBottom: 100 }}>

                    {/* ══════════════════════════════════════
                        TOP SECTION — fractal glass background
                        same column pattern as auth header
                    ══════════════════════════════════════ */}
                    <div style={{
                        position: 'relative',
                        overflow: 'hidden',
                        paddingBottom: 24,
                        /* Fractal glass background */
                        background: '#F3E3C8',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    }}>

                        {/* Header row */}
                        <div style={{
                            position: 'relative', zIndex: 1,
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '52px 18px 16px',
                        }}>
                            {/* Avatar + greeting */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <ReadyPlayerMeAvatar size={44} />
                                <span style={{ fontSize: 17, fontFamily: 'Epilogue, sans-serif', fontWeight: 600, color: '#1a1008' }}>
                                    Hello Nini👋
                                </span>
                            </div>

                            {/* Bell button */}
                            <button style={{
                                width: 40, height: 40, borderRadius: '50%',
                                background: 'rgba(255,255,255,0.75)',
                                border: 'none', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                            }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                    stroke="#5a4020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                            </button>
                        </div>

                        {/* Balance card */}
                        <div style={{
                            position: 'relative', zIndex: 1,
                            margin: '0 18px',
                            borderRadius: 20,
                            background: '#1a2235',
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
                        }}>
                            {/* Wave / topographic line overlay */}
                            <img src="/Wireframe.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', }} />

                            <div style={{ position: 'relative', zIndex: 1, padding: '20px 22px 22px' }}>
                                <p style={{ fontSize: 14, color: '#C2C2C2', margin: '0 0 8px', fontWeight: 400, fontFamily: 'Epilogue, sans-serif', letterSpacing: '0.2px' }}>
                                    Available Balance
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: 29, fontFamily: 'Epilogue, sans-serif', fontWeight: 700, color: 'white', letterSpacing: '-0.5px' }}>
                                        ₦100,000
                                    </span>
                                    <button style={{
                                        background: 'white', color: '#1a2235',
                                        border: 'none', borderRadius: 999,
                                        padding: '10px 24px', fontSize: 14, fontWeight: 600, fontFamily: 'Epilogue, sans-serif',
                                        cursor: 'pointer', letterSpacing: '0.1px',
                                    }}>
                                        Withdraw
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════
                        BODY — white background
                    ══════════════════════════════════════ */}
                    <div style={{ background: '#fafafa', padding: '20px 18px 0' }}>

                        {/* ── Quick Earn ── */}
                        <div style={{ marginBottom: 22 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                                <span style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Epilogue, sans-serif', color: '#1a1a2e' }}>Quick Earn</span>
                                <span style={{ fontSize: 13, color: '#8F8F8F', fontFamily: 'Epilogue, sans-serif', fontWeight: 500 }}>See more</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, }}>

                                {/* Glam Lifestyle — pink */}
                                <div style={{
                                    borderRadius: 18, minHeight: 85,
                                    border: '1px solid #FCCEEE',
                                    background: '#FCE7F6',
                                    padding: '14px 14px 14px',
                                    position: 'relative', overflow: 'hidden',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                                }}>
                                    <svg viewBox="0 0 95 98" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        style={{ position: 'absolute', top: 0, left: 0, width: 105, height: 105, opacity: 0.5 }}>
                                        <path opacity="0.6" d="M57.75 -31C32.9278 12.0296 8.0722 12.0296 -16.75 -31C8.0722 11.9962 -4.3222 33.511 -54 33.511C-4.3222 33.511 8.0722 55.0258 -16.75 98.022C8.0722 54.9924 32.9278 54.9924 57.75 98.022C32.9278 55.0258 45.3222 33.511 95 33.511C45.3222 33.511 32.9278 11.9962 57.75 -31Z" fill="#FAA7E0" />
                                    </svg>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                                        <span style={{ fontSize: 13, fontWeight: 500, color: '#424242' }}>Glam Lifestyle</span>
                                        <button style={{
                                            width: 34, height: 34, borderRadius: '50%',
                                            background: '#e91e8c', border: 'none',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            cursor: 'pointer', flexShrink: 0,
                                            boxShadow: '0 4px 12px rgba(233,30,140,0.35)',
                                        }}>
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                                stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Glam Realtime — lavender */}
                                <div style={{
                                    borderRadius: 18, minHeight: 85,
                                    border: '1px solid #D9D6FE',
                                    background: '#EBE9FE',
                                    padding: '14px 14px 14px',
                                    position: 'relative', overflow: 'hidden',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                                }}>
                                    <img src="/star.svg" alt="" style={{ position: 'absolute', top: 0, left: 0, width: 105, height: 105, opacity: 0.5, color: '#BDB4FE' }} />
                                    <span style={{ fontSize: 13, fontFamily: 'Epilogue, sans-serif', fontWeight: 400, color: '#424242', position: 'relative', zIndex: 1, marginBottom: 8 }}>
                                        Glam Realtime
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ── Today's Activities — stacked cards ── */}
                        <div style={{ marginBottom: 22 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                                <span style={{ fontSize: 15, fontFamily: 'Epilogue, sans-serif', fontWeight: 700, color: '#1C2A36' }}>Today's Activities</span>
                                <span style={{ fontSize: 13, fontFamily: 'Epilogue, sans-serif', color: '#8F8F8F', fontWeight: 500 }}>See more</span>
                            </div>

                            {/* Stacked cards container — cards stack with back cards peeking above */}
                            <div style={{ position: 'relative', paddingTop: 16 }}>

                                {/* Back card (furthest behind, peeking at top) */}
                                <div style={{
                                    position: 'absolute',
                                    top: 5, left: 17, right: 12,
                                    height: 60,
                                    width: 'calc(100% - 34px)',
                                    background: '#FAFAFA',
                                    borderRadius: 19,
                                    border: '1px solid #DBDBDB',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                                    zIndex: 1,
                                }} />

                                {/* Middle card (slightly peeking above) */}
                                <div style={{
                                    position: 'absolute',
                                    top: 16, left: 10, right: 6,
                                    height: 60,
                                    width: 'calc(100% - 20px)',
                                    background: '#FAFAFA',
                                    borderRadius: 18,
                                    border: '1px solid #DBDBDB',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                                    zIndex: 2,
                                }} />

                                {/* Front card — the actual content (on top) */}
                                <div style={{
                                    position: 'relative',
                                    zIndex: 3,
                                    marginTop: 12,
                                    background: '#FAFAFA',
                                    borderRadius: 19,
                                    border: '1px solid #DBDBDB',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                                    display: 'flex', alignItems: 'center', gap: 12,
                                    padding: '14px 16px',
                                }}>
                                    {/* Icon */}
                                    <div style={{
                                        width: 40, height: 40, borderRadius: 12,
                                        background: '#fdf6e8', flexShrink: 0,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bf8820" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                            <polyline points="14 2 14 8 20 8"/>
                                            <line x1="16" y1="13" x2="8" y2="13"/>
                                            <line x1="16" y1="17" x2="8" y2="17"/>
                                            <polyline points="10 9 9 9 8 9"/>
                                        </svg>
                                    </div>
                                    <span style={{ flex: 1, fontSize: 14, fontFamily: 'Epilogue, sans-serif', fontWeight: 500, color: '#1a1a2e' }}>
                                        Review a Lifestyle Post
                                    </span>
                                    <span style={{ fontSize: 13, fontFamily: 'Epilogue, sans-serif', fontWeight: 600, color: '#22c55e' }}>
                                        + ₦ 0.50
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ── Explore Feed ── */}
                        <div style={{ marginBottom: 22 }}>
                            <div style={{ marginBottom: 12 }}>
                                <span style={{ fontSize: 15, fontFamily: 'Epilogue, sans-serif', fontWeight: 700, color: '#1C2A36' }}>Explore Feed</span>
                            </div>

                            <div style={{
                                background: 'white', borderRadius: 18,
                                overflow: 'hidden',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                            }}>
                                {/* Card header */}
                                <div style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    padding: '14px 14px 10px',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <div style={{
                                            width: 36, height: 36, borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                                            overflow: 'hidden', flexShrink: 0,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'white', fontSize: 13, fontWeight: 700,
                                        }}>
                                            <img src="/avatar-sandy.png" alt=""
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                            />
                                        </div>
                                        <span style={{ fontSize: 14, fontFamily: 'Epilogue, sans-serif', fontWeight: 500, color: '#1a1a2e' }}>Sandy James</span>
                                    </div>
                                    <span style={{
                                        fontSize: 11, color: '#1C2A36', fontWeight: 400,
                                        background: '#F5F5F5', padding: '5px 12px',
                                        borderRadius: 999, fontFamily: 'Epilogue, sans-serif', border: '1px solid #DBDBDB',
                                    }}>
                                        Glam Lifestyle
                                    </span>
                                </div>

                                {/* Feed photo */}
                                <div style={{
                                    margin: '0 12px 12px', borderRadius: 14,
                                    overflow: 'hidden', height: 140,
                                    background: 'linear-gradient(135deg, #7dd3fc, #0ea5e9)',
                                }}>
                                    <img src="/feed-sandy.jpg" alt=""
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;