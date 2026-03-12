import { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonIcon } from '@ionic/react';
import { lockClosedOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    history.push('/auth/signin');
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="max-w-[400px] mx-auto px-8 py-16 h-full flex flex-col justify-center">
          <div className="text-center mb-10">
            <h1 className="text-[32px] font-bold mb-2.5 text-gray-900">Reset Password</h1>
            <p className="text-base text-gray-500">Create a new password</p>
          </div>

          <div className="w-full">
            <div className="relative mb-5 border border-gray-200 rounded-xl px-4 flex items-center bg-gray-50">
              <IonIcon icon={lockClosedOutline} className="text-xl text-gray-500 mr-2.5" />
              <IonInput
                type="password"
                placeholder="New Password"
                value={password}
                onIonInput={(e) => setPassword(e.detail.value!)}
                className="text-base"
              />
            </div>

            <div className="relative mb-5 border border-gray-200 rounded-xl px-4 flex items-center bg-gray-50">
              <IonIcon icon={lockClosedOutline} className="text-xl text-gray-500 mr-2.5" />
              <IonInput
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onIonInput={(e) => setConfirmPassword(e.detail.value!)}
                className="text-base"
              />
            </div>

            <IonButton expand="block" onClick={handleReset} className="mt-5 mb-5 h-[50px] font-semibold" style={{ '--border-radius': '12px' }}>
              Reset Password
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ResetPassword;
