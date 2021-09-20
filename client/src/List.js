import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditContact } from "./EditContact";
import { deleteContacts, getContacts } from "./JS/Contact/ContactSlice";
import Checkbox from '@mui/material/Checkbox';



export const List = ({ ping, setPing }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.contact.contacts);
  const [contas, setcontas] = useState([]);
  useEffect(() => {
    dispatch(getContacts());
  }, [ping]);
  const handledelete = (el) => {
    dispatch(deleteContacts(el._id));
    setPing(!ping);
  };
  return (
    <div >
      {list ? (
        list.map((el) => (
          <div className='Task'>
            <div style={{display:"flex"}}>
            <Checkbox
       checked={!el.notDone}
       onChange={()=>!el.notDone}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
            <h5 className={el.notDone&&"line"}>{el.title}</h5>
            </div>
            <div style={{display:"flex"}}>
            <button onClick={() => handledelete(el)} style={{backgroundColor:'red',color:'white'}}>Delete</button>
            <EditContact setPing={setPing} ping={ping} _id={el._id} />
          </div>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
