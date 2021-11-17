import { connect } from 'react-redux';
import Profile from '../Components/Profile';

const mapStateToProps = state => ({
  username: state.userName,
});

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;
