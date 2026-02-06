import { useState } from "react";
import  GuestList  from "./GuestList";
import GuestItem from "./GuestItem";

const LIST = [
{
  name: 'louie', 
  email: 'email@email.com',
  phone: '773-000-0001'
},
{
  name: 'bob', 
  email: 'bob@email.com',
  phone: '773-000-1234'
},
{
  name: 'mary', 
  email: 'mary@email.com',
  phone: '773-000-0000'
}
];

export default function App() {
  const [list] = useState(LIST);
  const [currentGuest, setCurrentGuest] = useState();

  // const [view, setView] = useState(false);

  // const currentView = () => {
  //   (!view) ? setView(true) : setView(false);
  // }
  

  return (
    <>
      {!currentGuest ? (
      <GuestList list={list} setCurrentGuest={setCurrentGuest} />) :
      (<GuestItem currentGuest={currentGuest} setCurrentGuest={setCurrentGuest} />)}
    </>
  );
}
