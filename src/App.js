import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleEmailChange(e) {
//     setEmail(e.target.value);
//   }

//   function handlePasswordChange(e) {
//     setPassword(e.target.value);
//   }

//   function handlefirstnameChange(e) {
//     setfirstname(e.target.value);
//   }

//   function handlesurnameChange(e) {
//     surname(e.target.value);
//   }

//   function handlelastnameChange(e) {
//     lastname(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     setEmail("");
//     setPassword("");
//     setfirstname("");
//     setsurname("");
//     setlastname("");

//     //(email, password, firstname, surname, lastname)
//   }

//   return (
//     <form onSubmit={(e) => handleSubmit(e)}>
//       <input
//         name="email"
//         type="email"
//         value={email}
//         onChange={(e) => handleEmailChange(e)}
//       />
//       <input
//         name="password"
//         type="password"
//         value={password}
//         onChange={(e) => handlePasswordChange(e)}
//       />
//       <input
//         name="firstname"
//         type="firstname"
//         value={this.state.password}
//         onChange={(e) => handlefirstnameChange(e)}
//         />
//         <input
//         name="surname"
//         type="surname"
//         value={surname}
//         onChange={(e) => handlesurnameChange(e)}
//         />
//         <input
//         name="lastname"
//         type="lastname"
//         value={lastname}
//         onChange={(e) => handlelastnameChange(e)}
//         />
//       <input type="submit" />
//     </form>
//   );
// }



class App extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "", firstname:"", surname:"", lastname:"" };
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handlefirstnameChange(event) {
    this.setState({ firstname: event.target.value });
  }

  handlesurnameChange(event) {
    this.setState({ surname: event.target.value });
  }

  handlelastnameChange(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ email: "", password: "" });
    //sign in user
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={(event) => this.handlemailChange(event)}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={(e) => this.handlepasswordChange(e)}
        />
         <input
        name="firstname"
        type="firstname"
        value={this.state.firstname}
        onChange={(e) => this.handlefirstnameChange(e)}
        />
        <input
        name="surname"
        type="surname"
        value={this.state.surname}
        onChange={(e) => this.handlesurnameChange(e)}
        />
        <input
        name="lastname"
        type="lastname"
        value={this.state.lastname}
        onChange={(e) => this.handlelastnameChange(e)}
        />
        <input type="submit" />
      </form>
    );
  }
}


export default App;
