"use client";

import { useState } from "react";
import { Tabs } from "../Tabs/Tabs";
import { MainWindowProps } from "./MainWindowProps";
import { Personal, Spiritual, Unknown } from "@/components";

export function MainWindow(props: MainWindowProps) {
  const { selectedPublisher } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  const onClickTab = (newSelectedTab: number) => {
    setSelectedTab(newSelectedTab);
  };

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
  ];

  return (
    <div className={"border border-gray-100 w-4/5 p-1"}>
      <Tabs tabs={tabs} selectedTab={selectedTab} setSelectedTab={onClickTab} />

      <div
        className={
          "border border-gray-100 bg-gray-100 h-[75vh] p-1 m-0 rounded-lg"
        }
      >
        {tabs.find((tab) => tab.id === selectedTab)?.component ?? <Unknown />}
      </div>
    </div>
  );
}
