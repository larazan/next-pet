import React from "react";

const Tags = () => {
  return (
    <>
      <div className="flex flex-wrap space-x-1 text-base md:text-sm font-mabry text-gray-500 px-2 md:px-4 py-2">
        <span> Tags: </span>
        <div className="flex flex-wrap space-x-1 w-60">
          <a
            href="#"
            className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-indigo-500 border border-indigo-500 py-1 px-2 rounded-full bg-indigo-200 capitalize "
          >
            action
          </a>{" "}
          <a
            href="#"
            className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-green-500 border border-green-500 py-1 px-2 rounded-full bg-green-200 capitalize "
          >
            adventure
          </a>{" "}
          <a
            href="#"
            className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-orange-500 border border-orange-500 py-1 px-2 rounded-full bg-orange-200 capitalize "
          >
            adventure
          </a>{" "}
          <a
            href="#"
            className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-blue-500 border border-blue-500 py-1 px-2 rounded-full bg-blue-200 capitalize "
          >
            rpg
          </a>{" "}
          <a
            href="#"
            className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-yellow-500 border border-yellow-500 py-1 px-2 rounded-full bg-yellow-200 capitalize "
          >
            sport
          </a>{" "}
          <a
            href="#"
            className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-red-500 border border-red-500 py-1 px-2 rounded-full bg-red-200 capitalize "
          >
            racing
          </a>{" "}
        </div>
      </div>
    </>
  );
};

export default Tags;
