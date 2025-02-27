import { useContext } from "react";
import { PublisherContext } from "@/app/contexts/PublisherContext";
import { usePublisher } from "@/app/hooks/usePublisher";

export function Assignments() {
  const { selectedPublisherId, publishers } = useContext(PublisherContext);
  const selectedPublisher = usePublisher(publishers, selectedPublisherId);

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
