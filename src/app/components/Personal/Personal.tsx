"use client";

import { PublisherContext } from "@/app/contexts/PublisherContext";
import { usePublisher } from "@/app/hooks/usePublisher";
import { useContext } from "react";

export function Personal() {
  const { selectedPublisherId, publishers } = useContext(PublisherContext);
  const selectedPublisher = usePublisher(publishers, selectedPublisherId);

  function handleChange(event: any) {
    console.log(`Event Name: ${event.target.name}`);
    console.log(`Event Value: ${event.target.value}`);
  }

  return (
    selectedPublisher && (
      <form>
        <div className={"pt-1 pl-1 flex h-10"}>
          <div className={"flex-1"}>
            <label htmlFor={"firstName"}>First Name:</label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              value={selectedPublisher?.firstName}
              onChange={handleChange}
              className={"ml-2 p-1"}
            />
          </div>

          <div className={"flex-1"}>
            <label htmlFor={"lastName"}>Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={selectedPublisher?.lastName}
              onChange={handleChange}
              className={"ml-2 p-1"}
            />
          </div>

          <div className={"flex-1"}>
            <label htmlFor={"baptisedAt"}>Baptised Date:</label>
            <input
              type="text"
              name="baptisedAt"
              id="baptisedAt"
              value={selectedPublisher?.baptisedAt.toISOString()}
              onChange={handleChange}
              className={"ml-2 p-1"}
            />
          </div>
        </div>
      </form>
    )
  );
}
