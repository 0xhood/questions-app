import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { formatRelativeDate } from "@/utils/format-date";
import { formatNumber } from "@/utils/format-number";

interface PropsType {
  image: string;
  name: string;
  content: string;
  title: string;
  likes: number;
  liked: boolean;
  date: Date;
  id: string;
}

export default function QuestionSection({
  content,
  date,
  id,
  image,
  liked,
  likes,
  name,
  title,
}: PropsType) {
  const [answering, setAnswering] = useState(false);
  return (
    <div
      className="rounded-sm  text-white font-light relative px-8 sm:px-28 py-8"
      style={{ borderRadius: "6px" }}
    >
      <div className="absolute left-1/2 -translate-x-1/2  top-0 -translate-y-1/2">
        <div className="flex flex-col items-center gap-1 justify-center">
          <Image
            src={image}
            className="rounded-full z-100"
            height={52}
            width={52}
            alt=""
          />
          <p className="">{name}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <p className="text-xs font-thin">{formatRelativeDate(date)}</p>
        <h3 className="text-2xl font-extralight">{title}</h3>
        <p className="font-extralight text-sm leading-6 tracking-wide">
          {content}
        </p>
      </div>
      <div className="mt-6 font-thin text-sm text-gray-300 flex justify-between items-center">
        <button
          onClick={() => setAnswering((prev) => !prev)}
          className="bg-[#DDE6ED] px-2 sm:px-3 text-sm py-1 sm:py-2 rounded-sm overflow-hidden text-[#27374D] font-normal w-32"
        >
          {answering ? "cancel" : "Add"} Answer
        </button>
        <div className="flex gap-3 items-center">
          {liked ? <FcLike size="18" /> : <FcLikePlaceholder size="18" />}
          <p>{formatNumber(likes)}</p>
        </div>
      </div>
      {answering && (
        <form className="mt-8 flex gap-4">
          <input
            type="text"
            className="flex-1 rounded-md px-3 py-2 text-[#27374D] font-extralight outline-none bg-[#DDE6ED]"
          />
          <button
            className="bg-[#DDE6ED] px-4 sm:px-3 py-1 sm:py-2 rounded-sm overflow-hidden text-[#27374D] font-light text-xs"
            type="submit"
          >
            Add Answer
          </button>
        </form>
      )}
    </div>
  );
}
