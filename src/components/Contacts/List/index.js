import { useState } from 'react'

function List({ contacts }) {

  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  })


  console.log("filtered", filtered)
  return (
    <div>

      <input placeholder='Filter Contacts' value={filterText} onChange={(e) => setFilterText(e.target.value)} />


      <ul className='list'>
        {
          filtered.map((filtered, i) => <li key={i}>
            <span>{filtered.fullname}</span>
            <span>{filtered.phone_number}</span>
          </li>)
        }
      </ul>

        <p>Total contacts ({filtered.length})</p>
    </div>
  )
}

export default List
