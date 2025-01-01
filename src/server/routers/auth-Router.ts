import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { HTTPException } from "hono/http-exception"
import { router } from "../__internals/router"
import { publicProcedure } from "../procedures"

export const dynamic = "force-dynamic"

export const authRouter = router({
    
    // below function only returns wheter user in logged in or not
    getDatabaseSyncStatus: publicProcedure.query(async ({ c, ctx }) => {
        const auth = await currentUser()
        console.log("auth ",auth)

        if (!auth) {
            return c.json({ isSynced: false })
        }

        const user = await db.user.findFirst({
            where: { externalId: auth.id },
        })

        if (!user) {
            await db.user.create({
                data: {
                    quotaLimit: 100,
                    externalId: auth.id,
                    email: auth.emailAddresses[0].emailAddress,
                },
            })
            console.log("new user created")

            return c.json({ isSynced: true })
        }

        return c.json({ isSynced: true })
    }),
})

