import { Publisher } from "@/types";

export interface SideBarItemProps {
    publisher: Publisher;
    setSelectedPublisher: (selectedPublisher: Publisher) => void;
    setSelectedTab: (tabId: number) => void;
    index: number;
}