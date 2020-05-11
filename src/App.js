import React from "react";
import "./App.css";
import FormField from "./formfield/FormField";
import CoolButton from "./button/CoolButton";

import Navbar from "./navbar/Navbar";

import "bulma/css/bulma.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </div>
    );
  }
}

export default App;
