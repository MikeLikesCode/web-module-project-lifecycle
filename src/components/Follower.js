import React, { Component } from "react";
import axios from "axios";

class Follower extends Component {
  state = {
    userInfo: {},
  };

  componentDidMount() {
    axios.get(this.props.user).then((res) => {
      this.setState({
        ...this.state,
        userInfo: res.data,
      });
    });
  }

  render() {
    return (
      <div className="w-full p-20 flex rounded justify-center items-center max-w-sm">
        <img
          className="mr-20"
          width={200}
          height={200}
          src={this.state.userInfo.avatar_url}
          alt="User"
        />
        <div>
          <h3>{this.state.userInfo.name}</h3>
          <p>{this.state.userInfo.login}</p>
          <p>Location: {this.state.userInfo.location}</p>
          <p>
            Profile:
            <a href={this.state.userInfo.html_url}>{this.state.userInfo.html_url}</a>
          </p>
          <p>Followers: {this.state.userInfo.followers}</p>
          <p>Following: {this.state.userInfo.following}</p>
          {this.state.userInfo.bio ? (
            <p>Bio: {this.state.userInfo.bio}</p>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default Follower;
