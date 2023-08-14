import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Pooja",
        location: "Mumbai",
      },
    };
    console.log(this.props.name + "child constructor called");
  }
  async componentDidMount() {
    console.log(this.props.name + "child componentDidMount called");
    const data = await fetch("https://api.github.com/users/meshpuja");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentWillUnmount() {}

  render() {
    const { name, location } = this.state.userInfo;
    console.log(name + "child render called");
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}
export default UserClass;
