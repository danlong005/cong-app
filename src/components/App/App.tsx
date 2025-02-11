"use client";

import { MainWindow, SideBar } from "@/components";
import { Publisher } from "@/types";
import { useState } from "react";

export function App() {
  const [selectedPublisher, setSelectedPublisher] = useState<Publisher | null>(
    null
  );
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main>
      <div className={"flex"}>
        <SideBar
          setSelectedPublisher={setSelectedPublisher}
          setSelectedTab={setSelectedTab}
        />
        <MainWindow
          selectedPublisher={selectedPublisher}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
    </main>
  );
}
