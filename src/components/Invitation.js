import React from 'react';

function Invitation(props) {
  const { subject, to, name, party, friends, location, from } = props;

  return (
    <div>
      <h4>Subject:{subject}</h4>
      <p>To: {to}</p>
      <p>Hi, {name}</p>
      <p>
        I am having a {party} next Friday at my Home. Would you
        like to come? It will be fun. Lots of people from my school are coming.
        You know some of them - {friends}.
      </p>
      <p>My house is behind our school, near {location}.</p>
      <p>I hope you will come and see you soon.</p>
      <p>From, 
        {from}</p>
    </div>
  );
}

export default Invitation;
