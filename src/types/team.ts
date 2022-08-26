export interface Team {
  id: number;
  name: string;
}

export interface TeamGQL {
  teams: Team[];
}

export type DropdownTeam = Team & {
  isPluga: boolean;
};
