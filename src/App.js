// import ContactList from "./components/ContactList";
import ContactsList from "./contacts.json";
import { useState } from "react";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState(ContactsList.slice(0, 5));

  const randomContacts = () => {
    const randomIndex = Math.floor(Math.random() * ContactsList.length);
    const newContact = ContactsList[randomIndex];
    //if the id of the contacts is the same as the one of the contacts list do not show the contact
    if (!contacts.some((contact) => contact.id === newContact.id)) {
      const updateContact = [...contacts, newContact];
      setContacts(updateContact);
    }
  };

  const deleteContact = (id) => {
    const copyOfContacts = [...contacts];
    const filteredContacts = copyOfContacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContacts);
  };

  const sortAlphabetically = () => {
    const copyOfContacts = [...contacts];
    const sortContacts = copyOfContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortContacts);
  };

  const sortByPopularity = () => {
    const copyOfContacts = [...contacts];
    const sortContacts = copyOfContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortContacts);
  };

  return (
    <div className="App">
      <button onClick={() => randomContacts()}>New celebrities</button>
      <button onClick={() => sortAlphabetically()}>Sort alphabetically</button>
      <button onClick={() => sortByPopularity()}>Sort by popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won oscar</th>
          <th>Won emmy</th>
          <th>Actions</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr>
              <th>
                <img
                  width="100px"
                  src={contact.pictureUrl}
                  alt="contactImage"
                />
              </th>
              <th>{contact.name}</th>
              <th>{contact.popularity.toFixed(1)}</th>
              <th>{contact.wonOscar ? <p>🏆</p> : <p>Aaah Aaah!</p>}</th>
              <th>{contact.wonEmmy ? <p>🏆</p> : <p>Aaah Aaah!</p>}</th>
              <th>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
