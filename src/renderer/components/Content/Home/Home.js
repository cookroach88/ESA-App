import React from "react";
const { ipcRenderer } = window.require("electron");

class Home extends React.Component {
  
   
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