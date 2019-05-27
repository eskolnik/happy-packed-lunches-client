import React from "react";
import PropTypes from 'prop-types';

const MyStreakBlock = props => (
  <div>
    <p>My Streak: {props.streak} Days</p>
    <button onClick={props.handleClickUpdate}>Update</button>
    <button onClick={props.handleClickReset}>Reset</button>
  </div>
);

export default MyStreakBlock;
