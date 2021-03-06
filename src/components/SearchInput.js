import React from "react";

const SearchInput = ({ value, onChange }) => {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div>
      <input type="search" value={value} onChange={handleChange} />
    </div>
  );
};

export default SearchInput;
