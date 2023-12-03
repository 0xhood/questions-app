import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useAppDispatch } from "@/store";
import { setAnswering, setAsideIsOpen } from "@/store/slices/ui.slice";
import Image from "next/image";

export default function Navbar() {
  const dispatch = useAppDispatch();

  const onAddClicked = () => {
    dispatch(setAnswering(true));
  };

  return (
    <div className="text-white font-light px-6 sm:px-12 flex gap-4 items-center h-full justify-between">
      <div className=" flex items-center gap-6">
        <button
          className="sm:hidden"
          onClick={dispatch.bind(null, setAsideIsOpen(true))}
        >
          <CiMenuBurger color="white" size="28" />
        </button>
        <button
          className="bg-[#DDE6ED] px-4 sm:px-5 text-sm py-2 sm:py-3 rounded-lg overflow-hidden text-[#27374D]"
          style={{ borderRadius: "2px" }}
          onClick={onAddClicked}
        >
          Add Q&A
        </button>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          src={"/profile.jpeg"}
          alt=""
          width={38}
          height={38}
          className="rounded-full"
        />
        <p className="font-light">Hi, Robin</p>
      </div>
    </div>
  );
}
