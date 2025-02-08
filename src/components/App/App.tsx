'use client';

import { MainWindow, SideBar } from "@/components";
import { useState } from "react";

export function App() {
    const [selectedPublisher, setSelectedPublisher] = useState(0);
    
    return (
        <main>
            <div className={'flex'}>
                <SideBar setSelectedPublisher={setSelectedPublisher} />
                <MainWindow selectedPublisher={selectedPublisher} />
            </div>
        </main>
    );
}