import { useState, useEffect } from 'react'

import List from './List'
import Form from './Form'
import "./styles.css"

function Contact() {

  const [contacts, setContacts] = useState([{
    fullname: "Serkan",
    phone_number: "12345"
  }, {
    fullname: "Mehmet",
    phone_number: "94965"
  }, {
    fullname: "Ayşe",
    phone_number: "65648"
  }]);

  useEffect(() => {

    console.log(contacts);

  }, [contacts])

  return (
    <div id="container" >
      <h1>Contacts</h1>
      <List contacts={contacts}></List>
      <Form addContact={setContacts} contacts={contacts} ></Form>
    </div>
  )
}

export default Contact
