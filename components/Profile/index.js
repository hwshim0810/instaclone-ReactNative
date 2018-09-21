import { connect } from 'react-redux';
import { actionCreators as userActions } from '../../redux/modules/user';
import Container from './container';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logOut: () => {
      dispatch(userActions.logout());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
