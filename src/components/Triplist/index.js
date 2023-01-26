import React, { useEffect, useState } from 'react'

export default function Index() {

  let [trips, setTrips ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/trips')
    .then(res => res.json())
    .then(data => {
      setTrips(data);
    })
  },[]);

  console.log(trips)

  return (
    <div>
      <h1>Ready to go ?</h1>

      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.name}</h3>
            <p>price - {trip.price} mmk</p>
          </li>
        ))}
        
      </ul>
    </div>
  )
}
