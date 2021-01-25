import { Router } from "https://deno.land/x/oak@v6.5.0/router.ts";
import { createUser } from "./handlers/createUser.ts";
import { deleteUser } from "./handlers/deleteUser.ts";
import { getAllUsers } from "./handlers/getAllUsers.ts";
import { getUser } from "./handlers/getUser.ts";
import { updateUser } from "./handlers/updateUser.ts";
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello World";
}).get("/users", getAllUsers)
  .get("/users/:id", getUser)
  .post("/users", createUser)
  .put("/users", updateUser)
  .delete("/users", deleteUser);

export default router;
