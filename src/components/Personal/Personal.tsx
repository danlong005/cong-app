import { PersonalProps } from "./PersonalProps";

export function Personal(props: PersonalProps) {
  const { selectedPublisher } = props;

  return (
    <>
      Personal Tab <p>Publisher: {selectedPublisher}</p>
    </>
  );
}
