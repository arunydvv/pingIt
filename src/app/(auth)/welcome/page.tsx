import LoadingSpinner from '@/components/LoadingSpinner';
import  {client}  from '@/lib/client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';


const page = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => {
      client 
    },
  })
    
 

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
