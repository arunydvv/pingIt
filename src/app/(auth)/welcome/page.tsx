"use client"
import LoadingSpinner from '@/components/LoadingSpinner';
import { client } from '@/lib/client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';



const page = () => {
  const router = useRouter()

  const { data } = useQuery({
    queryFn: async () => {
      const res = await client.auth.getDatabaseSyncStatus.$get()
      return await res.json()
    },
    queryKey: ["get-database-sync-status"],
    refetchInterval: (query) => {
      return query.state.data?.isSynced ? false : 1000
    },
  })

  useEffect(() => {
    if (data?.isSynced) router.push("/dashboard")
  }, [data, router])



  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center px-4 md:h-[50vh] md:mt-[15vh]'>
        <LoadingSpinner />
        <span className='mt-4 text-base md:text-lg font-semibold text-gray-700 text-center'>"Bringing the magic to life for you on PingIt! 🚀"</span>
        <span className='mt-2 text-sm md:text-base text-gray-500 text-center'>"Your real-time alerts are getting ready to roll in."</span>
      </div>
    </>
  );
};

export default page;
