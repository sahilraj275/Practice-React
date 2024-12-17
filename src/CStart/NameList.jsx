import React from "react";

function NamesList({ namesArray }) {
  // Filter the names that start with the letter "C" and sort them alphabetically
  const filteredNames = namesArray
    .filter((item) => item.name.startsWith("C"))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="w-full max-w-lg mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Names Starting with "C"</h1>

      {/* Render the filtered and sorted names */}
      <ul className="list-disc pl-5">
        {filteredNames.length > 0 ? (
          filteredNames.map((item, index) => (
            <li key={index} className="text-lg">
              {item.name}
            </li>
          ))
        ) : (
          <li className="text-lg text-gray-500">No names found.</li>
        )}
      </ul>
    </div>
  );
}

export default NamesList;
