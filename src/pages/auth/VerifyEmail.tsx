import { IonContent, IonPage, IonButton, IonIcon, IonText } from '@ionic/react';
import { mailOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const VerifyEmail: React.FC = () => {
  const history = useHistory();

  const handleContinue = () => {
    history.push('/home');
  };

  const handleResend = () => {
    console.log('Resend verification email');
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="max-w-[400px] mx-auto px-8 py-16 h-full flex flex-col justify-center">
          <div className="text-center mb-8">
            <IonIcon icon={mailOutline} className="text-[100px] text-primary" />
          </div>

          <div className="text-center mb-10">
            <h1 className="text-[32px] font-bold mb-2.5 text-gray-900">Verify Your Email</h1>
            <p className="text-base text-gray-500">We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.</p>
          </div>

          <div className="w-full">
            <IonButton expand="block" onClick={handleContinue} className="mt-5 mb-5 h-[50px] font-semibold" style={{ '--border-radius': '12px' }}>
              Continue
            </IonButton>

            <div className="text-center mt-5">
              <IonText className="text-sm text-gray-500">
                Didn't receive the email?{' '}
                <span onClick={handleResend} className="text-primary font-semibold cursor-pointer">Resend</span>
              </IonText>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default VerifyEmail;
