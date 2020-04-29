import React from "react";
import ListSeriesParameterATM from "../utils/ListSeriesParameterATM";
import "../../../../css/esasmall.css";

const { ipcRenderer } = window.require("electron");

class ATM extends React.Component {
	state = {};
   constructor(props) {
      super(props);
      this.state = {
         infos: [
            {
               name: "Regelungs-SPS für IR",
               value: "CONTR.IR",
			   esa: "ESA.034xxxx"
            },
			{
               name: "Einspeise-Unterverteilung",
               value: "ESUV.IR",
			   esa: "ESA.034xxxx"
            },
			{
               name: "Flächenstrahler",
               value: "FLxx.IR",
			   esa: "ESA.034xxxx"
            },
			{
               name: "Strahler-Halterung",
               value: "HTxx.IR",
			   esa: "ESA.034xxxx"
            },
            {
               name: "Leistungsregler",
               value: "KLxx.IR",
			   esa: "ESA.034xxxx"
            },
			{
               name: "Spotstrahlerkasten",
               value: "KLSPOTx",
			   esa: "ESA.034xxxx"
            },
			{
               name: "Spotstrahler",
               value: "SPT.IR",
			   esa: "ESA.034xxxx"
            }		
         ]
      };  
   }

         
   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h2>ATM-Infrarot-Strahlersystem</h2>
               <img
                  src={process.env.PUBLIC_URL + "/img/ATM/IR/Infrarot_03.png"}
                  alt="logo"
                  width="100%"
               ></img>
			   <ListSeriesParameterATM infos={this.state.infos} />
            </div>
         </React.Fragment>
      );
   }
}

export default ATM;
