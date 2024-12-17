import { currentUser } from "@clerk/nextjs/server";
import { router } from "../__internals/router";
import { privateProcedure } from "../procedures";
import { db } from "@/db";


const authRouter = router({
    getDatabaseSyncStatus: privateProcedure.query(async ({ c, ctx }) => {
        const auth = await currentUser()
        if (!auth) {
            return c.json({
                isSynced: false
            })
        }

        const user = await db.user.findFirst({
            where : {externalId : auth.id}
        })
        if (!user) {
            
        }
        return c.json({
            status : "success"
        })

        
    }),

})

export const GET = (req: Request) => {
    return new Response(JSON.stringify({
        status: "success"
    }))
}


export default authRouter
