"use client";

import { SideBarItem } from "./SideBarItem";
import { PublisherContext } from "@/app/contexts/PublisherContext";
import { useContext } from "react";

export function SideBar() {
  const { publishers, setSelectedPublisher, setSelectedTab } =
    useContext(PublisherContext);

  return (
    <div className={"w-1/5 h-[80vh] p-1"}>
      <ul>
        <li className={"bg-gray-600 text-white p-1"}>Publishers</li>

        {publishers?.map((publisher, index) => (
          <SideBarItem key={index} publisher={publisher} index={index} />
        ))}
      </ul>
    </div>
  );
}
