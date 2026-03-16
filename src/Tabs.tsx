import { IonRouterOutlet, IonTabs } from '@ionic/react';
import { Redirect, Route, useLocation, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import Earn from './pages/Earn';
import Connect from './pages/Connect';
import Profile from './pages/Profile';
import { HomeIcon, EarnIcon, PeopleIcon, ProfileIcon } from './components/icons';

const tabs = [
    { key: 'home',      path: '/tabs/home',      label: 'Home',      Icon: HomeIcon },
    { key: 'earn',      path: '/tabs/earn',       label: 'Earn',      Icon: EarnIcon },
    { key: 'connect', path: '/tabs/connect',  label: 'Connect', Icon: PeopleIcon },
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
            left: -16,
            right: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            padding: '0 16px calc(env(safe-area-inset-bottom) + 20px)',
            background: 'transparent',
            pointerEvents: 'none',
        }}>
            {/* Pill container with glassmorphism */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 999,
                padding: '6px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                pointerEvents: 'all',
            }}>
                {tabs.map(({ key, path, label, Icon }) => {
                    const isActive = active === key;
                    const iconColor = isActive ? 'white' : '#666';
                    return (
                        <button
                            key={key}
                            onClick={() => history.push(path)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: isActive ? 6 : 0,
                                flex: isActive ? '1 1 auto' : '0 0 auto',
                                width: isActive ? 'auto' : 48,
                                height: 48,
                                borderRadius: 999,
                                border: 'none',
                                cursor: 'pointer',
                                padding: isActive ? '0 16px' : 0,
                                background: isActive
                                    ? 'linear-gradient(135deg, #d4a030 0%, #c8922a 100%)'
                                    : 'rgba(255, 255, 255, 0.8)',
                                boxShadow: isActive
                                    ? '0 4px 16px rgba(200,146,42,0.40)'
                                    : '0 2px 8px rgba(0,0,0,0.08)',
                                transition: 'all 0.25s ease',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {key === 'earn' || key === 'connect' ? (
                                <Icon 
                                    width="22px" 
                                    height="22px" 
                                    fill={iconColor}
                                />
                            ) : (
                                <Icon 
                                    width="22px" 
                                    height="22px" 
                                    stroke={iconColor}
                                />
                            )}
                            {isActive && (
                                <span style={{
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: 14,
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
                    <Route exact path="/tabs/connect" component={Connect} />
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