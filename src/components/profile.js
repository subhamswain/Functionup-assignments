import React from 'react';

const ProfileCard = ({ image, designation, name, jobDescription }) => {
  const handleClick = () => {
    alert(name);
  };

  return (
    <div className="profile-card">
      <img src={image} alt={name} />
      <h2>{designation}</h2>
      <h3>{name}</h3>
      <p>{jobDescription}</p>
      <div className='button'>
      <button onClick={handleClick} 
      style={{ backgroundColor: "yellow", color: "black" }}>See more</button>
      </div>
    </div>
  );
};

export default ProfileCard;
