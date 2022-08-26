export interface TaskData {
  id: number;
  description: string;
  deadline: string;
}

export interface TaskGQL {
  tasks: TaskData[];
}

export interface FinishTaskGQL {
  finish_tasks: [
    {
      id: number;
      task_id: number;
    }
  ];
}

export type Task = TaskData & {
  isFinished: boolean;
};
