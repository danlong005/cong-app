"use client";

import { useContext } from "react";
import { PublisherContext } from "@/app/contexts/PublisherContext";

export type Tab = {
  id: number;
  text: string;
};

export interface TabsProps {
  tabs: Array<Tab>;
  selectedTab: number;
  setSelectedTab: (selectedTab: number) => void;
}

export function Tabs(props: TabsProps) {
  const { tabs } = props;
  const { setSelectedTab, selectedTab } = useContext(PublisherContext);

  return (
    <ul className={"flex p-0 pl-5 m-0"}>
      {tabs.map((tab) => {
        return (
          <li
            className={
              "p-2 ml-1 mr-1 cursor-pointer rounded-t-lg " +
              (tab.id === selectedTab
                ? "bg-gray-300 text-black"
                : "bg-gray-600 text-white")
            }
            onClick={() => setSelectedTab(tab.id)}
            key={tab.id}
          >
            {tab.text}
          </li>
        );
      })}
    </ul>
  );
}
