"use client";

import { PublisherContext } from "@/app/contexts/PublisherContext";

import { Publisher } from "@/types";
import { useContext } from "react";

export interface SideBarItemProps {
  publisher: Publisher;
  index: number;
}

export function SideBarItem(props: SideBarItemProps) {
  const { publisher, index } = props;
  const { setSelectedPublisherId, setSelectedTab } =
    useContext(PublisherContext);

  return (
    <li
      onClick={() => {
        setSelectedPublisherId(publisher.id);
        setSelectedTab(0);
      }}
      className={
        "pl-1 cursor-pointer h-[25px] " + (index % 2 == 0 ? "bg-gray-300" : "")
      }
    >
      <p>{publisher.lastName + ", " + publisher.firstName}</p>
    </li>
  );
}
