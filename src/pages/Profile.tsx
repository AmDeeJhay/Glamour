import { IonContent, IonPage, IonText } from '@ionic/react';

const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding">
                <h1>Profile</h1>
                <IonText color="medium">Manage your account and preferences.</IonText>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
