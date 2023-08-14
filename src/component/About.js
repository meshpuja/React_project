import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent componentDidMount called");
  }
  render() {
    console.log("Parent render called");
    return (
      <div className="about-us">
        <h1>About us Page</h1>
        <UserClass />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div className="about-us">
//       <h1>About us Page</h1>
//       <UserClass name={"Pooja Meshram"} location={"Mumbai"} />
//     </div>
//   );
// };
export default About;
