"use client";

import {
    GithubIcon,
    MailIcon,
    MessageSquareIcon,
    BookOpenIcon,
    GlobeIcon,
    ShieldIcon,
    HeartIcon,
    RssIcon
} from "lucide-react";

const navigation = {
    product: [
        { name: "Features", href: "#features" },
        { name: "Download", href: "#download" },
        { name: "Changelog", href: "#" },
        { name: "Development Roadmap", href: "#" },
    ],
    community: [
        { name: "Developer Community", href: "#developer" },
        { name: "Tech Blog", href: "#" },
        { name: "Feedback", href: "#" },
        { name: "Join Us", href: "#" },
    ],
    legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Use", href: "#" },
        { name: "Disclaimer", href: "#" },
    ],
    social: [
        {
            name: "WeChat Community",
            href: "#",
            icon: MessageSquareIcon,
            value: "1796060717",
        },
        {
            name: "GitHub",
            href: "https://github.com/langgptai",
            icon: GithubIcon,
        },
        {
            name: "Email",
            href: "mailto:ethereal_ai@hotmail.com",
            icon: MailIcon,
            value: "ethereal_ai@hotmail.com",
        },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                                <span className="text-2xl text-white">🚀</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                PingIt
                            </span>
                        </div>

                        {/* Introduction */}
                        <p className="text-sm leading-6 text-gray-600">
                            Stay ahead with real-time alerts for smarter business growth. Never miss a beat — PingIt delivers instant alerts for sales, user sign-ups, and critical events directly to your Discord.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            {/* Product */}
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Product</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.product.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-600 hover:text-blue-500 transition-colors duration-200"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Community */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Community</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.community.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-600 hover:text-blue-500 transition-colors duration-200"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Contact and Legal Information */}
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            {/* Contact */}
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact Us</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.social.map((item) => (
                                        <li key={item.name} className="flex items-center space-x-3">
                                            <item.icon className="h-5 w-5 text-gray-400" />
                                            <span className="text-sm leading-6 text-gray-600">
                                                {item.value || item.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Legal */}
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className="text-sm leading-6 text-gray-600 hover:text-blue-500 transition-colors duration-200"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Information */}
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    {/* Feature Tags */}
                    <div className="mb-8 flex flex-wrap justify-center gap-4">
                        {[
                            { text: "Cross-Platform Support", icon: GlobeIcon },
                            { text: "Encrypted Security", icon: ShieldIcon },
                            { text: "Continuous Updates", icon: RssIcon },
                            { text: "Dedicated Service", icon: HeartIcon },
                            { text: "Knowledge Sharing", icon: BookOpenIcon },
                        ].map((tag) => (
                            <span
                                key={tag.text}
                                className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700 ring-1 ring-inset ring-blue-700/10"
                            >
                                <tag.icon className="h-4 w-4 mr-2" />
                                {tag.text}
                            </span>
                        ))}
                    </div>

                    {/* Copyright Information */}
                    <div className="mt-8 border-t border-gray-900/10 pt-8 flex flex-col items-center">
                        <p className="text-xs leading-5 text-gray-500">
                            &copy; {new Date().getFullYear()} PingIt. All rights reserved.
                        </p>
                        {/* ICP备案 Information */}
                        <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                            <a
                                href="https://beian.miit.gov.cn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors duration-200"
                            >
                                京ICP备XXXXXXXX号-1
                            </a>
                            <span>|</span>
                            <a
                                href="http://www.beian.gov.cn/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors duration-200"
                            >
                                京公网安备 XXXXXXXXXXXXX号
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
