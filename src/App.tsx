import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import VerifyEmail from './pages/auth/VerifyEmail';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Tailwind CSS - imported AFTER Ionic so utilities can override */
import './index.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Promo from './pages/auth/Promo';
import Tabs from './Tabs';

setupIonicReact({
  animated: true,
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet animated={true}>
        <Route exact path="/splash">
          <Splash />
        </Route>
        <Route exact path="/onboarding">
          <Onboarding />
        </Route>
        <Route exact path="/auth/signup">
          <SignUp />
        </Route>
        <Route exact path="/auth/signin">
          <SignIn />
        </Route>
        <Route exact path="/auth/forgot-password">
          <ForgotPassword />
        </Route>
        <Route exact path="/auth/reset-password">
          <ResetPassword />
        </Route>
        <Route exact path="/auth/verify-email">
          <VerifyEmail />
        </Route>
        <Route exact path="/auth/promo">
          <Promo />
        </Route>
        <Route exact path="/auth/Promo">
          <Promo />
        </Route>
        <Route path="/tabs">
          <Tabs />
        </Route>
        <Route exact path="/home">
          <Redirect to="/tabs/home" />
        </Route>
        <Route exact path="/">
          <Redirect to="/splash" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
