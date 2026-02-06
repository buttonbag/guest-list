export default function GuestList({list, setCurrentGuest}) {

    return (
      <>
        <h1>Guestlist</h1>
        <table>
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