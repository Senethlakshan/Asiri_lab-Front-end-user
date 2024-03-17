import React, { useState, useEffect } from "react";
import UserBMIcal from '../profileitems/UserBMIcal';
import Userqr from '../profileitems/Userqr';

const Profilediv = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white rounded-md" style={{ height: "296px" }}>
      <div className="w-full max-w-screen-lg flex flex-col md:flex-row p-4">
        <div className="md:w-1/2 md:pr-2 mb-4 md:mb-0">
          <UserBMIcal/>
        </div>
        <div className="md:w-1/2 md:pl-2 mb-4 md:mb-0">
        <Userqr/>
        </div>
      </div>
    </div>
  );
};

export default Profilediv;

