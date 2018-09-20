import { createStackNavigator } from 'react-navigation';
import NotificationsScreen from '../screens/NotificationsScreen';
import sharedRoutes, { shredOptions } from './sharedRoutes';

const NotificationRoute = createStackNavigator(
  {
    Notifications: {
      screen: NotificationsScreen
    },
    ...sharedRoutes
  },
  {
    ...shredOptions
  }
);

export default NotificationRoute;
