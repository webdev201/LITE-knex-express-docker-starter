import { Router } from "express";

import postRoutes from "../features/posts/posts.route";

const router = Router({ mergeParams: true });

router.use("/posts", postRoutes);

export default router;
