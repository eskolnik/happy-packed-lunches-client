import React from "react";
import PropTypes from "prop-types";
import "./MyStreakBlock.scss";

const MyStreakBlock = props => (
  <div>
    <p>
      My Streak: {props.streak} Day{props.streak != 1 && "s"}
    </p>
    <button
      className="MyStreakBlock-updateButton"
      onClick={props.handleClickUpdate}
    >
      Update 😃
    </button>
    <button
      className="MyStreakBlock-resetButton"
      onClick={props.handleClickReset}
    >
      Reset 😢
    </button>
  </div>
);

MyStreakBlock.propTypes = {
  streak: PropTypes.number.isRequired,
  handleClickUpdate: PropTypes.func.isRequired,
  handleClickReset: PropTypes.func.isRequired
};

export default MyStreakBlock;
