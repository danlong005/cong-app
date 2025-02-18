
'use client';

import { Publisher } from "@/types";
import { createContext } from "react";

export type PublisherContextProps = {
    publishers: Publisher[];
    selectedPublisher: Publisher | null;
    setSelectedPublisher: (publisher: Publisher | null) => void;
    selectedTab: number;
    setSelectedTab: (tab: number) => void;
} 
const publishers:Publisher[] = [];
const publisherContextProps: PublisherContextProps = {
    publishers: [],
    selectedTab: 0,
    selectedPublisher: null,
    setSelectedPublisher: () => {},
    setSelectedTab: () => {}
}



export const PublisherContext = createContext(publisherContextProps);
