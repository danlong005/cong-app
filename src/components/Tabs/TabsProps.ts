
export type Tab = {
    id: number;
    text: string;
}

export interface TabsProps { 
    tabs: Array<Tab>;
    selectedTab: number;
    setSelectedTab: (selectedTab: number) => void;
}