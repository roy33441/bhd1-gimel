export interface Task {
    id: number;
    title: string;
    date: string;
  }
  
export interface TaskGQL {
  tasks: Task[];
}

export type AddTask = Task & {
  team_id: number;
};