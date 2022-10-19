import { Router, Request, Response } from "express";

const router = Router();

router.route("/create")
    .get((req: Request, res: Response)=>{
        res.send("Recieved")
    })

export default router;