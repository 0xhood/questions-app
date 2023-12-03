"use client";
import AnswersList from "@/components/answers-list/answers-list";
import QuestionSection from "@/components/question-section/question-section";
import React from "react";

export default function SingleQuestionPage() {
  return (
    <div className=" bg-[#27374D] rounded-md">
      <QuestionSection
        content=""
        date={new Date()}
        id="anas"
        image="/profile.jpeg"
        liked={true}
        likes={1200}
        name="anas jaidi"
        title="anas"
        key={1}
      />
      <div className="mx-auto w-10/12">
        <h1 className="text-[#DDE6ED] border-b-[#DDE6ED] w-min px-2 border-b-2 py-3 text-xl font-semibold">
          Answers
        </h1>
        <hr className="bg-gray-100 h-[0.3px] opacity-50" />
      </div>
      <AnswersList />
    </div>
  );
}
