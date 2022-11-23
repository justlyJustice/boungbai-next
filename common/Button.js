import React from "react";

import { Btn } from "styles/js/buttonStyles";

const Button = ({ to, title, ...otherProps }) => {
  return (
    <Btn href={to} {...otherProps}>
      {title}
    </Btn>
  );
};

export default Button;
