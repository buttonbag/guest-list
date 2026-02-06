export default function GuestList({list, setCurrentGuest}) {

    return (
      <>
        <h1>Guestlist</h1>
        <table>

            <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
            </tr>
            </thead>

          {list.map( (item) => (
            <tr key={item.name} onClick={()=> setCurrentGuest(item) }>
              <td>
                {item.name}
              </td>
              <td>
                {item.email}
              </td>
              <td>
                {item.phone}
              </td>
            </tr>
          ) )}
        </table>
      </>
    )
  }