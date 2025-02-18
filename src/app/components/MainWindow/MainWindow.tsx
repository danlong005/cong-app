"use client";

import { useContext, useState } from "react";
import { Tabs } from "../Tabs/Tabs";
import { Assignments, Personal, Spiritual, Unknown } from "@/app/components";
import { PublisherContext } from "@/app/contexts/PublisherContext";

export function MainWindow() {
  const { selectedPublisher, setSelectedTab, selectedTab } =
    useContext(PublisherContext);

  const tabs = [
    {
      id: 0,
      text: "Personal",
      component: <Personal />,
    },
    {
      id: 1,
      text: "Spiritual",
      component: <Spiritual />,
    },
    {
      id: 2,
      text: "Assignments",
      component: <Assignments />,
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
