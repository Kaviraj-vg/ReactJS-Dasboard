import React from "react";

import { Text, Img } from "components";

const DashboardNavigation = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="flex flex-col items-center justify-start ml-[50px] mr-[77px] my-[58px] w-[55%]">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="font-montserrat text-left text-white_A700 w-auto"
              as="h2"
              variant="h2"
            >
              {props?.board}
            </Text>
            <div className="flex flex-row gap-5 items-start justify-start mt-[59px] w-[93%] md:w-full">
              <Img
                src="defaultNoData.png"
                className="h-[18px] mt-0.5 w-[18px]"
                alt="clock"
              />
              <Text
                className="font-bold font-montserrat text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                {props?.dashboard}
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-center justify-start mt-[39px] w-full">
              <Img src="defaultNoData.png" className="h-5 w-auto" alt="offer" />
              <Text
                className="font-montserrat font-normal not-italic text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                {props?.transactions}
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-start justify-start mt-10 w-[86%] md:w-full">
              <Img
                src="defaultNoData.png"
                className="h-[18px] mt-0.5 w-[18px]"
                alt="calendar"
              />
              <Text
                className="font-montserrat font-normal not-italic text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                {props?.schedules}
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-center justify-start mt-10 w-[58%] md:w-full">
              <Img
                src="defaultNoData.png"
                className="h-[18px] w-[18px]"
                alt="share"
              />
              <Text
                className="font-montserrat font-normal not-italic text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                {props?.users}
              </Text>
            </div>
            <div className="flex flex-row gap-[21px] items-start justify-start mt-[41px] w-[74%] md:w-full">
              <Img
                src="defaultNoData.png"
                className="h-[18px] w-[17px]"
                alt="settings"
              />
              <Text
                className="font-montserrat font-normal not-italic text-left text-white_A700 w-auto"
                as="h3"
                variant="h3"
              >
                {props?.settingsOne}
              </Text>
            </div>
            <Text
              className="font-montserrat mt-[396px] not-italic text-left text-white_A700 w-auto"
              as="h5"
              variant="h5"
            >
              {props?.help}
            </Text>
            <Text
              className="font-montserrat mt-[17px] not-italic text-left text-white_A700 w-auto"
              as="h5"
              variant="h5"
            >
              {props?.contactus}
            </Text>
          </div>
        </div>
      </aside>
    </>
  );
};

DashboardNavigation.defaultProps = {
  board: "Board.",
  dashboard: "Dashboard",
  transactions: "Transactions",
  schedules: "Schedules",
  users: "Users",
  settingsOne: "Settings",
  help: "Help",
  contactus: "Contact Us",
};

export default DashboardNavigation;
