import { SpiritualProps } from "./SpiritualProps";

export function Spiritual(props: SpiritualProps) {
  const { selectedPublisher } = props;
  return (
    selectedPublisher && (
      <>
        Spiritual <p>Publisher: {selectedPublisher?.id}</p>
      </>
    )
  );
}
