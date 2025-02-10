import { PersonalProps } from "./PersonalProps";

export function Personal(props: PersonalProps) {
  const { selectedPublisher } = props;

  const setFirstName = (firstName: string) => {};
  const setLastName = (lastName: string) => {};
  const setBaptisedAt = (baptisedAt: string) => {};
  const setElder = (elder: boolean) => {};

  return (
    selectedPublisher && (
      <>
        <form>
          <div className={'pt-1 pl-1 flex h-10'}>
            <div className={'flex-1'}>
            <label htmlFor={"first_name"}>First Name:</label>
            <input
              name="first_name"
              type="text"
              value={selectedPublisher?.firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={'ml-2 p-1'}
            />
            </div>

            <div className={'flex-1'}>
              <label htmlFor={"last_name"}>Last Name:</label>
              <input
                type="text"
                name="last_name"
                value={selectedPublisher?.lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={'ml-2 p-1'}
              />
            </div>


            <div className={'flex-1'}>
              <label htmlFor={"baptised_at"}>Baptised Date:</label>
              <input
                type="text"
                name="baptised_at"
                value={selectedPublisher?.baptisedAt.toISOString().split('T')[0]}
                onChange={(e) => setBaptisedAt(e.target.value)}
                className={'ml-2 p-1'}
              />
            </div>
          </div>

          <div className={'pt-1 pl-1 flex'}>
          <div className={'flex-1'}>
              <label htmlFor={"elder"}>Elder:</label>
              <input
                type="checkbox"
                name="elder"
                checked={selectedPublisher?.elder}
                onChange={(e) => setElder(false)}
                className={'ml-2 p-1'}
              />
            </div>
          </div>
        </form>
      </>
    )
  );
}
