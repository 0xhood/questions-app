import React from "react";
import QuestionItem from "../question-item/question-item";

export default function QuestionsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 sm:px-12 ">
      {[...Array(8)].map((_) => (
        <QuestionItem
          key={"a"}
          content=""
          date={new Date()}
          id="anas"
          image="/profile.jpeg"
          liked={true}
          likes={1200}
          name="anas Jaidi"
          title=""
        />
      ))}
    </div>
  );
}
