import React from "react";
import PropTypes from 'prop-types';

const MyStreakBlock = props => (
  <div>
    <p>My Streak: {props.streak} Days</p>
    <button onClick={props.handleClickUpdate}>Update</button>
    <button onClick={props.handleClickReset}>Reset</button>
  </div>
);

MyStreakBlock.propTypes = {
  streak: PropTypes.number.isRequired,
  handleClickUpdate: PropTypes.func.isRequired,
  handleClickReset: PropTypes.func.isRequired,
}

export default MyStreakBlock;
