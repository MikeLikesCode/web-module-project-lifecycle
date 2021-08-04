import React, { Component } from "react";
import User from "./components/User";
import Follower from "./components/Follower";
import axios from "axios";
import "tailwindcss/tailwind.css";

class App extends Component {
  state = {
    userInfo: {},
    userFollowersData: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/mikelikescode").then((res) => {
      console.log(res.data);
      this.setState({
        ...this.state,
        userInfo: res.data,
      });
    });

    axios
      .get("https://api.github.com/users/mikelikescode/followers")
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          userFollowersData: res.data,
        });
      });
  }

  render() {
    return (
      <div>
        <h1 className="text-center mt-6 font-medium text-4xl">Github Cards</h1>
        <div className="flex flex-col items-center">
          <User user={this.state.userInfo} />

          {this.state.userFollowersData.map((follower) => (
            <Follower key={follower.id} user={follower.url} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
