"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Code2, PenTool } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Support", href: "/support" },
];

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isServicesActive = pathname.startsWith("/services");

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md border-foreground/10 py-5 shadow-sm"
                        : "bg-transparent py-8"
                )}
            >
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    <Link href="/" className="text-2xl font-extrabold tracking-tighter text-slate-900 z-50 relative">
                        Webscape
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        <div className="flex space-x-8 items-center">
                            <Link
                                href="/about"
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-accent relative",
                                    pathname === "/about" ? "text-slate-900" : "text-slate-800"
                                )}
                            >
                                About
                                {pathname === "/about" && (
                                    <motion.div
                                        layoutId="active-nav-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>

                            {/* Services Mega Menu Trigger */}
                            <div
                                className="relative py-2"
                                onMouseEnter={() => setIsServicesHovered(true)}
                                onMouseLeave={() => setIsServicesHovered(false)}
                            >
                                <button className={cn(
                                    "flex items-center gap-1 text-base font-medium transition-colors hover:text-accent relative",
                                    isServicesActive ? "text-slate-900" : "text-slate-800"
                                )}>
                                    Services
                                    <ChevronDown size={14} className={cn(
                                        "transition-transform duration-300",
                                        isServicesHovered ? "rotate-180" : ""
                                    )} />
                                    {isServicesActive && !isServicesHovered && (
                                        <motion.div
                                            layoutId="active-nav-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>

                                {/* Desktop Mega Menu Dropdown */}
                                <AnimatePresence>
                                    {isServicesHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-background border border-foreground/10 rounded-2xl shadow-2xl overflow-hidden"
                                        >
                                            <div className="grid grid-cols-2 p-4 gap-2">
                                                <Link
                                                    href="/services/wordpress"
                                                    className="group flex flex-col p-4 rounded-xl hover:bg-foreground/5 transition-colors"
                                                    onClick={() => setIsServicesHovered(false)}
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-3">
                                                        <PenTool size={20} className="text-purple-500" />
                                                    </div>
                                                    <h4 className="font-bold text-foreground mb-1 group-hover:text-purple-500 transition-colors">워드프레스 브릭스</h4>
                                                    <p className="text-xs text-foreground/60 leading-relaxed">
                                                        합리적 비용, 빠른 구축.<br />프리미엄 템플릿 기반 웹사이트.
                                                    </p>
                                                </Link>
                                                <Link
                                                    href="/services/vibecoding"
                                                    className="group flex flex-col p-4 rounded-xl hover:bg-foreground/5 transition-colors"
                                                    onClick={() => setIsServicesHovered(false)}
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                                                        <Code2 size={20} className="text-accent" />
                                                    </div>
                                                    <h4 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">바이브 코딩</h4>
                                                    <p className="text-xs text-foreground/60 leading-relaxed">
                                                        한계 없는 맞춤 개발.<br />최신 프레임워크와 압도적 퍼포먼스.
                                                    </p>
                                                </Link>
                                            </div>
                                            <div className="bg-foreground/5 p-4 border-t border-foreground/10 flex justify-between items-center">
                                                <span className="text-xs font-semibold text-foreground/70">어떤 서비스가 필요하신가요?</span>
                                                <Link href="/contact" className="text-xs font-bold text-accent hover:underline">프로젝트 문의하기 →</Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                href="/portfolio"
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-accent relative",
                                    pathname === "/portfolio" ? "text-slate-900" : "text-slate-800"
                                )}
                            >
                                Portfolio
                                {pathname === "/portfolio" && (
                                    <motion.div
                                        layoutId="active-nav-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>

                            <Link
                                href="/support"
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-accent relative",
                                    pathname === "/support" ? "text-slate-900" : "text-slate-800"
                                )}
                            >
                                Support
                                {pathname === "/support" && (
                                    <motion.div
                                        layoutId="active-nav-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>

                        </div>

                        <div className="h-4 w-[1px] bg-foreground/20" />

                        <Link
                            href="/contact"
                            className="px-5 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-full transition-all shadow-md shadow-accent/20 hover:shadow-accent/40 active:scale-95"
                        >
                            프로젝트 문의
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 relative p-2 -mr-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
                    >
                        <nav className="flex flex-col space-y-6 flex-1">
                            <Link
                                href="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn("text-2xl font-bold transition-colors", pathname === "/about" ? "text-accent" : "text-foreground")}
                            >
                                About
                            </Link>

                            {/* Mobile Services Accordion Simulation */}
                            <div className="flex flex-col space-y-4">
                                <span className={cn("text-2xl font-bold transition-colors", isServicesActive ? "text-accent" : "text-foreground")}>Services</span>
                                <div className="pl-6 flex flex-col space-y-4 border-l-2 border-foreground/10 ml-2">
                                    <Link
                                        href="/services/wordpress"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn("text-lg font-medium", pathname === "/services/wordpress" ? "text-purple-500" : "text-foreground/70")}
                                    >
                                        워드프레스 브릭스
                                    </Link>
                                    <Link
                                        href="/services/vibecoding"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn("text-lg font-medium", pathname === "/services/vibecoding" ? "text-accent" : "text-foreground/70")}
                                    >
                                        바이브 코딩
                                    </Link>
                                </div>
                            </div>

                            <Link
                                href="/portfolio"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn("text-2xl font-bold transition-colors", pathname === "/portfolio" ? "text-accent" : "text-foreground")}
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/support"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn("text-2xl font-bold transition-colors", pathname === "/support" ? "text-accent" : "text-foreground")}
                            >
                                Support
                            </Link>
                        </nav>
                        <div className="mt-8 border-t border-foreground/10 pt-6">
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full px-5 py-4 text-base font-bold text-white bg-accent rounded-xl"
                            >
                                프로젝트 문의하기
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
