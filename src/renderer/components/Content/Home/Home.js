import React from "react";
const { ipcRenderer } = window.require("electron");

class Home extends React.Component {
   state = {};
   constructor(props) {
      super(props);
      console.log("Elektrant-props", props);
      console.log("Elektrant-state", this.state);
      };
   
   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h1>Home</h1>
            </div>
         </React.Fragment>
      );
   }
}

export default Home;