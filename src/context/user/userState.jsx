import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {

  
  const [Data, setData] = useState({});

 const setUserData=(msg) => {

  const{ _id,name,email,phone,date }=msg;
  setData({_id:_id, name:name , email : email,phone:phone,date:date});



 }
  return (
    <UserContext.Provider value={{setUserData,Data }}>
      {props.children}
    </UserContext.Provider>
  )

}
export default UserState;