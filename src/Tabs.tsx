import { IonRouterOutlet, IonTabs } from '@ionic/react';
import { Redirect, Route, useLocation, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import Earn from './pages/Earn';
import Community from './pages/Community';
import Profile from './pages/Profile';

/* ── SVG icons ── */
const HomeIcon = ({ active }: { active: boolean }) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke={active ? 'white' : '#666'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
    </svg>
);

const EarnIcon = ({ active }: { active: boolean }) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke={active ? 'white' : '#666'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 10v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
    </svg>
);

const CommunityIcon = ({ active }: { active: boolean }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke={active ? 'white' : '#666'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <path d="M3 20c0-3.31 2.69-6 6-6s6 2.69 6 6" />
        <circle cx="17" cy="7" r="2.5" />
        <path d="M21 20c0-2.76-1.79-5.1-4.28-5.79" />
    </svg>
);

const ProfileIcon = ({ active }: { active: boolean }) => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke={active ? 'white' : '#666'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <circle cx="12" cy="12" r="10" />
    </svg>
);

const tabs = [
    { key: 'home',      path: '/tabs/home',      label: 'Home',      Icon: HomeIcon },
    { key: 'earn',      path: '/tabs/earn',       label: 'Earn',      Icon: EarnIcon },
    { key: 'community', path: '/tabs/community',  label: 'Community', Icon: CommunityIcon },
    { key: 'profile',   path: '/tabs/profile',    label: 'Profile',   Icon: ProfileIcon },
];

const CustomTabBar: React.FC = () => {
    const location = useLocation();
    const history = useHistory();

    const active = tabs.find(t => location.pathname.startsWith(t.path))?.key ?? 'home';

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            padding: '0 16px calc(env(safe-area-inset-bottom) + 12px)',
            background: 'transparent',
            pointerEvents: 'none',
        }}>
            {/* Pill container */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: '#c8dff0',
                borderRadius: 999,
                padding: '6px 6px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)',
                pointerEvents: 'all',
                width: '100%',
                maxWidth: 420,
            }}>
                {tabs.map(({ key, path, label, Icon }) => {
                    const isActive = active === key;
                    return (
                        <button
                            key={key}
                            onClick={() => history.push(path)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: isActive ? 8 : 0,
                                flex: isActive ? '1 1 auto' : '0 0 auto',
                                width: isActive ? 'auto' : 56,
                                height: 56,
                                borderRadius: 999,
                                border: 'none',
                                cursor: 'pointer',
                                padding: isActive ? '0 20px' : 0,
                                background: isActive
                                    ? 'linear-gradient(135deg, #d4a030 0%, #c8922a 100%)'
                                    : 'white',
                                boxShadow: isActive
                                    ? '0 4px 16px rgba(200,146,42,0.40)'
                                    : '0 2px 8px rgba(0,0,0,0.08)',
                                transition: 'all 0.25s ease',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <Icon active={isActive} />
                            {isActive && (
                                <span style={{
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: 16,
                                    letterSpacing: '0.1px',
                                }}>
                                    {label}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const Tabs: React.FC = () => {
    return (
        <>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/tabs/home" component={Home} />
                    <Route exact path="/tabs/earn" component={Earn} />
                    <Route exact path="/tabs/community" component={Community} />
                    <Route exact path="/tabs/profile" component={Profile} />
                    <Route exact path="/tabs">
                        <Redirect to="/tabs/home" />
                    </Route>
                </IonRouterOutlet>

                {/* Empty Ionic tab bar — hidden, just for routing */}
                <div slot="bottom" style={{ display: 'none' }} />
            </IonTabs>

            {/* Custom tab bar rendered outside IonTabs */}
            <CustomTabBar />
        </>
    );
};

export default Tabs;