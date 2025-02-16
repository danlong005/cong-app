import { Publisher } from "@/types";

export interface SideBarProps {
    publishers: Publisher[];
    setSelectedPublisher: (selectedPublisher: Publisher) => void;
    setSelectedTab: (tabId: number) => void;
}