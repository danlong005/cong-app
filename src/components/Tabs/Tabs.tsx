"use client";

import { TabsProps } from "./TabsProps";

export function Tabs(props: TabsProps) {
  const { tabs, setSelectedTab, selectedTab } = props;

  return (
    <ul className={"flex p-0 pl-5 m-0"}>
      {tabs.map((tab) => {
        return (
          <li
            className={
              "p-2 m-0 cursor-pointer rounded-t-lg " +
              (tab.id === selectedTab
                ? "bg-gray-100 text-black"
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
