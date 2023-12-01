import React, { ReactNode } from "react";
import StoreProvider from "./store.provider";

export default function Providers({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <StoreProvider>{children}</StoreProvider>;
}
