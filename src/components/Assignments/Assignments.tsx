import { AssignmentsProps } from "./AssignmentsProps";

export function Assignments(props: AssignmentsProps) {
  const { selectedPublisher } = props;
  return selectedPublisher && <>Here are the assignments</>;
}
