import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "./JS/Contact/ContactSlice";

export const AddContact = ({ ping, setPing }) => {
  const [contact, setcontact] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  return (
    
      <div className='Addtask'>
      
      <input type="text" placeholder="Add new todo..." onChange={(e) => setcontact({ ...contact, title: e.target.value })} />
      <button
         onClick={() => {
          dispatch(addContacts(contact));
          setPing(!ping);
        }}>
        Add 
      </button>
      {/* <button onClick={toggle}  style={{backgroundColor:'green'}}>{filter?"Done":"All"}</button> */}
    </div>
    
  );
};
