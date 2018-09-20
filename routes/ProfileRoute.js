import { createStackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';
import sharedRoutes, { shredOptions } from './sharedRoutes';

const ProfileRoute = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen
    },
    ...sharedRoutes
  },
  {
    ...shredOptions
  }
);

export default ProfileRoute;
