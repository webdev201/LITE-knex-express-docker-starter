import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("posts").del();

  // Inserts seed entries
  await knex("posts").insert([
    { id: 1, title: "Post 1", content: "post 1 content" },
    { id: 2, title: "Post 2", content: "post 2 content" },
    { id: 3, title: "Post 3", content: "post 3 content" },
  ]);
}
