import { AssignmentsProps } from "./AssignmentsProps";

export function Assignments(props: AssignmentsProps) {
  const { selectedPublisher } = props;
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
