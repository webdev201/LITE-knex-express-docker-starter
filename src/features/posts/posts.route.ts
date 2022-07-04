import { Router } from "express";

import * as postController from "./posts.controller";

const router = Router({ mergeParams: true });

router.get("/", postController.getAll);
router.post("/", postController.create);
router.get("/:id", postController.getById);
router.put("/:id", postController.updateById);
router.delete("/:id", postController.deleteById);

export default router;
