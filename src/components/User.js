import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div className="w-full p-20 flex rounded justify-center items-center max-w-sm">
        <img
          className="mr-20"
          width={200}
          height={200}
          src={this.props.user.avatar_url}
          alt="User"
        />
        <div>
          <h3>{this.props.user.name}</h3>
          <p>{this.props.user.login}</p>
          <p>Location: {this.props.user.location}</p>
          <p>
            Profile:
            <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
          </p>
          <p>Followers: {this.props.user.followers}</p>
          <p>Following: {this.props.user.following}</p>
          {this.props.user.bio ? (
            <p>Bio: {this.props.user.bio}</p>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default User;
