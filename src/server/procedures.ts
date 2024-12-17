import { j } from "./__internals/j"

const authMiddleware = j.middleware(async ({ next }) => {
    const user = ({name : "Arun"})
    return next({user});
})


export const baseProcedure = j.procedure
export const publicProcedure = baseProcedure

export const privateProcedure = publicProcedure.use(authMiddleware)