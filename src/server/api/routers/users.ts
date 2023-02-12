import { createTRPCRouter } from "@/server/api/trpc";

import { users } from "@/server/api/procedures/users";

export const usersRouter = createTRPCRouter({
  getAll: users,
});
