import React from "react";

import "bulma/css/bulma.css";

const CoolButton = (props) => {
  return (
    <div>
      <button className={props.is - primary}>{props.children}</button>
    </div>
  );
};

export default CoolButton;
