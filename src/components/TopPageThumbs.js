import React from "react";
import { Link } from "react-router-dom";

function TopPageThumbs({
  data,
  isSelectMode,
  selectedPhotos,
  enteredWord,
  searchImage,
  enteredWordHandler,
  clearSearch,
  toggleTick,
  deletePhotos
}) {
  return (
    data && (
      <div className="flex-container">
        {data.map(data => {
          return (
            <div className={`thumb-wrapper ${isSelectMode ? "swing" : ""}`} key={`div_${data.id}`}>
              <input
                className={`checkbox ${isSelectMode ? "" : "hidden"}`}
                type="checkbox"
                name={data.id}
                value={data.id}
                onChange={toggleTick}
                key={`input_${data.id}`}
              />
              <div className={isSelectMode ? "" : "back"} />
              <Link to={`/${data.id}`} key={data.id} className={isSelectMode ? "back" : ""}>
                <img
                  className={`thumb ${isSelectMode ? "back" : ""}`}
                  title={data.title}
                  src={data.display_sizes[2].uri}
                  alt={data.artist}
                  key={data.id}
                />
              </Link>
            </div>
          );
        })}
      </div>
    )
  );
}

export default TopPageThumbs;
