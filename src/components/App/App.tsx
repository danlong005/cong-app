"use client";

import { MainWindow, SideBar } from "@/components";
import { Publisher } from "@/types";
import { useState } from "react";

export function App() {
  const [selectedPublisher, setSelectedPublisher] = useState<Publisher>();

  return (
    <main>
      <div className={"flex"}>
        <SideBar setSelectedPublisher={setSelectedPublisher} />
        <MainWindow selectedPublisher={selectedPublisher} />
      </div>
    </main>
  );
}
