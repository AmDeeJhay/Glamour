import { useRef, useState } from 'react';
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
    const [activeSlide, setActiveSlide] = useState(0);

    const notifications = [
        { id: 1, title: 'Activity Completed', message: 'You earned €2 for reviewing a lifestyle post.' },
        { id: 2, title: 'New Task Available', subtitle: 'Content Creation', message: 'Create a post and earn €5 reward.' },
        // { id: 3, title: 'Daily Bonus', subtitle: 'Login Streak', message: 'Keep your 7-day streak going!' }
    ];

    const handleContinue = () => {
        if (activeSlide < 2) {
            swiperRef.current?.slideNext();
            return;
        }
        history.push('/auth/signup');
    };

    // Control each avatar independently with inline coordinates and sizes.
    const avatars = [
        {
            src: '/chess-girl.png',
            position: { top: '10%', left: '10%' },
            size: 54,
            zIndex: 40,
            imageClass: 'object-cover',
            dotStyle: { position: 'absolute' as const, top: 'calc(9% + 54px - 6px)', left: 'calc(6% + 27px - 6px)', zIndex: 41 },
        },
        {
            src: '/dress-guy.png',
            position: { top: '12%', left: '62%' },
            size: 62,
            zIndex: 40,
            imageClass: 'object-cover',
            dotStyle: { position: 'absolute' as const, top: 'calc(11% + 62px - 6px)', left: 'calc(58% + 31px - 6px)', zIndex: 41 },
        },
        {
            src: '/smile-guy.png',
            position: { top: '50%', left: '5%' },
            size: 62,
            zIndex: 40,
            imageClass: 'object-cover',
            dotStyle: { position: 'absolute' as const, top: 'calc(49% + 62px - 6px)', left: 'calc(6% + 31px - 6px)', zIndex: 41 },
        },
        {
            src: '/benchlady.png',
            position: { top: '48%', left: '80%' },
            size: 54,
            zIndex: 40,
            imageClass: 'object-cover',
            dotStyle: { position: 'absolute' as const, top: 'calc(47% + 54px - 6px)', left: 'calc(78% + 27px - 6px)', zIndex: 41 },
        },
    ];

    return (
        <IonPage>
            <IonContent fullscreen className="onboarding-content">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    speed={0}
                    allowTouchMove={false}
                    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="onboarding-swiper"
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

                            <div
                                style={{
                                    position: 'relative',
                                    textAlign: 'center',
                                    flex: 1,
                                    zIndex: 30,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start'
                                }}
                            >
                                <h2 style={{ fontSize: '28px', color: '#1C2A36', fontWeight: 700, margin: 0 }}>
                                    Earn From<br />Your Daily Lifestyle
                                </h2>
                                <p style={{ color: '#1C2A36', fontWeight: 400, fontSize: '14px', lineHeight: '20px', marginTop: '10px' }}>
                                    Share your lifestyle, routines, meals,<br />
                                    and everyday moments and earn on Glamour.
                                </p>
                            </div>

                            <div className="onboarding-bottom">
                                <button className="get-started-btn" onClick={handleContinue}>
                                    Continue
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
                            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '0.5rem', paddingLeft: '2.5rem', paddingRight: '2.5rem', position: 'relative', zIndex: 10, top: '7%' }}>
                                <div style={{ position: 'relative', width: '300px', maxHeight: '380px' }}>
                                    {/* Notification Stack - positioned above phone */}
                                    <div style={{ position: 'absolute', top: '220px', left: '50%', transform: 'translateX(-50%)', zIndex: 30, width: '110%' }}>
                                        <div style={{ position: 'relative', width: '100%', height: '100px' }}>
                                            {notifications.map((item, index) => (
                                                <div
                                                    key={item.id}
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
                                    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'white' }}>
                                        {/* Phone screen with gradient background */}
                                        <img src="/iPhone15.svg" alt="Phone Screen" style={{ width: '100%', display: 'block' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Text */}
                            <div style={{ position: 'relative', textAlign: 'center', marginTop: '16%', flex: 1, zIndex: 30, display: 'flex', flexDirection: 'column' }}>
                                <h2 style={{ fontSize: '28px', color: '#1C2A36', fontWeight: 700 }}>Complete Simple<br />Activities</h2>
                                <p style={{ color: '#1C2A36', fontWeight: 400, fontSize: '14px', lineHeight: '20px' }}>
                                    Create content, review posts, track fitness,<br />
                                    or translate languages to earn rewards.
                                </p>
                            </div>

                            <div className="onboarding-bottom" style={{ position: 'relative', zIndex: 30 }}>
                                <button className="get-started-btn" onClick={handleContinue}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* ══ SLIDE 3 — Get Paid Instantly ══ */}
                    <SwiperSlide>
                        <div className="slide-wrapper">

                            {/* ── Visual area ── */}
                            <div
                                style={{ flex: 1, position: 'relative', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                {/* World map — full bleed background */}
                                <img
                                    src="/World-Map.svg" alt="" style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', transform: 'translate(-50%, -50%)', zIndex: 30 }}
                                />

                                {/* Spiral / concentric rings */}
                                <img
                                    src="/spiral-spin.svg" alt="" style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 30 }}
                                />

                                {/* Avatar circles at ring positions */}
                                {avatars.map((a, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            position: 'absolute',
                                            top: a.position.top,
                                            left: a.position.left,
                                            width: `${a.size}px`,
                                            height: `${a.size}px`,
                                            zIndex: a.zIndex,
                                            borderRadius: '50%',
                                            overflow: 'hidden',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                            backgroundColor: '#ddd'
                                        }}
                                    >
                                        <img
                                            src={a.src}
                                            alt=""
                                            style={{ width: '100%', height: '100%', objectFit: a.imageClass === 'object-cover' ? 'cover' : 'contain' }}
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
                                    style={{
                                        position: 'relative',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '51%',
                                        background: 'linear-gradient(to top, #ffffff 0%, #fafafa 45%, rgba(255, 255, 255, 100) 80%, rgba(250, 246, 239, 0.95) 70%, rgb(255, 255, 255) 80%, rgba(250, 246, 239, 0.4) 98%, transparent 100%)',
                                        pointerEvents: 'none',
                                        zIndex: 20
                                    }}
                                />
                            </div>

                            {/* Text */}
                            <div style={{ position: 'relative', textAlign: 'center', zIndex: 30, paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1rem' }}>
                                <h2 style={{ fontSize: '25px', color: '#1C2A36', fontWeight: 700, lineHeight: '1.25', marginBottom: '0.5rem' }}>
                                    Connect with Foreigners<br />and Earn More
                                </h2>
                                <p style={{ color: '#555', fontWeight: 400, marginBottom: '8%', fontSize: '13px', lineHeight: '18px' }}>
                                    Interact with European users, share experiences,<br />
                                    and participate in activities to earn.
                                </p>
                            </div>

                            <div className="onboarding-bottom">
                                <button className="get-started-btn" onClick={handleContinue}>Continue</button>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </IonContent>
        </IonPage>
    );
};

export default Onboarding;