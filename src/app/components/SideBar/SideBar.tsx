"use client";

import { SideBarProps } from "./SideBarProps";
import { SideBarItem } from "./SideBarItem";
import { Publisher } from "@/types";

export function SideBar(props: SideBarProps) {
  const { publishers, setSelectedPublisher, setSelectedTab } = props;

  return (
    <div className={"w-1/5 h-[80vh] p-1"}>
      <ul>
        <li className={"bg-gray-600 text-white p-1"}>Publishers</li>

        {publishers?.map((publisher, index) => (
          <SideBarItem
            key={index}
            publisher={publisher}
            index={index}
            setSelectedPublisher={setSelectedPublisher}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
    </div>
  );
}
