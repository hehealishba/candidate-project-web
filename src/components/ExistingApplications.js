import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ExistingApplications = () => {
  const candidates = useSelector((state) => state.candidates);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  // Action to remove a candidate
  const removeCandidate = (index) => {
    dispatch({ type: "candidates/removeCandidate", payload: index });
  };

  const filteredCandidates = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.appliedFor.toLowerCase().includes(search.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800">Existing Applications</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search candidates..."
        className="w-full p-3 border rounded-lg shadow-sm mt-4"
      />
      <ul className="mt-6 space-y-4">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((c, i) => (
            <li key={i} className="border p-4 rounded-lg shadow-md flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={c.photo} alt={c.name} className="w-16 h-16 rounded-full" />
                <div>
                  <p className="text-xl font-semibold">{c.name} - {c.appliedFor}</p>
                  <p className="text-gray-600">Skills: {c.skills.join(", ")}</p>
                </div>
              </div>
              <button
                onClick={() => removeCandidate(i)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-6">No candidates found.</p>
        )}
      </ul>
    </div>
  );
};

export default ExistingApplications;
