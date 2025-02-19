import { useContext } from "react";
import { PublisherContext } from "@/app/contexts/PublisherContext";
import { usePublisher } from "@/app/hooks/usePublisher";

export function Spiritual() {
  const { selectedPublisherId, publishers } = useContext(PublisherContext);
  const selectedPublisher = usePublisher(publishers, selectedPublisherId);

  function setElder(elder: boolean) {}

  return (
    selectedPublisher && (
      <>
        <form>
          <div className={"pt-1 pl-1 flex"}>
            <div className={"flex-1"}>
              <label htmlFor={"elder"}>Elder:</label>
              <input
                type="checkbox"
                name="elder"
                checked={selectedPublisher?.elder}
                onChange={(e) => setElder(false)}
                className={"ml-2 p-1"}
              />
            </div>
          </div>
        </form>
      </>
    )
  );
}
