import { IonContent, IonPage } from '@ionic/react';

const activities = [
    { icon: 'clipboard', label: 'Review a Lifestyle Post', earn: '+ ₦ 0.50', color: '#bf8820', bg: '#fdf6e8' },
    { icon: 'edit',      label: 'Create a Lifestyle Post',  earn: '+ ₦ 2.00', color: '#3d6a9e', bg: '#edf3fb' },
];

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen style={{ '--background': '#f5ede0' } as any}>
                <div style={{
                    background: '#f5ede0',
                    minHeight: '100%',
                    paddingBottom: '100px',
                    fontFamily: "'DM Sans', sans-serif",
                }}>

                    {/* ── Header ── */}
                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '56px 20px 16px',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            {/* Avatar */}
                            <div style={{
                                width: 44, height: 44, borderRadius: '50%',
                                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'white', fontWeight: 700, fontSize: 18, flexShrink: 0,
                                overflow: 'hidden',
                            }}>
                                <img src="/avatar-nini.png" alt="Nini"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                            </div>
                            <span style={{ fontSize: 17, fontWeight: 600, color: '#1a1a2e' }}>
                                Hello Nini👋
                            </span>
                        </div>

                        {/* Bell */}
                        <button style={{
                            width: 40, height: 40, borderRadius: '50%',
                            background: 'rgba(255,255,255,0.8)', border: 'none',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="#555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    </div>

                    {/* ── Balance Card ── */}
                    <div style={{
                        margin: '0 20px 24px',
                        borderRadius: 20,
                        background: '#1a2235',
                        overflow: 'hidden',
                        position: 'relative',
                    }}>
                        {/* Mesh texture */}
                        <div style={{
                            position: 'absolute', inset: 0, pointerEvents: 'none',
                            backgroundImage: [
                                'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 14px)',
                                'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 14px)',
                            ].join(', '),
                        }} />
                        <div style={{ position: 'relative', zIndex: 1, padding: '20px 22px 22px' }}>
                            <p style={{ fontSize: 12, color: '#8a9ab5', margin: '0 0 6px', fontWeight: 500 }}>
                                Available Balance
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: 34, fontWeight: 700, color: 'white', letterSpacing: '-0.5px' }}>
                                    ₦100,000
                                </span>
                                <button style={{
                                    background: 'white', color: '#1a2235',
                                    border: 'none', borderRadius: 999,
                                    padding: '10px 22px', fontSize: 14, fontWeight: 600,
                                    cursor: 'pointer',
                                }}>
                                    Withdraw
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Quick Earn ── */}
                    <div style={{ padding: '0 20px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                            <span style={{ fontSize: 16, fontWeight: 700, color: '#1a1a2e' }}>Quick Earn</span>
                            <span style={{ fontSize: 13, color: '#bf8820', fontWeight: 500 }}>See more</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

                            {/* Glam Lifestyle */}
                            <div style={{
                                borderRadius: 18, minHeight: 105,
                                background: 'linear-gradient(145deg, #fce4ec, #f8bbd0)',
                                padding: 16, position: 'relative', overflow: 'hidden',
                                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                            }}>
                                <div style={{
                                    position: 'absolute', top: -8, right: -8,
                                    width: 60, height: 60, borderRadius: '50%',
                                    background: 'rgba(236,64,122,0.25)',
                                }} />
                                <div style={{
                                    position: 'absolute', top: 16, right: 16,
                                    width: 36, height: 36, borderRadius: '50%',
                                    background: 'rgba(236,64,122,0.15)',
                                }} />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                                    <span style={{ fontSize: 13, fontWeight: 600, color: '#4a1030' }}>Glam Lifestyle</span>
                                    <button style={{
                                        width: 34, height: 34, borderRadius: '50%',
                                        background: '#e91e8c', border: 'none',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        cursor: 'pointer', flexShrink: 0,
                                    }}>
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                            stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Glam Realtime */}
                            <div style={{
                                borderRadius: 18, minHeight: 105,
                                background: 'linear-gradient(145deg, #ede7f6, #d1c4e9)',
                                padding: 16, position: 'relative', overflow: 'hidden',
                                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                            }}>
                                <div style={{
                                    position: 'absolute', top: -8, right: -8,
                                    width: 60, height: 60, borderRadius: '50%',
                                    background: 'rgba(103,58,183,0.18)',
                                }} />
                                <div style={{
                                    position: 'absolute', top: 16, right: 16,
                                    width: 36, height: 36, borderRadius: '50%',
                                    background: 'rgba(103,58,183,0.12)',
                                }} />
                                <span style={{ fontSize: 13, fontWeight: 600, color: '#2a1050', position: 'relative', zIndex: 1 }}>
                                    Glam Realtime
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ── Today's Activities ── */}
                    <div style={{ padding: '0 20px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                            <span style={{ fontSize: 16, fontWeight: 700, color: '#1a1a2e' }}>Today's Activities</span>
                            <span style={{ fontSize: 13, color: '#bf8820', fontWeight: 500 }}>See more</span>
                        </div>
                        <div style={{
                            background: 'white', borderRadius: 18,
                            overflow: 'hidden',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                        }}>
                            {activities.map((a, i) => (
                                <div key={a.label} style={{
                                    display: 'flex', alignItems: 'center', gap: 12,
                                    padding: '14px 16px',
                                    borderBottom: i < activities.length - 1 ? '1px solid #f5f5f5' : 'none',
                                }}>
                                    <div style={{
                                        width: 40, height: 40, borderRadius: 12,
                                        background: a.bg, flexShrink: 0,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        {a.icon === 'clipboard' ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                stroke={a.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="9" y="2" width="6" height="4" rx="1" />
                                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                                <line x1="9" y1="16" x2="13" y2="16" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                stroke={a.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 20h9" />
                                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                            </svg>
                                        )}
                                    </div>
                                    <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: '#1a1a2e' }}>
                                        {a.label}
                                    </span>
                                    <span style={{ fontSize: 13, fontWeight: 600, color: '#22c55e' }}>
                                        {a.earn}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Explore Feed ── */}
                    <div style={{ padding: '0 20px' }}>
                        <div style={{ marginBottom: 12 }}>
                            <span style={{ fontSize: 16, fontWeight: 700, color: '#1a1a2e' }}>Explore Feed</span>
                        </div>

                        {/* Feed card */}
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
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white', fontSize: 13, fontWeight: 700, flexShrink: 0,
                                        overflow: 'hidden',
                                    }}>
                                        <img src="/avatar-sandy.png" alt="Sandy"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                        />
                                    </div>
                                    <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1a2e' }}>Sandy James</span>
                                </div>
                                <span style={{
                                    fontSize: 12, color: '#bf8820', fontWeight: 500,
                                    background: '#fdf6e8', padding: '4px 12px',
                                    borderRadius: 999, border: '1px solid #f0e0b8',
                                }}>
                                    Glam Lifestyle
                                </span>
                            </div>

                            {/* Feed image */}
                            <div style={{
                                margin: '0 12px 12px',
                                borderRadius: 14, overflow: 'hidden',
                                height: 140,
                                background: 'linear-gradient(135deg, #7dd3fc, #38bdf8)',
                            }}>
                                <img src="/feed-sandy.jpg" alt="Feed"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;