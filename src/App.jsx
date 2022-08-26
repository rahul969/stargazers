import React, { useContext } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayContent from "./components/DisplayContent";
import { GlobalContext } from "./reducer/global-context";
import ActionTypes from "./reducer/action-types";

const App = () => {
  const [state, dispatch] = useContext(GlobalContext);

  const handleTopicChange = (newTopic) => {
    dispatch({ type: ActionTypes.SET_CURRENT_TOPIC, payload: newTopic });
  };

  return (
    <div>
      <SearchBar
        topic={state.currentTopic}
        onSearchChange={handleTopicChange}
      ></SearchBar>
      <div className="jumbotron">
        <DisplayContent
          topic={state.currentTopic  }
          onSearchChange={handleTopicChange}
        ></DisplayContent>
      </div>
    </div>
  );
};

export default App;
