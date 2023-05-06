import React from "react";

import { Img } from "components";

const DashColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_image1.png"
          className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
          alt="imageOne"
        />
      </div>
    </>
  );
};

DashColumnOne.defaultProps = {};

export default DashColumnOne;
