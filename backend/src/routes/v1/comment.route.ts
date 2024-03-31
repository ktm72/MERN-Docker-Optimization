import express from "express";
import { CommentController } from "../../controller/comment.controller";

const router = express.Router();

router.post("/:blogId", CommentController.addComment);

router.get("/:blogId", CommentController.getBlogsComments);

router.get("/single/:id", CommentController.getComment);

router.patch("/:id", CommentController.updateComment);

router.delete("/:id", CommentController.deleteComment);

export default router;
