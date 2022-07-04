import { Knex } from "knex";

import { Post } from "./models";

declare module "knex/types/tables" {
  interface Tables {
    /** Posts type for select * */
    posts: Post;
    posts_composite: Knex.CompositeTableType<
      Post,
      /** title and content are mandatory (insert and update) */
      Pick<Post, "title", "content"> &
        /** created_at and updated_at are optional*/
        Partial<Pick<Post, "created_at" | "updated_at">>,
      /** id cannot be updated */
      Partial<Omit<Post, "id">>
    >;
  }
}
