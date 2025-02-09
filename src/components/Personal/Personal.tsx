import { PersonalProps } from "./PersonalProps";

export function Personal(props: PersonalProps) {
  const { selectedPublisher } = props;

  const setFirstName = (firstName: string) => {};
  const setLastName = (lastName: string) => {};

  return (
    selectedPublisher && (
      <>
        <form>
          <label htmlFor={"first_name"}>First Name:</label>
          <input
            name="first_name"
            type="text"
            value={selectedPublisher?.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor={"last_name"}>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={selectedPublisher?.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </form>
      </>
    )
  );
}
