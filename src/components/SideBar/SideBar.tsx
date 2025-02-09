"use client";

import { Publisher } from "@/types";
import { SideBarProps } from "./SideBarProps";

export function SideBar(props: SideBarProps) {
  const { setSelectedPublisher } = props;

  const publishers: Array<Publisher> = [
    {
      id: 1,
      firstName: "Daniel",
      lastName: "Long",
      elder: true,
      baptisedAt: new Date(),
    },
    {
      id: 2,
      firstName: "Blair",
      lastName: "Long",
      elder: false,
      baptisedAt: new Date(),
    },
    {
      id: 3,
      firstName: "Lily",
      lastName: "Long",
      elder: false,
      baptisedAt: new Date(),
    },
    {
      id: 4,
      firstName: "Kinsley",
      lastName: "Long",
      elder: false,
      baptisedAt: new Date(),
    },
    {
      id: 5,
      firstName: "Annabelle",
      lastName: "Long",
      elder: false,
      baptisedAt: new Date(),
    },
  ];

  return (
    <div className={"border border-gray-100 w-1/5 h-[80vh] p-1"}>
      <ul>
        {publishers?.map((publisher, index) => {
          return (
            <li
              onClick={() => setSelectedPublisher(publisher)}
              key={publisher.id}
              className={
                "border border-gray-100 pl-1 cursor-pointer h-[25px] " +
                (index % 2 == 0 ? "bg-gray-100" : "")
              }
            >
              <p>{publisher.lastName + ", " + publisher.firstName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
