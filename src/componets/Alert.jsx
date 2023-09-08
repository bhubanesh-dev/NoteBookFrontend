import React from "react";


export default function Alert(props) {

    const cap = (word) => {
    const small = word.toLowerCase();
    return small.charAt(0).toUpperCase() + small.slice(1);
  };
  //alert-${props.alert.type}
    return (
      <div style={{height: '50px'}} >
      {  props.alert && <div className={`alert  alert-${props.alert.type} alert-dismissible fade show `} role="alert" >
          <strong>{cap(props.alert.type)} : </strong> <bold> {props.alert.msg} </bold>
        </div>
      }
      </div>
    );
  }




