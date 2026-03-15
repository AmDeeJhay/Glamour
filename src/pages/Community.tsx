import { IonContent, IonPage, IonText } from '@ionic/react';

const Community: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding">
                <h1>Community</h1>
                <IonText color="medium">Connect and engage with other users.</IonText>
            </IonContent>
        </IonPage>
    );
};

export default Community;
