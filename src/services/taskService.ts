import { Task, initialTask } from '../models/task';

export class TaskService {
  private tasks: Task[] = [initialTask];

  async addTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  async getAllTasks(): Promise<Task[]> {
    return this.tasks;
  }

  async getTaskById(id: string): Promise<Task | null> {
    return this.tasks.find(task => task.id === id) || null;
  }

  async updateTask(id: string, updates: Partial<Task>): Promise<Task | null> {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) return null;
    this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updates };
    return this.tasks[taskIndex];
  }

  async deleteTask(id: string): Promise<boolean> {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this.tasks.length < initialLength;
  }
}
