import { createStackNavigator } from 'react-navigation';
import FeedScreen from '../screens/FeedScreen';
import sharedRoutes, { shredOptions } from './sharedRoutes';

const HomeRoute = createStackNavigator(
  {
    Home: {
      screen: FeedScreen
    },
    ...sharedRoutes
  },
  {
    ...shredOptions
  }
);

export default HomeRoute;
