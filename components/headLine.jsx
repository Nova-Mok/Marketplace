import React from "react";

const headLine = ({ text, classes, image, pera }) => {
  return (
    <div>
      <h2 className={classes}>
        {image && (
          <img
            src={image}
            alt="headling"
            className={"mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"}
          />
        )}

        {text}
      </h2>
      {pera && (
        <p className="dark:text-jacarta-300 mt-6">
          While we take pride in being NFT marketplace and in
          our robust feature set, we also help our creators and investors succeed with the
          following...
        </p>
      )}
    </div>
  );
};

export default headLine;
