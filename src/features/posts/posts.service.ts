import { Post } from "../../../knex/types/models";
import knex from "../../config/database";

export const getAll = async () => {
  return knex("posts").select("*");
};

export const getById = async (id: number) => {
  return knex("posts")
    .select("*")
    .where({
      id,
    })
    .first();
};

export const create = async (post: Omit<Post, "id">) => {
  await knex("posts").insert({
    title: post.title,
    content: post.content,
  });
  return {
    title: post.title,
    content: post.content,
  };
};

export const updateById = async (id: number, post: Omit<Post, "id">) => {
  await knex("posts")
    .update({ title: post.title, content: post.content })
    .where({ id });

  return { title: post.title, content: post.content };
};

export const deleteById = async (id: number) => {
  return knex("posts").where({ id }).del();
};
