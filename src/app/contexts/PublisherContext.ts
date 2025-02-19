
'use client';

import { Publisher } from "@/types";
import { createContext } from "react";

export type PublisherContextProps = {
    publishers: Publisher[];
    selectedPublisherId: number;
    setSelectedPublisherId: (publisherId: number) => void;
    selectedTab: number;
    setSelectedTab: (tab: number) => void;
    updatePublishers: (publishers: Publisher[]) => void;
} 
const publishers:Publisher[] = [];
const publisherContextProps: PublisherContextProps = {
    publishers: [],
    selectedTab: 0,
    selectedPublisherId: 0,
    setSelectedPublisherId: (publisherId: number) => {},
    setSelectedTab: () => {},
    updatePublishers: (publishers: Publisher[]) => {}
}



export const PublisherContext = createContext(publisherContextProps);
