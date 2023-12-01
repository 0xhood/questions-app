import React from "react";
import QuestionItem from "../question-item/question-item";

export default function QuestionsList() {
  return (
    <div>
      {[...Array(10)].map((_) => (
        <QuestionItem key={"a"} />
      ))}
    </div>
  );
}
