import { IonContent, IonPage, IonText } from '@ionic/react';

const Earn: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding">
                <h1>Earn</h1>
                <IonText color="medium">Start tasks and track rewards here.</IonText>
            </IonContent>
        </IonPage>
    );
};

export default Earn;
