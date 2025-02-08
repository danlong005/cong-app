import { SpiritualProps } from "./SpiritualProps";

export function Spiritual(props: SpiritualProps) {
  const { selectedPublisher } = props;
  return (
    <>
      Spiritual <p>Publisher: {selectedPublisher}</p>
    </>
  );
}
