"use client";

import { MainWindow, SideBar } from "@/app/components";
import { Publisher } from "@/types";
import { useState } from "react";
import {
  PublisherContext,
  PublisherContextProps,
} from "@/app/contexts/PublisherContext";

export interface AppProps {
  publisherList: Publisher[];
}

export function App(props: AppProps) {
  const { publisherList } = props;
  const [selectedPublisherId, setSelectedPublisherId] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [publishers, updatePublishers] = useState(publisherList);

  const publisherContextValue: PublisherContextProps = {
    publishers: publishers,
    selectedPublisherId: selectedPublisherId,
    selectedTab: selectedTab,
    setSelectedPublisherId: setSelectedPublisherId,
    setSelectedTab: setSelectedTab,
    updatePublishers: updatePublishers,
  };

  return (
    <PublisherContext.Provider value={publisherContextValue}>
      <div className={"flex"}>
        <SideBar />

        <MainWindow />
      </div>
    </PublisherContext.Provider>
  );
}
