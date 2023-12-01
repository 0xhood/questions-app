import React from "react";
import AnswerItem from "../answer-item/answer-item";

export default function AnswersList() {
  return (
    <div>
      {[...Array(10)].map((_) => (
        <AnswerItem key={"a"} />
      ))}
    </div>
  );
}
