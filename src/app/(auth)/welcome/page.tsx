"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const { user } = useUser();
  const [error, setError] = useState(null);

  useEffect(() => {
    const syncUser = async () => {
      if (!user) {
        router.push("/");
        return;
      }

      try {
        const userData = {
          externalId: user.id,
          email: user.primaryEmailAddress?.emailAddress || "",
        };

        // Send user details to your backend and get the full user model
        const response = await fetch("/api/users/sync", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          const userDetails = await response.json();
          console.log("Synced User Details:", userDetails);

          // Redirect to dashboard after syncing
          router.push("/dashboard");
        } else {
          const message = await response.text();
          console.error("Failed to sync user data:", message);

        }
      } catch (error) {
        console.error("Error syncing user data:", error);
      }
    };

    syncUser();
  }, [user, router]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 md:h-[50vh] md:mt-[15vh]">
      <LoadingSpinner size={12} />
      {error ? (
        <span className="mt-4 text-red-500 text-base text-center">
          {error}
        </span>
      ) : (
        <>
          <span className="mt-4 text-base md:text-lg font-semibold text-gray-700 text-center">
            Bringing the magic to life for you on PingIt! 🚀
          </span>
          <span className="mt-2 text-sm md:text-base text-gray-500 text-center">
            Your real-time alerts are getting ready to roll in.
          </span>
        </>
      )}
    </div>
  );
};

export default Page;
