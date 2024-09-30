import Joi from 'joi'

//validation schema
export const TaskSchemaValidate = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    description: Joi.string().min(3).required(),
})

export interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

export const initialTask: Task = {
  id: "0123456789",
  title: "Pasear al perro",
  description: "Sacar al perro a pasear",
  createdAt: new Date("2024-09-30T19:16:16.650Z")
};
