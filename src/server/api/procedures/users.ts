import { z } from "zod";

import { publicProcedure } from "@/server/api/trpc";
import { prisma } from "@/server/db";

export const users = publicProcedure
  .input(z.object({}))
  .query(async ({ input }) => {
    const users = await prisma.user.findMany({
      where: {},
    });

    return {
      users,
    };
  });
