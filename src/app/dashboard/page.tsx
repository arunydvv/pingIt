import { db } from "@/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
    const auth = await currentUser();

    if (!auth) {
        redirect("/sign-in");
    }
    const user = await db.user.findUnique({
        where: {
            externalId: auth.id,
        },
    });

    if (!user) {
        redirect("/sign-in");
    }

    return (
        <div>
            <h1>Welcome, {user.email}</h1>
            <p>Your plan: {user.plan}</p>
            <p>Quota Limit: {user.quotaLimit}</p>
        </div>
    );
};

export default Page;
