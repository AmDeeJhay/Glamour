import { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Splash.css';

const Splash: React.FC = () => {
    const history = useHistory();
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 6500);

        const navTimer = setTimeout(() => {
            history.replace('/onboarding');
        }, 7000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(navTimer);
        };
    }, [history]);

    return (
        <IonPage>
            <IonContent fullscreen className="splash-content">
                <div className={`splash-container ${fadeOut ? 'splash-fade-out' : ''}`}>
                    <div className="logo-container">
                        <img src="/Glamourlogo.svg" alt="Glamour Logo" className="logo" />
                        <h1 className="app-name">Glamour</h1>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Splash;