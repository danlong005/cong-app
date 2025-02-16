export type Assignment = {
  id: number;
  description: string;
  completedAt: Date;
}

export type Publisher = {
  id: number,
  firstName: string,
  lastName: string,
  baptisedAt: Date;
  elder: boolean;
  assignments: Assignment[];
}