import React, { useEffect, useState } from "react";

const SearchBar = ({ topic, onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState(topic);

  useEffect(() => {
    setSearchTerm(topic);
  }, [topic]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    background: papayawhip;
    border: none;
    border-radius: 3px;
  `;

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <a href="/#" class="navbar-brand">
          Code Assesment
        </a>
        <Input
          value={searchTerm}
          onChange={handleChange}
          type="search"
          yeah
          placeholder="Search"
          aria-label="Search"
          data-testid="searchinput"
        />
        <Button
          onClick={() => onSearchChange(searchTerm)}
          data-testid="searchbutton"
        >
          Search
        </Button>
      </div>
    </nav>
  );
};

export default SearchBar;
