import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ username }) => (
  <div>
    <h1>Profile</h1>
    <p>Hello, {username}</p>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Profile;
