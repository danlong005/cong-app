'use server';

import { Publisher } from '@/types';

export async function getPublishers(): Promise<Array<Publisher>> {
    const publishers: Array<Publisher> = [
        {
          id: 1,
          firstName: "Daniel",
          lastName: "Long",
          elder: true,
          baptisedAt: new Date(),
          assignments: [
            {
              id: 1,
              description: "Watchtower Study",
              completedAt: new Date()
            }
          ]
        },
        {
          id: 2,
          firstName: "Blair",
          lastName: "Long",
          elder: false,
          baptisedAt: new Date(),
          assignments: []
        },
        {
          id: 3,
          firstName: "Lily",
          lastName: "Long",
          elder: false,
          baptisedAt: new Date(),
          assignments: []
        },
        {
          id: 4,
          firstName: "Kinsley",
          lastName: "Long",
          elder: false,
          baptisedAt: new Date(),
          assignments: []
        },
        {
          id: 5,
          firstName: "Annabelle",
          lastName: "Long",
          elder: false,
          baptisedAt: new Date(),
          assignments: []
        },
      ];

    return publishers;
}