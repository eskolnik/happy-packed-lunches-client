import React, { Component } from "react";
import MyStreakBlock from "./MyStreakBlock";
import { fetchStreakData, postStreakUpdate, postStreakReset } from "./queries";

class MyStreakBlockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetchingData: true,
      streak: null
    };
  }

  componentDidMount() {
    fetchStreakData()
      .then(response => {
        const { streak } = JSON.parse(response);
        this.setState({ streak, isFetchingData: false });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleClickUpdate = () => {
    postStreakUpdate()
      .then(response => {
        const { streak } = JSON.parse(response);
        this.setState({ streak });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleClickReset = () => {
    postStreakReset()
      .then(response => {
        const { streak } = JSON.parse(response);
        this.setState({ streak });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { isFetchingData, streak } = this.state;
    return isFetchingData ? (
      <div>Hang on a sec</div>
    ) : (
      <MyStreakBlock
        streak={streak}
        handleClickUpdate={this.handleClickUpdate}
        handleClickReset={this.handleClickReset}
      />
    );
  }
}

export default MyStreakBlockContainer;
