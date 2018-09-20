import { createStackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';
import sharedRoutes, { shredOptions } from './sharedRoutes';

const SearchRoute = createStackNavigator(
  {
    Search: {
      screen: SearchScreen
    },
    ...sharedRoutes
  },
  {
    ...shredOptions
  }
);

export default SearchRoute;
