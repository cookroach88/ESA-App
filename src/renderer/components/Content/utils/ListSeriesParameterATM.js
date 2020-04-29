import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';


class List_Series_ParameterATM extends React.Component {
   constructor(props) {
      super(props);

      function listItem(props) {
         return <div>test</div>;
         console.log("foo");
      }

      // console.log("List-props: ", props);
   }

   render() {
      return (
         <React.Fragment>
            <table className="list_series_parameter">
               <thead>
                  <tr>
                     <th>Produktname</th>
                     <th>Produkt</th>
					 <th>Bild</th>
					 <th>ESA-Nr.</th>
                  </tr>
               </thead>
               <tbody>
                  {this.props.infos.map(info => (
                     <tr key={info["name"]}>
                        <td key={"name" + info.name}>{info.name}</td>
                        <td key={"product" + info.name}>{info.value}</td>
						<td class="center">
							<button style={{color: '#ffffff', backgroundColor: '#0074bc'}}>Bild</button>
						</td>
						<td key={"esa" + info.name}>{info.esa}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </React.Fragment>
      );
   }
}

export default List_Series_ParameterATM;
