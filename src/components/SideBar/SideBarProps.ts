import { Publisher } from "@/types";

export interface SideBarProps {
    setSelectedPublisher: (selectedPublisher: Publisher) => void;
    setSelectedTab: (tabId: number) => void;
}