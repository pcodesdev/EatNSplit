/* eslint-disable react/prop-types */
import React from 'react'

function Friend({ friend}) {
  // eslint-disable-next-line react/prop-types
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} Ksh {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          Your friend {friend.name} owes you Ksh {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && (
        <p >
          You and {friend.name} are even
        </p>
          )}
          <button className="button">Select</button>
    </li>
  );
}

export default Friend