import LikeScreen from '../screens/LikeScreen';
import CommentsScreen from '../screens/CommentsScreen';

const sharedRoutes = {
  Likes: {
    screen: LikeScreen
  },
  Comments: {
    screen: CommentsScreen
  }
};

const sharedOptions = {};

export { sharedOptions };

export default sharedRoutes;
