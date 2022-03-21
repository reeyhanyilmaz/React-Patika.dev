import {useState} from 'react'

function List({contacts}) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item ) => {
    return Object.keys(item).some((key) => //key: fullname ve phone_number. 
    // Some: fullname veya phone_numberdan herhangi biri filtrelenirse.
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    );
  });

  // console.log("filtered: ",  filtered);

  return (
    <div>

      <input placeholder="Filter contact" 
      value={filterText} 
      onChange={(e) => setFilterText(e.target.value)} />

      <ul className='list'>
        {filtered.map((contact, i) => ( //contacts yerine filtered map'lenince ilgili fullname ekranda görünür digerlerini göstermez.
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
            </li>
        ))}
      </ul>

      <p>
        Total contacts 
        ({filtered.length})
      </p>
    </div>
  );
}

export default List;