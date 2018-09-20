import { createStackNavigator } from 'react-navigation';
import TabsNavigation from './TabsNavigation';
import TakePhotoScreen from '../screens/TakePhotoScreen';

const RootNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigation,
      navigationOptions: {
        header: null
      }
    },
    TakePhoto: {
      screen: TakePhotoScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    mode: 'modal'
  }
);

export default RootNavigation;
