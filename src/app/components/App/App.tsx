"use client";

import { MainWindow, SideBar } from "@/app/components";
import { Publisher } from "@/types";
import { useState } from "react";
import {
  PublisherContext,
  PublisherContextProps,
} from "@/app/contexts/PublisherContext";

export interface AppProps {
  publishers: Publisher[];
}

export function App(props: AppProps) {
  const { publishers } = props;
  const [selectedPublisher, setSelectedPublisher] = useState<Publisher | null>(
    null
  );
  const [selectedTab, setSelectedTab] = useState(0);

  const publisherContextValue: PublisherContextProps = {
    publishers: publishers,
    selectedPublisher: selectedPublisher,
    selectedTab: selectedTab,
    setSelectedPublisher: setSelectedPublisher,
    setSelectedTab: setSelectedTab,
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
