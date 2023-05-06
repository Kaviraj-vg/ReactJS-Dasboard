import React from "react";

import { Img } from "components";

const DashboardColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="defaultNoData.png"
          className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
          alt="imageOne"
        />
      </div>
    </>
  );
};

DashboardColumnOne.defaultProps = {};

export default DashboardColumnOne;
