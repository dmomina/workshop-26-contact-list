import { useState } from 'react'
import ContactList from './components/ContactList/ContactList'
import SingleContact from './components/SingleContact/SingleContact';

import './App.css'


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <SingleContact 
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}/>
      ) : (
        <ContactList 
          setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}

export default App
