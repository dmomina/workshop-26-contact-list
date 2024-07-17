import React, {useEffect, useState} from 'react'

function SingleContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
    useEffect(() => {
        async function fetchSingleContact() {
            try {
                const res = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const json = await res.json();
                console.log(json);
                setContact(json);
            } catch (error) {
                console.error(error);
            }
        }
        fetchSingleContact();
    }, [])
  return (
    <div>
        <h1> Details for Contact</h1>
        <p>{contact?.name}</p>
        <p>{contact?.phone}</p>
        <p>{contact?.company?.name}</p>
        <button onClick={() => setSelectedContactId(null)}>Go back</button>
    </div>
  );
}

export default SingleContact