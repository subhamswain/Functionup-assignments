import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [states, setStates] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          'http://cdn-api.co-vin.in/api/v2/admin/location/states'
        );
        setStates(response.data.states);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    filterStates(event.target.value);
  };

  const filterStates = (searchValue) => {
    const filtered = states.filter((state) =>
      state.state_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredStates(filtered);
  };

  const handleStateSelect = (stateName) => {
    setSearchTerm(stateName);
    setFilteredStates([]);
  };

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search states..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="search-results">
        {filteredStates.map((state) => (
          <div
            key={state.state_id}
            onClick={() => handleStateSelect(state.state_name)}
          >
            {state.state_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
