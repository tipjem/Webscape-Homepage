"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Bell, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PRIMARY_LINKS = [
    { name: "홈페이지 제작", href: "/services" },
    { name: "포트폴리오", href: "/portfolio" },
    { name: "소개", href: "/about" },
];

const SUPPORT_SUB_ITEMS = [
    {
        name: "공지사항",
        href: "/notice",
        description: "웹스케이프의 새로운 소식과 안내",
        icon: Bell,
    },
    {
        name: "자주 묻는 질문 (Q&A)",
        href: "/support",
        description: "제작·비용·AEO 자주 묻는 질문",
        icon: HelpCircle,
    },
];

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSupportHovered, setIsSupportHovered] = useState(false);
    const [isMobileSupportOpen, setIsMobileSupportOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isSupportActive = pathname === "/support" || pathname.startsWith("/notice") || pathname.startsWith("/qna");
    const isDarkTheme = true;

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter,padding] duration-300 py-4 md:py-5",
                    isScrolled
                        ? isDarkTheme
                            ? "bg-gradient-to-b from-white/[0.06] via-black/40 to-black/50 backdrop-blur-xl md:backdrop-blur-2xl backdrop-saturate-150 border-b border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_12px_32px_-4px_rgba(0,0,0,0.6)]"
                            : "bg-background/80 backdrop-blur-md border-foreground/10 shadow-sm"
                        : "bg-transparent border-b border-transparent"
                )}
            >
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    <Link
                        href="/"
                        className={cn(
                            "text-2xl font-extrabold tracking-tighter z-50 relative flex items-center transition-colors",
                            isDarkTheme ? "text-[#F5F1EB]" : "text-slate-900"
                        )}
                    >
                        <span>Webscape</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        <div className="flex space-x-8 items-center">
                            {PRIMARY_LINKS.map((item) => {
                                const isActive = item.href === "/services"
                                    ? pathname.startsWith("/services")
                                    : pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-base font-medium transition-colors hover:text-accent relative py-1",
                                            isDarkTheme
                                                ? "text-[#F5F1EB]/85 hover:text-[#FF6B35]"
                                                : isActive ? "text-slate-900" : "text-slate-800"
                                        )}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-nav-indicator"
                                                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF6B35]"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}

                            {/* 고객지원 (드롭다운) */}
                            <div
                                className="relative py-1"
                                onMouseEnter={() => setIsSupportHovered(true)}
                                onMouseLeave={() => setIsSupportHovered(false)}
                            >
                                <button
                                    className={cn(
                                        "flex items-center gap-1.5 text-base font-medium transition-colors hover:text-accent relative py-1",
                                        isDarkTheme
                                            ? "text-[#F5F1EB]/85 hover:text-[#FF6B35]"
                                            : isSupportActive ? "text-slate-900" : "text-slate-800"
                                    )}
                                    aria-haspopup="true"
                                    aria-expanded={isSupportHovered}
                                >
                                    <span>고객지원</span>
                                    <ChevronDown
                                        size={14}
                                        className={cn(
                                            "transition-transform duration-300",
                                            isSupportHovered ? "rotate-180 text-[#FF6B35]" : ""
                                        )}
                                    />
                                    {isSupportActive && !isSupportHovered && (
                                        <motion.div
                                            layoutId="active-nav-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF6B35]"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>

                                {/* Desktop Support Dropdown */}
                                <AnimatePresence>
                                    {isSupportHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.96 }}
                                            transition={{ duration: 0.18, ease: "easeOut" }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[300px] bg-[#120704]/90 border border-white/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.12)] overflow-hidden backdrop-blur-2xl p-2 z-50"
                                        >
                                            <div className="flex flex-col space-y-1">
                                                {SUPPORT_SUB_ITEMS.map((sub) => {
                                                    const Icon = sub.icon;
                                                    const isSubActive = sub.href === "/support"
                                                        ? pathname === "/support" || pathname.startsWith("/qna")
                                                        : pathname.startsWith("/notice");

                                                    return (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href}
                                                            onClick={() => setIsSupportHovered(false)}
                                                            className={cn(
                                                                "group flex items-start gap-3 p-3 rounded-xl transition-[background-color,border-color] border border-transparent",
                                                                isSubActive
                                                                    ? "bg-white/[0.06] border-white/10"
                                                                    : "hover:bg-white/5 hover:border-white/5"
                                                            )}
                                                        >
                                                            <div className="w-9 h-9 rounded-xl bg-[#FF6B35]/15 flex items-center justify-center text-[#FF6B35] shrink-0 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-200">
                                                                <Icon size={18} />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-bold text-sm text-[#F5F1EB] group-hover:text-[#FF6B35] transition-colors leading-tight mb-1">
                                                                    {sub.name}
                                                                </h4>
                                                                <p className="text-xs text-[#F5F1EB]/60 leading-relaxed">
                                                                    {sub.description}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className={cn("h-4 w-[1px]", isDarkTheme ? "bg-white/20" : "bg-foreground/20")} />

                        {/* 문의버튼 */}
                        <Link
                            href="/contact"
                            className="px-5 py-2 text-sm font-medium text-white bg-[#FF6B35] hover:bg-[#FF7A47] rounded-full transition-[background-color,box-shadow,transform] duration-200 shadow-md shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/45 active:scale-95"
                        >
                            프로젝트 문의
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "md:hidden z-50 relative p-2 -mr-2 transition-colors",
                            isDarkTheme ? "text-[#F5F1EB]" : "text-foreground"
                        )}
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
                        className="fixed inset-0 z-40 bg-[#160B07]/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
                    >
                        <nav className="flex flex-col space-y-6 flex-1">
                            {PRIMARY_LINKS.map((item) => {
                                const isActive = item.href === "/services"
                                    ? pathname.startsWith("/services")
                                    : pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "text-2xl font-bold transition-colors",
                                            isActive ? "text-[#FF6B35]" : "text-[#F5F1EB]"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}

                            {/* Mobile 고객지원 (아코디언) */}
                            <div className="flex flex-col space-y-3 pt-1">
                                <button
                                    onClick={() => setIsMobileSupportOpen(!isMobileSupportOpen)}
                                    className="flex items-center justify-between text-left text-2xl font-bold transition-colors text-[#F5F1EB]"
                                >
                                    <span className={cn(isSupportActive ? "text-[#FF6B35]" : "text-[#F5F1EB]")}>고객지원</span>
                                    <ChevronDown
                                        size={20}
                                        className={cn("transition-transform duration-300 text-[#F5F1EB]/60", isMobileSupportOpen ? "rotate-180 text-[#FF6B35]" : "")}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isMobileSupportOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="pl-4 flex flex-col space-y-3 border-l-2 border-[#FF6B35]/30 ml-2 overflow-hidden"
                                        >
                                            {SUPPORT_SUB_ITEMS.map((sub) => {
                                                const Icon = sub.icon;
                                                const isSubActive = sub.href === "/support"
                                                    ? pathname === "/support" || pathname.startsWith("/qna")
                                                    : pathname.startsWith("/notice");

                                                return (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={cn(
                                                            "flex items-center gap-2.5 text-lg font-medium transition-colors py-1",
                                                            isSubActive ? "text-[#FF6B35]" : "text-[#F5F1EB]/75"
                                                        )}
                                                    >
                                                        <Icon size={16} className={isSubActive ? "text-[#FF6B35]" : "text-[#F5F1EB]/50"} />
                                                        <span>{sub.name}</span>
                                                    </Link>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </nav>

                        <div className="mt-8 border-t border-white/10 pt-6">
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full px-5 py-4 text-base font-bold text-white bg-[#FF6B35] hover:bg-[#FF7A47] rounded-xl shadow-lg shadow-[#FF6B35]/25 transition-colors"
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
