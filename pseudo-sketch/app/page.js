"use client"

import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";
import App from "./App";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </>
  )
}
