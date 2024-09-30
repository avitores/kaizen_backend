import express from "express";

import taskRoutes from '../routes/taskRoutes'

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.get("/welcome", (req, res) => {
  res.json({ message: "Hello! Welcome to Kaizen!" });
});
app.use('/api/v1/tasks', taskRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`))

export default app;
