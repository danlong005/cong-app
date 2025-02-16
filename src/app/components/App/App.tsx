"use client";

import { MainWindow, SideBar } from "@/app/components";
import { Publisher } from "@/types";
import { useState } from "react";
import { AppProps } from "./AppProps";

export function App(props: AppProps) {
  const { publishers } = props;
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
          publishers={publishers}
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
