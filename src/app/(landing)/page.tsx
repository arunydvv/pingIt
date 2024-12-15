import styles from '@/app/home.module.css';
import { cn } from '@/utils';
import { Check } from "lucide-react";
import { Inter } from 'next/font/google';
import Heading from '@/components/Heading';
import NiceButton from '@/components/NiceButton';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import {DiscordMessage} from '@/components/DiscordMessage';
import {MockDiscordApp} from '@/components/MockDiscordApp';
import { AnimatedList, AnimatedListItem } from '@/components/ui/animated-list';

const inter = Inter({ subsets: ['latin'] });

const features = [
  "Real-time Discord alerts for critical events",
  "Buy once, use Forever",
  "Track sales, new users, or any other event"
];

const page = () => {
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

      
      <section className='relative bg-brand-25 pb-4 '>
        <div className='absolute inset-x-0 bottom-24 top-24 bg-brand-600'>
          <MaxWidthWrapper className='relative'>
            <div
              className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4' >
              <MockDiscordApp>
                <AnimatedList>
                  <AnimatedListItem>
                    <DiscordMessage
                      avatarSrc='/brand-asset-profile-picture.png'
                      avatarAlt='PingIt Avatar'
                      username='PingIt'
                      timestamp={`Today at ${new Date().getHours()}:${new Date().getMinutes()} PM`}
                      badgeText='SignUp'
                      badgeColor='#43b581'
                      title='👤 New User Signed Up!'
                      content={{
                        name: "John Doe",
                        email: "johndoe@example.com",
                      }}
                    >
                    </DiscordMessage>

                    <DiscordMessage
                      avatarSrc='/brand-asset-profile-picture.png'
                      avatarAlt='PingIt Avatar'
                      username='PingIt'
                      timestamp={`Today at ${new Date().getHours()}:${new Date().getMinutes()} PM`}
                      badgeText='Payment'
                      badgeColor='#faa61a'
                      title='💸 Payment Received!'
                      content={{
                        name: "Sarah Lee",
                        amount: "$49.99",
                        paymentMethod: "Credit Card",
                      }}
                    >
                    </DiscordMessage>






                  </AnimatedListItem>

                </AnimatedList>
              </MockDiscordApp>
                </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section></section>
      <section></section>

    </>
  );
};

export default page;

