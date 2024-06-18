import React from 'react'

export default function SearchBar() {
  return (
    <label className="relative block w-2/5">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 absolute inset-y-2 left-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          <input
            className="w-full bg-[#F0F0F0] rounded-full py-2 pl-14 placeholder:italic placeholder:text-slate-400 "
            type="text"
            placeholder="Search for Products..."
          />
        </label>
  )
}
