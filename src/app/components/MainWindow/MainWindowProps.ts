import { Publisher } from "@/types";

export interface MainWindowProps {
    selectedPublisher: Publisher | null;
    selectedTab: number,
    setSelectedTab: (tabId: number) => void;
}