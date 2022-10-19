import { Router, Request, Response } from "express";

const router = Router();

import Task from "../models/Task";

router
  .route("/create")
  .get((req: Request, res: Response) => {
    res.render("tasks/create");
  })
  .post(async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.send("Saved");
  });

router.route("/list").get((req: Request, res: Response) => {
  res.render("tasks/list");
});

export default router;
