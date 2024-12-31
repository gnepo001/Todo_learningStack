import React from "react";

const index = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-8">
        <div className="flex space-x-4 items-center">
          <h1 className="text-4xl font-bold">Todo List</h1>
          <button className="rounded border-2 border-black bg-green-400 p-4 text-white">
            Add +
          </button>
        </div>
        {/* will be pulling info from django backend */}
      </div>
    </div>
  );
};

export default index;
