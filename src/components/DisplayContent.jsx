import React from "react";
import SearchResult from "./SearchResults";

const DisplayContent = ({ topic, onSearchChange }) => {
  return (
    <>
      <h3 className="display-4">
        TOPIC: <span data-testid="badgeOnSelect" className="badge badge-primary">{topic}</span>
      </h3>
      <SearchResult
        key={topic}
        searchTerm={topic}
        onChange={onSearchChange}
      ></SearchResult>
    </>
  );
};

export default DisplayContent;
