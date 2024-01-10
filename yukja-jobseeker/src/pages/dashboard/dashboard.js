import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Dashboard = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { countData, setCountData } = state;
  const { countList } = handleFunction;

  useEffect(() => {
    countList();
  }, []);

  return (
    <div className="content md:px-[3rem] px-0 mt-0 md:-mt-9">
      <h4 className="text-2xl font-medium mb-3">Dashboard</h4>
      <div className="flex items-center w-full space-x-4 md:w-1/2">
        <div className="w-full">
          <div className="relative w-full px-4 py-6 bg-white shadow-l6">
            <p className="text-2xl font-bold text-black dark:text-white">
              {countData}
            </p>
            <p className="text-sm text-gray-400">List Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
