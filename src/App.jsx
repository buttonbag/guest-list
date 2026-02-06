import { useEffect, useState } from "react";
import  GuestList  from "./GuestList";
import GuestItem from "./GuestItem";
import { getGuestList } from "./apiList";

// const LIST = [
//   {
//   name: 'louie', 
//   email: 'email@email.com',
//   phone: '773-000-0001'
// },
// {
//   name: 'bob', 
//   email: 'bob@email.com',
//   phone: '773-000-1234'
// },
// {
//   name: 'mary', 
//   email: 'mary@email.com',
//   phone: '773-000-0000'
// }
// ];


export default function App() {
  // const [list] = useState(LIST);
  const [list, setList] = useState([]);
  const [currentGuest, setCurrentGuest] = useState();

  useEffect(()=>{
    const syncList = async() => {
      const data = await getGuestList();
      setList(data)
    }
    syncList();
  }, []);

  
  return (
    <>
      {!currentGuest ? (
      <GuestList list={list} setCurrentGuest={setCurrentGuest} />) :
      (<GuestItem currentGuest={currentGuest} setCurrentGuest={setCurrentGuest} />)}
    </>
  );
}
