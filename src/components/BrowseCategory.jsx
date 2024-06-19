import React from "react";

export default function BrowseCategory() {
  return (
    <section className="bg-slate-300 mx-20 h-[666px] border-2 rounded-2xl px-24">
      <h2 className="text-center my-10 font-extrabold text-3xl">
        Browse By Dress Style
      </h2>
      {/* 2 lignes avec 3 colonnes chacune*/}
      <div className="grid grid-rows-2 w-full h-4/5 gap-5">
        {/* 1ere ligne */}
        <div className="grid grid-cols-3 gap-4">
          {/* 1ere colonne */}
          <div className="relative border-2 border-black overflow-hidden bg-[url('src/images/casual_posing.png')]">
            <h2 className="absolute z-10">Casual</h2>
          </div>
          {/* 2eme colonne sur 2 cases */}
          <div className="relative border-2 border-black col-span-2 overflow-hidden bg-[url('src/images/formal_posing.png')] bg-left-top">
            <h2 className="absolute">Formal</h2>
          </div>
        </div>
        {/* 2eme ligne */}
        <div className="grid grid-cols-3 gap-4">
          {/* 1ere colonne sur 2 cases */}
          <div className="relative flex border-2 border-black col-span-2 overflow-hidden bg-[url('src/images/party_posing.png')]">
            <h2 className="absolute">Party</h2>
          </div>
          {/* 2eme colonne */}
          <div className="relative border-2 border-black overflow-hidden bg-[url('src/images/gym_posing.png')]">
            <h2 className="absolute">Gym</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
