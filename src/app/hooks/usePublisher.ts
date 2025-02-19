import { Publisher } from "@/types";

export function usePublisher(publishers: Publisher[], id: number) {
    let publisher = null;

    for(let p of publishers) {
        if (p.id === id) {
            publisher = p;
        }
    }

    return publisher;
}