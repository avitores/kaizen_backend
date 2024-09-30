import { Request, Response } from 'express'
import { StatusCodes } from "http-status-codes"
import { TaskSchemaValidate } from '../models/task'

import { TaskFacade } from '../facades/TaskFacade';


export class TaskController {
  private taskFacade: TaskFacade;

  constructor() {
    this.taskFacade = new TaskFacade();
  }

  createTask = async (req: Request, res: Response): Promise<void> => {
		try {
			//validating the request
			const { error } = TaskSchemaValidate.validate(req.body);

			if(error){
				res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
			}else{
				const { title, description } = req.body;
				const newTask = await this.taskFacade.createTask(title, description);
				res.status(StatusCodes.CREATED).json(newTask);
			}
		} catch (error) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error });
		}
  };


  getAllTasks = async (_req: Request, res: Response) => {
    try {
      const tasks = await this.taskFacade.getAllTasks();
      res.json(tasks);
    } catch (error) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error });
    }
  };


  getTaskById = async (req: Request, res: Response) => {
    try {
			const id = req.params.id
      const task = await this.taskFacade.getTaskById(id);
      if (task) {
        res.json(task);
      } else {
        res.status(StatusCodes.NOT_FOUND).json({ error: `Task not found. id (${id})` });
      }
    } catch (error) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error });
    }
  };


  updateTask = async (req: Request, res: Response) => {
    try {
			const { error } = TaskSchemaValidate.validate(req.body);
			if(error){
				res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
      } else {
				const id = req.params.id
				const { title, description } = req.body;
				const updatedTask = await this.taskFacade.updateTask(id, { title, description });
				if (updatedTask) {
					res.status(StatusCodes.OK).json(updatedTask);
				} else {
					res.status(StatusCodes.NOT_FOUND).json({ error: `Task not found. id (${id})` });
				}
			}				
    } catch (error) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error });
    }
  };


  deleteTask = async (req: Request, res: Response) => {
    try {
			const id = req.params.id
      const success = await this.taskFacade.deleteTask(id);
      if (success) {
				res.status(StatusCodes.OK).json({ deleted: success });
      } else {
				res.status(StatusCodes.NOT_FOUND).json({ error: `Task not found. id (${id})` });
      }
    } catch (error) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error });
    }
  };

};

