
import { TaskFactory } from '../factories/taskFactory';
import { TaskService } from '../services/taskService';
import { Task } from '../models/task';

export class TaskFacade {
  private taskFactory: TaskFactory;
  private taskService: TaskService;

  constructor() {
    this.taskFactory = new TaskFactory();
    this.taskService = new TaskService();
  }

  async createTask(title: string, description: string): Promise<Task> {
    const task = this.taskFactory.createTask(title, description);
    return this.taskService.addTask(task);
  }

  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  async getTaskById(id: string): Promise<Task | null> {
    return this.taskService.getTaskById(id);
  }

  async updateTask(id: string, updates: Partial<Task>): Promise<Task | null> {
    return this.taskService.updateTask(id, updates);
  }

  async deleteTask(id: string): Promise<boolean> {
    return this.taskService.deleteTask(id);
  }
}
