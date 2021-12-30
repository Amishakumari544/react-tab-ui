import React from 'react';
import { render } from "react-dom";
import { Tabs, Tab } from "./lib";

const App = () => (
  <div>
    <Tabs  borderColor="#E70074">
      <Tab title="first tab">holaa 👋 this is a first tab</Tab>
      <Tab title="second tab" active="true">This is the second tab 🙋‍♀️!!!</Tab>
      <Tab title="third tab">Also 🎈 this is the third tab that going to be displayed! ha ha!!</Tab>
    </Tabs>
  </div>
);

render(<App />, document.getElementById("root"));