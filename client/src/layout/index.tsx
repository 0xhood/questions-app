"use client";
import Aside from "@/components/aside/aside";
import Modal from "@/components/modal/modal";
import Navbar from "@/components/navbar/navbar";
import useScreenSize from "@/hooks/useScreenSize";
import { useAppDispatch, useAppSelector } from "@/store";
import { setAnswering } from "@/store/slices/ui.slice";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

export default function Layout({ children }: { children: JSX.Element }) {
  const pathname = usePathname();
  const { isSm } = useScreenSize();
  const dispatch = useAppDispatch();
  const isAnswering = useAppSelector((s) => s.ui.isAnswering);

  const isAsideOpen = useAppSelector((s) => s.ui.isAsideOpen);

  const publicPaths = useMemo(() => {
    return ["/auth"];
  }, []);

  const render = () => {
    if (publicPaths.includes(pathname)) {
      return children;
    }
    return (
      <div className=" min-h-screen bg-[#DDE6ED] grid grid-cols-14">
        {isSm || isAsideOpen ? (
          <div className="fixed w-screen h-screen sm:relative sm:w-auto sm:h-auto z-10  col-span-2 bg-[#526D82]">
            <Aside />
          </div>
        ) : null}

        <div className="col-span-14 sm:col-span-12 flex flex-col">
          <div className=" bg-[#27374D] py-6">
            <Navbar />
          </div>
          <div className=" px-2 sm:px-8 py-12">{children}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      {isAnswering && <Modal onClose={() => dispatch(setAnswering(false))} />}
      {render()}
    </>
  );
}
