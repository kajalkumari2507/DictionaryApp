import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToHistory } from "../redux/actions";
import { Link } from "react-router-dom"; // Import Link from react-router-dom to create links

const History = () => {
  const dispatch = useDispatch();
  const searchedWords = useSelector((state) => state.searchedWords);

  //   const handleClearHistory = () => {
  //     // Dispatch the clearHistory action to clear the history
  //     dispatch(clearHistory());
  //   };

  const handleWordClick = (word) => {
    // Check if the word is already in the history
    if (!searchedWords.includes(word)) {
      // If not, add it to the history
      dispatch(addToHistory(word));
    }
  };

  // Remove duplicates from the searchedWords array
  const uniqueWords = [...new Set(searchedWords)];

  return (
    <div className="details mb-1">
      <h2 className="search">Search History</h2>
      <div>
        {uniqueWords.map((word, index) => (
          <p className="search st-1" key={index}>
            {/* Use Link to navigate to the WordDetails page */}
            <Link to={`/word/${word}`} onClick={() => handleWordClick(word)}>
              {word}
            </Link>
          </p>
        ))}
      </div>
      {/* <button onClick={handleClearHistory}>Clear History</button> */}
    </div>
  );
};

export default History;
