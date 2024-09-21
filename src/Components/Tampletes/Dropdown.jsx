import React from "react";

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="">
      <select
        className="bg-[#26252b] rounded text-white px-3 py-1 duration-200 outline-none"
        defaultValue="0"
        onChange={func}
        name="format"
        id="format"
      >
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
