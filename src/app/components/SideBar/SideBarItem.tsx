"use client";

import { SideBarItemProps } from "./SideBarItemProps";

export function SideBarItem(props: SideBarItemProps) {
  const { publisher, setSelectedPublisher, setSelectedTab, index } = props;

  return (
    <li
      onClick={() => {
        setSelectedPublisher(publisher);
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
