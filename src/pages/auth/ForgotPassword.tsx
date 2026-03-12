import { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonIcon, IonText } from '@ionic/react';
import { mailOutline, arrowBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    history.push('/auth/reset-password');
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="max-w-[400px] mx-auto px-8 py-16 h-full flex flex-col justify-center">
          <IonIcon 
            icon={arrowBackOutline} 
            className="text-[28px] cursor-pointer text-gray-900 mb-5" 
            onClick={() => history.goBack()}
          />

          <div className="text-center mb-10">
            <h1 className="text-[32px] font-bold mb-2.5 text-gray-900">Forgot Password</h1>
            <p className="text-base text-gray-500">Enter your email to reset your password</p>
          </div>

          <div className="w-full">
            <div className="relative mb-5 border border-gray-200 rounded-xl px-4 flex items-center bg-gray-50">
              <IonIcon icon={mailOutline} className="text-xl text-gray-500 mr-2.5" />
              <IonInput
                type="email"
                placeholder="Email"
                value={email}
                onIonInput={(e) => setEmail(e.detail.value!)}
                className="text-base"
              />
            </div>

            <IonButton expand="block" onClick={handleSubmit} className="mt-5 mb-5 h-[50px] font-semibold" style={{ '--border-radius': '12px' }}>
              Send Reset Link
            </IonButton>

            <div className="text-center mt-5">
              <IonText className="text-sm text-gray-500">
                Remember your password?{' '}
                <span onClick={() => history.push('/auth/signin')} className="text-primary font-semibold cursor-pointer">Sign In</span>
              </IonText>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
