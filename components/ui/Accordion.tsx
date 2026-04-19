"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
    items: {
        id: string | number;
        title: string;
        content: string;
        date?: string;
    }[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openId, setOpenId] = useState<string | number | null>(null);

    const toggleItem = (id: string | number) => {
        setOpenId(openId === id ? null : id);
    };

    if (!items || items.length === 0) {
        return <div className="text-center py-10 text-foreground/50">게시물이 없습니다.</div>;
    }

    return (
        <div className="space-y-4">
            {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div
                        key={item.id}
                        className="group bg-foreground/5 ring-1 ring-foreground/10 p-1 rounded-2xl flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lg hover:shadow-foreground/5 mb-4"
                    >
                        <div className="flex flex-col bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(1rem-0.25rem)] overflow-hidden transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full flex items-center justify-between p-6 text-left outline-none"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-4 break-keep">
                                        {item.title}
                                    </h3>
                                    {item.date && (
                                        <p className="text-sm text-foreground/50 mt-1 break-keep">
                                            {new Date(item.date).toLocaleDateString()}
                                        </p>
                                    )}
                                </div>
                                <ChevronDown
                                    className={`text-foreground/50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-6 pb-6 text-foreground/70 leading-relaxed border-t border-foreground/5 mt-2 pt-4 whitespace-pre-wrap break-keep">
                                            {item.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
