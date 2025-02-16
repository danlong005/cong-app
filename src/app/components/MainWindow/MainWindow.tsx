"use client";

import { useState } from "react";
import { Tabs } from "../Tabs/Tabs";
import { MainWindowProps } from "./MainWindowProps";
import { Assignments, Personal, Spiritual, Unknown } from "@/app/components";

export function MainWindow(props: MainWindowProps) {
  const { selectedPublisher, selectedTab, setSelectedTab } = props;

  const tabs = [
    {
      id: 0,
      text: "Personal",
      component: <Personal selectedPublisher={selectedPublisher} />,
    },
    {
      id: 1,
      text: "Spiritual",
      component: <Spiritual selectedPublisher={selectedPublisher} />,
    },
    {
      id: 2,
      text: "Assignments",
      component: <Assignments selectedPublisher={selectedPublisher} />,
    },
  ];

  return (
    <div className={"w-4/5 p-1"}>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <div
        className={"border border-gray-300 bg-gray-300 h-[75vh] p-1 rounded-lg"}
      >
        {tabs.find((tab) => tab.id === selectedTab)?.component ?? <Unknown />}
      </div>
    </div>
  );
}
