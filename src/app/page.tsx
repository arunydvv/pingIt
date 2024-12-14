import React from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/utils';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import Heading from './components/Heading';
import styles from '@/app/home.module.css'
const inter = Inter({ subsets: ['latin'] });
import {Check} from "lucide-react"
import NiceButton from './components/NiceButton';

const features = [
  "Real-time Discord alerts for critical events",
  "Buy once, use Forever",
  "Track sales , new users, or any other event"
];

const Page = () => {
  return (
    <>
      <section className={cn('relative py-24 sm:py-32 bg-brand-25', inter.className)}>
        <MaxWidthWrapper className=''>
          <div className='relative mx-auto text-center flex flex-col font-Inter items-center gap-10'>
            <div>
              <Heading>
                <span>
                  Real-Time SaaS Insights
                  <br />
                  <span className={`relative bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text ${styles.animateText}`}>
                    Delivered to your Discord
                  </span>

                </span>
              </Heading>
            </div>
            <p className='text-base/7 text-gray-600 max-w-prose text-center text-pretty'><b>PingIt</b> is the ultimate solution to monitor your Saas. Get real-time insights for  {" "}
              <span className='font-semibold text-gray-700 '> 
              sales, new users, or any other event</span> {" "}
              on your Saas  </p>
            <ul className='space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start'>
              {features.map((item, index) => (
                <li className='flex gap-1.5 items-center text-left' key={index}>
                 
                  <Check className="size-5 shrink-0 text-brand-700  " />
                  {item} 
               </li>
              ))}

            </ul>
            <div className='w-full max-w-80 '>
              <NiceButton
                className='relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-300'
              >Get Started</NiceButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        {/* Placeholder content for section 2 */}
      </section>

      <section>
        {/* Placeholder content for section 3 */}
      </section>

      <section>
        {/* Placeholder content for section 4 */}
      </section>
    </>
  );
};

export default Page;

