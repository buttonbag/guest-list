export default function GuestItem({currentGuest, setCurrentGuest}) {
    // if(!currentGuest) {
    //   return <>Select a guest</>
    // }  

    return (
      <>
        <h1>Guest Details</h1>
      <div className="guest-details">
        <p className="name">{currentGuest.name}</p>
        <p className="email">{currentGuest.email}</p>
        <p className="phone">{currentGuest.phone}</p>
        <button onClick={()=>setCurrentGuest()}>back</button>
      </div>
      </>
    )
  }