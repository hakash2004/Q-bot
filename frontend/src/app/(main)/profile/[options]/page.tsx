import Attendance from "../../../../components/profile/attendance";
import Personal from "../../../../components/profile/personal";
import Records from "../../../../components/profile/records";
import { log } from "console";
import { notFound } from "next/navigation";
import React, { JSX } from "react";

type ProfileBlockListType = {
  [key: string]: JSX.Element;
};

export default function RenderComponentPage({ params }: any) {
  const PROFILE = {
    PERSONAL: "personal",
    ATTENDANCE: "attendance",
    RECORDS: "records",
    FEES: "fees",
    ASSESSMENT: "assesment",
    // ACHIEVEMENTS: "achivements",
  };
  //   log(params.options);
  function renderComponent(endpoint: string): JSX.Element {
    const profileBlockList: ProfileBlockListType = {
      [PROFILE.PERSONAL]: <Personal />,
      [PROFILE.ATTENDANCE]: <Attendance />,
      [PROFILE.RECORDS]: <Records />,
      [PROFILE.FEES]: <h1>Fees</h1>,
      [PROFILE.ASSESSMENT]: <h1>Assessment</h1>,
      // [PROFILE.ACHIEVEMENTS]: <h1>Achievements</h1>,
    };
    return profileBlockList[endpoint] || <h1>Not Found</h1>;
  }
  return (
  <>
  <div className="profileBlock-container" style={{width:"100%",height:"100%",position:"relative"}} >
    {renderComponent(params.options)}
  </div>
  </>
  );
}

// const page = ({params} : any) => {
//   log(params.options);

//   function renderComponents(endpoint:string):JSX.Element{

//     const blockList:profileBlockListType = {
//         'personal':<h1>Hello wolrd: {endpoint}</h1>,
//         'attendace':<h1>Attendance</h1>,
//       }

//       return blockList[endpoint]
//   }

//     return (
//         <>
//             {renderComponents(params.options)}
//         </>
//   )
// }
// export default page;
