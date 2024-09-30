
import { Task } from '../models/task';
//import { v4 as uuidv4 } from 'uuid';

export class TaskFactory {

  private generateId(): string {
    return Math.random().toString(36).substring(2);
  }

  createTask(title: string, description: string): Task {
    return {
      id: this.generateId(),
      title: title,
      description: description,
      createdAt: new Date()
    };
  }
}

