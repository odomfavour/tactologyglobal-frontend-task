import { Assignee } from './Assignee';

export interface Task {
  id: number;
  name: string;
  date: string;
  assignees: Assignee[];
  extraCount: number;
  priority: string;
  priorityColor: string;
}
