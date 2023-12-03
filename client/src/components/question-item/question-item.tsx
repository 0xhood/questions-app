import { formatRelativeDate } from "@/utils/format-date";
import { formatNumber } from "@/utils/format-number";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

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

export default function QuestionItem({
  content,
  date,
  image,
  liked,
  likes,
  name,
  title,
  id,
}: PropsType) {
  return (
    <div
      className="rounded-sm shadow-lg bg-[#27374D] text-white font-light relative px-8 sm:px-28 py-8"
      style={{ borderRadius: "6px" }}
    >
      <div className="absolute left-1/2 -translate-x-1/2 sm:left-4 top-0 -translate-y-1/2">
        <Image
          src={image}
          className="rounded-full z-100"
          height={52}
          width={52}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xs font-thin">{formatRelativeDate(date)}</p>
        <h3 className="text-2xl font-extralight">{title}</h3>
        <p className="font-extralight text-sm leading-6 tracking-wide">
          {content}
        </p>
      </div>
      <div className="mt-6 font-thin text-sm text-gray-300 flex justify-between items-center">
        <Link href={"/questions/" + id}>see more..</Link>
        <div className="flex gap-3 items-center">
          {liked ? <FcLike size="18" /> : <FcLikePlaceholder size="18" />}
          <p>{formatNumber(likes)}</p>
        </div>
      </div>
    </div>
  );
}
