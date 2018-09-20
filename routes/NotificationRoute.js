import { createStackNavigator } from 'react-navigation';
import NotificationsScreen from '../screens/NotificationsScreen';
import sharedRoutes, { shredOptions } from './sharedRoutes';

const NotificationRoute = createStackNavigator(
  {
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: ({ screenProps }) => ({
        headerTitle: 'Notifications'
      })
    },
    ...sharedRoutes
  },
  {
    ...shredOptions
  }
);

export default NotificationRoute;
