export interface TzoerData {
  id: number;
  first_name: string;
  last_name: string;
  personal_id: string;
  role: {
    id: number;
    name: string;
  };
  team: {
    id: number;
    name: string;
    pluga: {
      id: number;
      name: string;
    };
  };
}

export interface TzoersTeamGQL {
  tzoersTeam: Pick<TzoerData, 'id' | 'first_name' | 'last_name'>[];
}

export interface TzoerGQL {
  tzoer: TzoerData[];
}

export interface Tzoer {
  id: number;
  first_name: string;
  last_name: string;
  personal_id: string;
  role: {
    id: number;
    name: string;
  };
  team: {
    id: number;
    name: string;
  };
  pluga: {
    id: number;
    name: string;
  };
}
