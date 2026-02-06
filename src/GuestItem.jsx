export default function GuestItem({currentGuest, setCurrentGuest}) {
    // if(!currentGuest) {
    //   return <>Select a guest</>
    // }  

    return (
      <div>
        <p>{currentGuest.name}</p>
        <p>{currentGuest.email}</p>
        <p>{currentGuest.phone}</p>
        <button onClick={()=>setCurrentGuest()}>back</button>
      </div>
    )
  }