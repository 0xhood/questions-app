import React from "react";
import { TfiClose } from "react-icons/tfi";
import { FaGripfire } from "react-icons/fa";

import { IoSettingsOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { useAppDispatch } from "@/store";
import { setAsideIsOpen } from "@/store/slices/ui.slice";
import { useRouter } from "next/navigation";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";



export default function Aside() {
  const dispatch = useAppDispatch();
  const router = useRouter()

  return (
    <div className="flex flex-col pt-4 px-5">
      <button
        className="flex justify-end  sm:hidden"
        onClick={dispatch.bind(null, setAsideIsOpen(false))}
      >
        <TfiClose color="white" size="22" />
      </button>
      <div className="mx-auto mt-2">
        <h1 className="text-2xl text-white font-thin">Logo.io</h1>
      </div>
      <div className="mt-16 flex flex-col gap-12 justify-center">
        {[
          {icon: MdOutlineQuestionAnswer, label: 'Questions', href: 'questions'},
          { icon: FaGripfire, label: "Trending", href: 'trending' },
          { icon: IoSettingsOutline, label: "Settings", href: 'settings' },
          { icon: GrFavorite, label: "Favorites", href: 'liked' },
          { icon: IoCreateOutline, label: "Cretaed", href: 'personal' },
        ].map((btn, i) => (
          <button
            className="flex justify-center md:justify-start text-white gap-2 text-xl font-light"
            key={i}
            onClick={router.push.bind(null, btn.href)}
          >
            <btn.icon color="white" size="22" />
            <h2>{btn.label}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}
