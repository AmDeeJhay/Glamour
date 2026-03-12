import { useRef, useEffect, useState } from 'react';
import {
    IonContent,
    IonPage
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useHistory } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import './Onboarding.css';

const Onboarding: React.FC = () => {
    const history = useHistory();
    const swiperRef = useRef<any>(null);
    const [fadeIn, setFadeIn] = useState(false);
    const [autoPlayTimer, setAutoPlayTimer] = useState<NodeJS.Timeout | null>(null);
    const autoPlayDelay = 4500;

    useEffect(() => {
        // Trigger slow fade-in animation
        setTimeout(() => setFadeIn(true), 100);
    }, []);

    // Start auto-advance with debounce on swipe
    const startAutoPlay = () => {
        // Clear existing timer
        if (autoPlayTimer) {
            clearTimeout(autoPlayTimer);
        }
        
        // Set new timer to advance to next slide
        const timer = setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.slideNext();
            }
        }, autoPlayDelay);
        
        setAutoPlayTimer(timer);
    };

    // Initialize auto-play on mount
    useEffect(() => {
        startAutoPlay();
        
        return () => {
            if (autoPlayTimer) {
                clearTimeout(autoPlayTimer);
            }
        };
    }, []);

    const notifications = [
        { id: 1, title: 'Activity Completed', message: 'You earned €2 for reviewing a lifestyle post.' },
        { id: 2, title: 'New Task Available', subtitle: 'Content Creation', message: 'Create a post and earn €5 reward.' },
        // { id: 3, title: 'Daily Bonus', subtitle: 'Login Streak', message: 'Keep your 7-day streak going!' }
    ];

    const vibrate = () => {
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    };

    const handleGetStarted = () => {
        history.push('/auth/signup');
    };

    // Control each avatar independently with Tailwind classes.
    const avatars = [
        {
            src: '/chess-girl.png',
            positionClass: 'top-[10%] left-[10%]',
            containerClass: 'w-[54px] h-[54px] z-40',
            imageClass: 'object-cover',
            dotStyle: { position: 'absolute' as const, top: 'calc(9% + 54px - 6px)', left: 'calc(6% + 27px - 6px)', zIndex: 41 },
        },
        {
            src: '/dress-guy.png',
            positionClass: 'top-[12%] left-[62%]',
            containerClass: 'w-[62px] h-[62px] z-40',
            imageClass: 'object-cover',
            dotStyle: { position: 'absolute' as const, top: 'calc(11% + 62px - 6px)', left: 'calc(58% + 31px - 6px)', zIndex: 41 },
        },
        {
            src: '/smile-guy.png',
            positionClass: 'top-[50%] left-[5%]',
            containerClass: 'w-[62px] h-[62px] z-40',
            imageClass: 'object-cover',
            dotStyle: { position: 'absolute' as const, top: 'calc(49% + 62px - 6px)', left: 'calc(6% + 31px - 6px)', zIndex: 41 },
        },
        {
            src: '/benchlady.png',
            positionClass: 'top-[48%] left-[80%]',
            containerClass: 'w-[54px] h-[54px] z-40',
            imageClass: 'object-cover',
            dotStyle: { position: 'absolute' as const, top: 'calc(47% + 54px - 6px)', left: 'calc(78% + 27px - 6px)', zIndex: 41 },
        },
    ];

    return (
        <IonPage>
            <IonContent fullscreen className="onboarding-content">
                <div className={`onboarding-wrapper ${fadeIn ? 'fade-in' : ''}`}>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onTouchStart={() => {
                            if (autoPlayTimer) {
                                clearTimeout(autoPlayTimer);
                                setAutoPlayTimer(null);
                            }
                        }}
                        onTouchEnd={() => {
                            startAutoPlay();
                        }}
                        onSlideChange={() => {
                            startAutoPlay();
                        }}
                        className="onboarding-swiper"
                        speed={1000}
                    >

                    {/* ══ SLIDE 1 — Earn From Your Daily Lifestyle ══ */}
                    <SwiperSlide>
                        <div className="slide-wrapper">
                            <div className="mosaic-grid">
                                <div className="mosaic-left-top">
                                    <img src="/fitness-lady.png" alt="" />
                                </div>
                                <div className="mosaic-left-bottom">
                                    <img src="/coffee-guy.png" alt="" />
                                </div>
                                <div className="mosaic-mid-cross">
                                    <img src="/onboarding-vector.svg" alt="" style={{ width: '70%', height: '70%' }} />
                                </div>
                                <div className="mosaic-mid-img">
                                    <img src="/airport-lady.png" alt="" />
                                </div>
                                <div className="mosaic-mid-gold" />
                                <div className="mosaic-right-top">
                                    <img src="/swag-guy.png" alt="" />
                                </div>
                                <div className="mosaic-right-bottom">
                                    <img src="/game-girl.png" alt="" />
                                </div>
                            </div>

                            <div className="relative flex-start text-center flex-1 z-30 flex-col">
                                <h2 className="text-[28px] text-[#1C2A36] font-[700]">Earn From<br />Your Daily Lifestyle</h2>
                                <p className="text-[#1C2A36] font-[400] text-[14px] leading-[20px]">
                                    Share your lifestyle, routines, meals,<br />
                                    and everyday moments and earn on Glamour.
                                </p>
                            </div>

                            <div className="onboarding-bottom">
                                <button className="get-started-btn" onClick={handleGetStarted}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* ══ SLIDE 2 — Complete Simple Activities ══ */}
                    <SwiperSlide>
                        <div className="slide-wrapper">
                            {/* White gradient overlay - covers bottom of phone mockup */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '51%',
                                    background: 'linear-gradient(to top, #ffffff 0%, #fafafa 45%, rgba(255, 255, 255, 100) 80%, rgba(250, 246, 239, 0.95) 70%, rgb(255, 255, 255) 80%, rgba(250, 246, 239, 0.4) 98%, transparent 100%)',
                                    pointerEvents: 'none',
                                    zIndex: 20
                                }}
                            />
                            {/* Phone mockup area */}
                            <div className="flex-1 flex items-end justify-center !pb-2 px-10" style={{ position: 'relative', zIndex: 10, top: '7%' }}>
                                <div className="relative w-[300px] max-h-[380px]">
                                    {/* Notification Stack - positioned above phone */}
                                    <div style={{ position: 'absolute', top: '220px', left: '50%', transform: 'translateX(-50%)', zIndex: 30, width: '110%' }}>
                                        <div style={{ position: 'relative', width: '100%', height: '100px' }}>
                                            {notifications.map((item, index) => (
                                                <div
                                                    key={item.id}
                                                    onMouseEnter={vibrate}
                                                    onTouchStart={vibrate}
                                                    style={{
                                                        position: 'absolute',
                                                        width: '100%',
                                                        backgroundColor: '#5d5d5de1',
                                                        borderRadius: '19px',
                                                        padding: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px',
                                                        transform: `translateY(${index * 14}px) scale(${1 - index * 0.05})`,
                                                        opacity: index === 0 ? 6 : 0.95 - index * 0.5,
                                                        zIndex: notifications.length - index,
                                                    }}
                                                >
                                                    {/* Icon */}
                                                    <div style={{
                                                        width: '36px',
                                                        height: '36px',
                                                        background: '#3F5F7A',
                                                        borderRadius: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0
                                                    }}>
                                                        <img src="/glamour-white.svg" alt="Glamour" style={{ width: '20px', height: '20px' }} />
                                                    </div>

                                                    {/* Content */}
                                                    <div style={{ flex: 1, textAlign: 'left' }}>
                                                        <h3 style={{ fontSize: '10px', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.title}</h3>
                                                        <p style={{ fontSize: '10.5px', fontWeight: 300, color: '#ffffff', lineHeight: '2', margin: 0 }}>{item.message}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Phone frame with border and shadow */}
                                    <div className="relative overflow-hidden bg-white">
                                        {/* Phone screen with gradient background */}
                                        <img src="/iPhone15.svg" alt="Phone Screen" className="w-full block" />
                                    </div>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="relative flex-start text-center mt-[16%] flex-1 z-30 flex-col">
                                <h2 className="text-[28px] text-[#1C2A36] font-[700]">Complete Simple<br />Activities</h2>
                                <p className="text-[#1C2A36] font-[400] text-[14px] leading-[20px]">
                                    Create content, review posts, track fitness,<br />
                                    or translate languages to earn rewards.
                                </p>
                            </div>

                            <div className="onboarding-bottom" style={{ position: 'relative', zIndex: 30 }}>
                                <button className="get-started-btn" onClick={handleGetStarted}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* ══ SLIDE 3 — Get Paid Instantly ══ */}
                    <SwiperSlide>
                        <div className="slide-wrapper">

                            {/* ── Visual area ── */}
                            <div
                                className="flex-1 relative w-full overflow-hidden flex items-center justify-center"
                            >
                                {/* World map — full bleed background */}
                                <img
                                    src="/World-Map.svg" alt="" className="absolute top-50 left-50 w-full z-30"
                                />

                                {/* Spiral / concentric rings */}
                                <img
                                    src="/spiral-spin.svg" alt="" className="relative left-50 w-full pointer-none z-30"
                                />

                                {/* Avatar circles at ring positions */}
                                {avatars.map((a, i) => (
                                    <div
                                        key={i}
                                        className={`absolute rounded-full overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.15)] bg-[#ddd] ${a.positionClass} ${a.containerClass}`}
                                    >
                                        <img
                                            src={a.src}
                                            alt=""
                                            className={`w-full h-full ${a.imageClass}`}
                                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                        />
                                    </div>
                                ))}

                                {/* Gold connector dots linked to avatars */}
                                {avatars.map((a, i) => (
                                    <div
                                        key={`dot-${i}`}
                                        style={{
                                            ...a.dotStyle,
                                            width: '19px',
                                            height: '19px',
                                            borderRadius: '50%',
                                            background: '#D9A14A',
                                            border: '2px solid #F3E3C8',
                                            boxShadow: '0 2px 6px rgba(191,136,32,0.4)',
                                        }}
                                    />
                                ))}

                                {/* Bottom fade — same pattern as slide 1 mosaic */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-[51%]"
                                    style={{
                                        background: 'linear-gradient(to top, #ffffff 0%, #fafafa 45%, rgba(255, 255, 255, 100) 80%, rgba(250, 246, 239, 0.95) 70%, rgb(255, 255, 255) 80%, rgba(250, 246, 239, 0.4) 98%, transparent 100%)',
                                        pointerEvents: 'none',
                                        zIndex: 20
                                    }}
                                />
                            </div>

                            {/* Text */}
                            <div className="relative text-center z-30 px-6 pt-4">
                                <h2 className="text-[28px] text-[#1C2A36] font-[700] leading-tight mb-2">
                                    Connect with Foreigners<br />and Earn More
                                </h2>
                                <p className="text-[#555] font-[400] mb-[8%] text-[14px] leading-[18px]">
                                    Interact with European users, share experiences,<br />
                                    and participate in activities to earn.
                                </p>
                            </div>

                            <div className="onboarding-bottom">
                                <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Onboarding;