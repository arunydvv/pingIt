"use client";

import { motion } from "framer-motion";
import {
    ChatBubbleLeftRightIcon,
    GlobeAltIcon,
    BoltIcon,
    UserGroupIcon,
    SparklesIcon,
    ShieldCheckIcon,
    CursorArrowRaysIcon,
    DocumentTextIcon,
} from "@heroicons/react/24/outline";

const features = [
    {
        name: "Instant Alerts",
        description: "Receive real-time alerts for sales, user sign-ups, and critical events to make smarter business decisions.",
        icon: ChatBubbleLeftRightIcon,
        color: "from-blue-500 to-cyan-500",
    },
    {
        name: "Seamless Integration",
        description: "Easily integrate with popular platforms like Discord, Slack, and email to receive instant notifications.",
        icon: CursorArrowRaysIcon,
        color: "from-purple-500 to-pink-500",
    },
    {
        name: "Real-Time Data Insights",
        description: "Stay ahead of the competition by tracking live user activity, sales trends, and more.",
        icon: SparklesIcon,
        color: "from-amber-500 to-orange-500",
    },
    {
        name: "Secure Alerts",
        description: "Advanced security measures to ensure your data is safe while you receive critical alerts.",
        icon: ShieldCheckIcon,
        color: "from-green-500 to-emerald-500",
    },
    {
        name: "Fast Notifications",
        description: "Get alerts instantly with minimal delay, ensuring you never miss a key event.",
        icon: BoltIcon,
        color: "from-blue-500 to-violet-500",
    },
    {
        name: "Multi-Platform Support",
        description: "Supports multiple platforms for maximum convenience, from email to messaging apps like Discord.",
        icon: GlobeAltIcon,
        color: "from-teal-500 to-cyan-500",
    },
    {
        name: "AI-Powered Insights",
        description: "Leverage AI to analyze your data and provide actionable insights for better decision-making.",
        icon: DocumentTextIcon,
        color: "from-red-500 to-rose-500",
    },
    {
        name: "Custom Alerts",
        description: "Customize alert conditions to suit your business needs and priorities.",
        icon: UserGroupIcon,
        color: "from-fuchsia-500 to-pink-500",
    },
];

const Features = () => {
    return (
        <section id="features" className="pt-24 lg:pt-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
                <div className="absolute inset-0">
                    <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="features-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                                <path d="M0 .5H32M.5 0V32" fill="none" stroke="rgb(226 232 240 / 0.3)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#features-grid)" />
                    </svg>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-base font-semibold leading-7 text-blue-600">
                            Key Features
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Stay Ahead with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">PingIt</span> Alerts
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Never miss a critical event again. Stay updated with real-time alerts tailored to your business needs.
                        </p>
                    </motion.div>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="relative group">
                                    {/* Card content */}
                                    <div className="relative z-10 bg-white rounded-2xl p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                                        {/* Icon background */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-300" />
                                        <div className="relative">
                                            {/* Icon */}
                                            <div className="relative h-12 w-12">
                                                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.color} opacity-10`} />
                                                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                                                    <feature.icon
                                                        className={`h-6 w-6 bg-gradient-to-r ${feature.color} [&>path]:fill-transparent [&>path]:stroke-[url(#gradient)] stroke-2`}
                                                        aria-hidden="true"
                                                    />
                                                    <svg width="0" height="0">
                                                        <defs>
                                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                <stop offset="0%" className="[stop-color:var(--tw-gradient-from)]" />
                                                                <stop offset="100%" className="[stop-color:var(--tw-gradient-to)]" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </div>
                                            {/* Title and description */}
                                            <dt className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                                                {feature.name}
                                            </dt>
                                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                                {feature.description}
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </dl>
                </div>

                {/* Tech specifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-24 rounded-2xl bg-gray-50 p-8"
                >
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600">99.9%</div>
                            <div className="mt-2 text-sm text-gray-600">Service Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600">&lt;100ms</div>
                            <div className="mt-2 text-sm text-gray-600">Average Response Time</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600">50+</div>
                            <div className="mt-2 text-sm text-gray-600">Supported Platforms</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600">10M+</div>
                            <div className="mt-2 text-sm text-gray-600">Daily Alerts Sent</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
