import { useContext } from "react";
import { PublisherContext } from "@/app/contexts/PublisherContext";

export function Assignments() {
  const { selectedPublisherId, publishers } = useContext(PublisherContext);
  const selectedPublisher = publishers.filter(
    (p) => p.id === selectedPublisherId
  )![0];

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
