import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const CustomSelect = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const options = [
    "Private Limited Company",
    "Limited Liabilty Partnership",
    "Sole Proprietorship",
    "Hindu Undivided Family,HUF Deed"
  ];

  return (
    <div className="relative w-full">

      {/* Selected Value */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-[#2E6A62] text-white rounded-xl px-4 py-3 flex justify-between items-center focus:outline-none"
      >
        <span className={`${!value ? "text-white/60" : "text-white"}`}>
          {value || "Select Service"}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 mt-2 bg-[#2E6A62] border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="px-4 py-3 text-white hover:bg-[#245E56] cursor-pointer transition"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
