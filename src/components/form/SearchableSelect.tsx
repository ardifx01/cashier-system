"use client";

import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  placeholder = "Cari atau pilih...",
  onChange,
  className = "",
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  // Filter options berdasarkan input
  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    setSelected(option);
    onChange(option.value);
    setIsOpen(false);
    setSearch(""); // reset search setelah pilih
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Input search / display */}
      <div
        className="h-11 flex items-center justify-between rounded-lg border border-gray-300 bg-white px-3 text-sm shadow-sm cursor-pointer dark:border-gray-700 dark:bg-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selected ? "text-gray-900 dark:text-white" : "text-gray-400"}>
          {selected ? selected.label : placeholder}
        </span>
        <span className="ml-2 text-gray-400">▼</span>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 rounded-lg border border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900 z-10">
          {/* Search input */}
          <input
            type="text"
            placeholder="Ketik untuk mencari..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 text-sm border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white outline-none"
          />

          {/* Options */}
          <ul className="max-h-48 overflow-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-sm text-gray-400 dark:text-gray-500">
                Tidak ada hasil
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
