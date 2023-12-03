import React from "react";
import AnswerItem from "../answer-item/answer-item";

export default function AnswersList() {
  return (
    <div className="px-6 flex flex-col gap-8 py-8 mb-4 items-center min-w-full">
      {[...Array(10)].map((_) => (
        <AnswerItem
          id="anas"
          date={new Date()}
          key={"a"}
          content="\ \lorem ipsum \lorem ipsum \lorem ipsum \lorem ipsum \lorem ipsum \"
          image="/profile.jpeg"
          liked={false}
          likes={18900000}
          name="anas jaidi"
        />
      ))}
    </div>
  );
}
