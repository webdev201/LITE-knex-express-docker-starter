import { Request, Response } from "express";
import { Post } from "../../../knex/types/models";

import * as postService from "./posts.service";

type RequestParams = {
  id: string;
};

type PostBodyParams = Omit<Post, "id">;

export const getAll = async (req: Request, res: Response) => {
  const posts = await postService.getAll();
  return res.json(posts);
};

export const getById = async (req: Request<RequestParams>, res: Response) => {
  const { id } = req.params;

  const post = await postService.getById(parseInt(id, 10));
  return res.json(post);
};

export const create = async (
  req: Request<{}, {}, PostBodyParams>,
  res: Response
) => {
  const { title, content } = req.body;
  const updatedPost = await postService.create({
    title,
    content,
  });
  return res.status(201).json(updatedPost);
};

export const updateById = async (
  req: Request<RequestParams, {}, PostBodyParams>,
  res: Response
) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedPost = await postService.updateById(parseInt(id, 10), {
    title,
    content,
  });
  return res.json(updatedPost);
};

export const deleteById = async (
  req: Request<RequestParams>,
  res: Response
) => {
  const { id } = req.params;
  await postService.deleteById(parseInt(id, 10));
  return res.sendStatus(204);
};
