import { formatRelativeDate } from "@/utils/format-date";
import { formatNumber } from "@/utils/format-number";
import Image from "next/image";
import React from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

interface PropsType {
  image: string;
  name: string;
  likes: number;
  liked: boolean;
  content: string;
  date: Date;
  id: string;
}

export default function AnswerItem(props: PropsType) {
  const onLikePressed = () => {};

  return (
    <div className=" flex  gap-4 text-[white] sm:flex-col shadow-2xl py-8 px-4 sm:w-10/12">
      <div className="flex flex-col justify-between sm:flex-row sm:max-w-[80%]">
        <div className="sm:w-16 flex flex-col items-center gap-2">
          <Image
            src={props.image}
            className="rounded-full z-100"
            height={32}
            width={32}
            alt=""
          />
          <p className="text-xs font-thin text-center">{props.name}</p>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex gap-3 items-center" onClick={onLikePressed}>
            {props.liked ? (
              <FcLike size="12" />
            ) : (
              <FcLikePlaceholder size="12" />
            )}
            <p className="text-xs">{formatNumber(props.likes)}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-thin text-xs">{formatRelativeDate(props.date)}</p>
        <p className="font-light text-sm opacity-75 leading-6 sm:max-w-[80%] my-4">
          {props.content}
        </p>
      </div>
    </div>
  );
}
