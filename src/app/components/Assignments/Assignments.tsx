import { useContext } from "react";
import { PublisherContext } from "@/app/contexts/PublisherContext";

export function Assignments() {
  const { selectedPublisher } = useContext(PublisherContext);
  return (
    selectedPublisher && (
      <>
        <h1>{selectedPublisher.firstName}'s Assignments</h1>
        <ul>
          {selectedPublisher.assignments.map((assignment, index) => {
            return <li key={index}>{assignment.description}</li>;
          })}
        </ul>
      </>
    )
  );
}
