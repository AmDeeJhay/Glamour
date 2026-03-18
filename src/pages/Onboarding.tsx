import { useRef, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router-dom';
import 'swiper/css';
import './Onboarding.css';
import Button from '../components/Button';

const TOTAL_SLIDES = 3;

const Onboarding: React.FC = () => {
    const history = useHistory();
    const swiperRef = useRef<any>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const notifications = [
        { id: 1, title: 'Activity Completed', message: 'You earned €2 for reviewing a lifestyle post.' },
        { id: 2, title: 'New Task Available', message: 'Create a post and earn €5 reward.' },
    ];

    const handleContinue = () => {
        if (activeSlide < TOTAL_SLIDES - 1) {
            swiperRef.current?.slideNext();
        } else {
            history.push('/auth/signup');
        }
    };

    const avatars = [
        { src: '/chess-girl.png', position: { top: '10%', left: '10%' }, size: 54, dotPos: { top: 'calc(10% + 48px)', left: 'calc(10% + 20px)' } },
        { src: '/dress-guy.png', position: { top: '15%', left: '62%' }, size: 60, dotPos: { top: 'calc(15% + 56px)', left: 'calc(62% + 24px)' } },
        { src: '/smile-guy.png', position: { top: '50%', left: '5%' }, size: 62, dotPos: { top: 'calc(50% + 56px)', left: 'calc(5%  + 24px)' } },
        { src: '/benchlady.png', position: { top: '48%', left: '80%' }, size: 54, dotPos: { top: 'calc(48% + 48px)', left: 'calc(80% + 20px)' } },
    ];

    /* Dots rendered as plain divs — reactive since activeSlide is in parent scope */
    const Dots = () => (
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                <div
                    key={i}
                    style={{
                        height: 8,
                        borderRadius: 4,
                        background: activeSlide === i ? '#3F5F7A' : '#ccc',
                        width: activeSlide === i ? 24 : 8,
                        transition: 'width 0.3s ease, background 0.3s ease',
                        flexShrink: 0,
                    }}
                />
            ))}
        </div>
    );

    return (
        <IonPage>
            <IonContent fullscreen className="onboarding-content">
                <Swiper
                    speed={300}
                    allowTouchMove={false}
                    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="onboarding-swiper"
                >

                    {/* ══ SLIDE 1 ══ */}
                    <SwiperSlide>
                        <div className="slide-wrapper">
                            <div className="mosaic-grid">
                                <div className="mosaic-left-top"><img src="/fitness-lady.png" alt="" /></div>
                                <div className="mosaic-left-bottom"><img src="/coffee-guy.png" alt="" /></div>
                                <div className="mosaic-mid-cross">
                                    <img src="/onboarding-vector.svg" alt="" style={{ width: '70%', height: '70%' }} />
                                </div>
                                <div className="mosaic-mid-img"><img src="/airport-lady.png" alt="" /></div>
                                <div className="mosaic-mid-gold" />
                                <div className="mosaic-right-top"><img src="/swag-guy.png" alt="" /></div>
                                <div className="mosaic-right-bottom"><img src="/game-girl.png" alt="" /></div>
                            </div>

                            <div style={{ position: 'relative', textAlign: 'center', zIndex: 30, padding: '12px 28px 0' }}>
                                <h2 style={{ fontSize: 28, color: '#1C2A36', fontWeight: 700, margin: '0 0 10px' }}>
                                    Earn From<br />Your Daily Lifestyle
                                </h2>
                                <p style={{ color: '#555', fontSize: 14, lineHeight: '22px', margin: 0 }}>
                                    Share your lifestyle, routines, meals,<br />
                                    and everyday moments and earn on Glamour.
                                </p>
                            </div>

                            <div className="onboarding-bottom">
                                <Dots />
                                <Button className="onboarding-continue-btn" onClick={handleContinue}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* ══ SLIDE 2 ══ */}
                    <SwiperSlide>
                        <div className="slide-wrapper">
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0, height: '51%',
                                background: 'linear-gradient(to top, #faf6ef 0%, #faf6ef 40%, rgba(250,246,239,0.95) 65%, rgba(250,246,239,0.4) 90%, transparent 100%)',
                                pointerEvents: 'none', zIndex: 20,
                            }} />

                            <div style={{
                                flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                                paddingBottom: '0.5rem', paddingLeft: '2.5rem', paddingRight: '2.5rem',
                                position: 'relative', zIndex: 10, top: '7%',
                            }}>
                                <div style={{ position: 'relative', width: '300px', maxHeight: '380px' }}>
                                    <div style={{ position: 'absolute', top: '220px', left: '50%', transform: 'translateX(-50%)', zIndex: 30, width: '110%' }}>
                                        <div style={{ position: 'relative', width: '100%', height: '100px' }}>
                                            {notifications.map((item, index) => (
                                                <div key={item.id} style={{
                                                    position: 'absolute', width: '100%',
                                                    backgroundColor: '#5d5d5de1', borderRadius: 19,
                                                    padding: 10, display: 'flex', alignItems: 'center', gap: 10,
                                                    transform: `translateY(${index * 14}px) scale(${1 - index * 0.05})`,
                                                    opacity: index === 0 ? 1 : 0.45,
                                                    zIndex: notifications.length - index,
                                                }}>
                                                    <div style={{
                                                        width: 36, height: 36, background: '#3F5F7A',
                                                        borderRadius: 10, display: 'flex', alignItems: 'center',
                                                        justifyContent: 'center', flexShrink: 0,
                                                    }}>
                                                        <img src="/glamour-white.svg" alt="" style={{ width: 20, height: 20 }} />
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <h3 style={{ fontSize: 10, fontWeight: 700, color: 'white', margin: 0 }}>{item.title}</h3>
                                                        <p style={{ fontSize: 10.5, fontWeight: 300, color: 'white', lineHeight: 1.4, margin: 0 }}>{item.message}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div style={{ position: 'relative', overflow: 'hidden', background: 'white' }}>
                                        <img src="/iPhone15.svg" alt="" style={{ width: '100%', display: 'block' }} />
                                    </div>
                                </div>
                            </div>

                            <div style={{ position: 'relative', textAlign: 'center', zIndex: 30, padding: '0 28px' }}>
                                <h2 style={{ fontSize: 28, color: '#1C2A36', fontWeight: 700, margin: '0 0 10px' }}>
                                    Complete Simple<br />Activities
                                </h2>
                                <p style={{ color: '#555', fontSize: 14, lineHeight: '22px', margin: 0 }}>
                                    Create content, review posts, track fitness,<br />
                                    or translate languages to earn rewards.
                                </p>
                            </div>

                            <div className="onboarding-bottom" style={{ position: 'relative', zIndex: 30 }}>
                                <Dots />
                                <Button className="onboarding-continue-btn" onClick={handleContinue}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* ══ SLIDE 3 ══ */}
                    <SwiperSlide>
                        <div className="slide-wrapper">
                            <div style={{
                                flex: 1, position: 'relative', width: '100%',
                                overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <img src="/World-Map.svg" alt="" style={{
                                    position: 'absolute', top: '40%', left: '50%',
                                    width: '100%', transform: 'translate(-50%, -50%)', zIndex: 0,
                                }} />
                                <img src="/spiral-spin.svg" alt="" style={{
                                    position: 'absolute', top: '50%', left: '50%',
                                    width: '100%', transform: 'translate(-50%, -50%)',
                                    pointerEvents: 'none', zIndex: 1,
                                }} />
                                {avatars.map((a, i) => (
                                    <div key={i} style={{
                                        position: 'absolute', top: a.position.top, left: a.position.left,
                                        width: a.size, height: a.size, zIndex: 4,
                                        borderRadius: '50%', overflow: 'hidden',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)', background: '#ddd',
                                    }}>
                                        <img src={a.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                                    </div>
                                ))}
                                {avatars.map((a, i) => (
                                    <div key={`dot-${i}`} style={{
                                        position: 'absolute', top: a.dotPos.top, left: a.dotPos.left,
                                        width: 16, height: 16, zIndex: 5, borderRadius: '50%',
                                        background: '#D9A14A', border: '2px solid #F3E3C8',
                                        boxShadow: '0 2px 6px rgba(191,136,32,0.4)',
                                    }} />
                                ))}
                                <div style={{
                                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
                                    background: 'linear-gradient(to bottom, transparent 0%, rgba(250,246,239,0.6) 50%, #faf6ef 85%)',
                                    pointerEvents: 'none', zIndex: 6,
                                }} />
                            </div>

                            <div style={{ position: 'relative', textAlign: 'center', zIndex: 30, padding: '0 28px' }}>
                                <h2 style={{ fontSize: 25, color: '#1C2A36', fontWeight: 700, lineHeight: 1.25, margin: '0 0 10px' }}>
                                    Connect with Foreigners<br />and Earn More
                                </h2>
                                <p style={{ color: '#555', fontSize: 13, lineHeight: '20px', margin: 0 }}>
                                    Interact with European users, share experiences,<br />
                                    and participate in activities to earn.
                                </p>
                            </div>

                            <div className="onboarding-bottom">
                                <Dots />
                                <Button className="onboarding-continue-btn" onClick={handleContinue}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </IonContent>
        </IonPage>
    );
};

export default Onboarding;