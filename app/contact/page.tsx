"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Upload, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "new" | "modify";

export default function ContactPage() {
    const [activeTab, setActiveTab] = useState<TabType>("new");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{ show: boolean; type: "success" | "error"; msg: string }>({
        show: false,
        type: "success",
        msg: "",
    });
    const [budget, setBudget] = useState("");
    const [timeline, setTimeline] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API Request (Resend + Supabase Insert)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setToast({
            show: true,
            type: "success",
            msg: "문의가 성공적으로 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.",
        });

        (e.target as HTMLFormElement).reset();
        setBudget("");
        setTimeline("");

        setTimeout(() => {
            setToast((prev) => ({ ...prev, show: false }));
        }, 4000);
    };

    const inputClasses =
        "w-full px-4 py-3 bg-foreground/[0.03] border border-foreground/10 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-foreground";
    const labelClasses = "block text-sm font-medium text-foreground/80 mb-2";

    return (
        <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground"
                    >
                        프로젝트 문의
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/70 text-lg"
                    >
                        웹스케이프와 함께 한계 없는 웹 브랜딩을 시작하세요.
                    </motion.p>
                </div>

                {/* Custom Tabs */}
                <div className="flex p-1 bg-foreground/5 rounded-2xl mb-12">
                    <button
                        onClick={() => setActiveTab("new")}
                        className={cn(
                            "flex-1 py-3 text-sm font-bold rounded-xl transition-all relative",
                            activeTab === "new" ? "text-background" : "text-foreground hover:text-foreground/80"
                        )}
                    >
                        {activeTab === "new" && (
                            <motion.div
                                layoutId="tab-indicator"
                                className="absolute inset-0 bg-foreground rounded-xl"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">신규 제작 문의</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("modify")}
                        className={cn(
                            "flex-1 py-3 text-sm font-bold rounded-xl transition-all relative",
                            activeTab === "modify" ? "text-background" : "text-foreground hover:text-foreground/80"
                        )}
                    >
                        {activeTab === "modify" && (
                            <motion.div
                                layoutId="tab-indicator"
                                className="absolute inset-0 bg-foreground rounded-xl"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">유지보수 및 고도화</span>
                    </button>
                </div>

                {/* Form Container */}
                <form onSubmit={handleSubmit} className="group bg-foreground/5 ring-1 ring-foreground/10 p-1.5 rounded-[2.5rem] shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-2xl hover:shadow-accent/5">
                    <div className="bg-background shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] rounded-[calc(2.5rem-0.375rem)] p-8 md:p-10 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <AnimatePresence mode="wait">
                        {activeTab === "new" ? (
                            <motion.div
                                key="new"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <div className="grid md:grid-cols-1 gap-6">
                                    <div>
                                        <label className={labelClasses}>회사명 / 브랜드명 *</label>
                                        <input type="text" required placeholder="웹스케이프 컴퍼니" className={inputClasses} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClasses}>담당자 성함 / 직급 *</label>
                                        <input type="text" required placeholder="홍길동 대표" className={inputClasses} />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>연락처 *</label>
                                        <input type="tel" required placeholder="010-0000-0000" className={inputClasses} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-1 gap-6">
                                    <div>
                                        <label className={labelClasses}>이메일 *</label>
                                        <input type="email" required placeholder="example@company.com" className={inputClasses} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClasses}>희망 예산 (VAT 별도) *</label>
                                        <div className="relative">
                                            <select
                                                required
                                                value={budget}
                                                onChange={(e) => setBudget(e.target.value)}
                                                className={cn(
                                                    inputClasses,
                                                    "appearance-none bg-transparent",
                                                    budget === "" ? "text-gray-400 dark:text-gray-500" : "text-foreground"
                                                )}
                                            >
                                                <option value="" disabled selected>예산 범위를 선택해주세요</option>
                                                <option value="under-300">300만 원 이하</option>
                                                <option value="300-500">300만 원 ~ 500만 원</option>
                                                <option value="500-1000">500만 원 ~ 1,000만 원</option>
                                                <option value="over-1000">1,000만 원 이상</option>
                                                <option value="undetermined">예산 미정</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/40 font-bold">↓</div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelClasses}>희망 오픈 일정 *</label>
                                        <div className="relative">
                                            <select
                                                required
                                                value={timeline}
                                                onChange={(e) => setTimeline(e.target.value)}
                                                className={cn(
                                                    inputClasses,
                                                    "appearance-none bg-transparent",
                                                    timeline === "" ? "text-gray-400 dark:text-gray-500" : "text-foreground"
                                                )}
                                            >
                                                <option value="" disabled selected>일정을 선택해주세요</option>
                                                <option value="within-1month">1개월 이내 (빠른 구축 필요)</option>
                                                <option value="2-3months">2~3개월 이내</option>
                                                <option value="over-3months">3개월 이상 (여유로움)</option>
                                                <option value="undetermined">미정</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/40 font-bold">↓</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClasses}>참고할 만한 레퍼런스 스타일 (선택)</label>
                                    <input type="text" placeholder="https://example.com" className={inputClasses} />
                                </div>

                                <div>
                                    <label className={labelClasses}>세부 문의 내용 *</label>
                                    <textarea
                                        required
                                        placeholder="프로젝트의 목적, 주요 기능, 타겟 고객 등을 상세히 적어주시면 더 정확한 상담이 가능합니다."
                                        className={cn(inputClasses, "h-40 resize-none")}
                                    ></textarea>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="modify"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <div className="grid md:grid-cols-1 gap-6">
                                    <div>
                                        <label className={labelClasses}>회사명 / 브랜드명 *</label>
                                        <input type="text" required placeholder="웹스케이프 컴퍼니" className={inputClasses} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClasses}>담당자 성함 / 직급 *</label>
                                        <input type="text" required placeholder="홍길동 대표" className={inputClasses} />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>연락처 *</label>
                                        <input type="tel" required placeholder="010-0000-0000" className={inputClasses} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClasses}>기존 프로젝트 진행 이메일 *</label>
                                        <input type="email" required placeholder="기존 프로젝트 진행 이메일 *" className={inputClasses} />
                                    </div>
                                    <div>
                                        <label className={labelClasses}>웹사이트 URL *</label>
                                        <input type="url" required placeholder="https://yourwebsite.com" className={inputClasses} />
                                    </div>
                                </div>

                                <div>
                                    <label className={labelClasses}>유지보수 및 고도화 요청 사항 *</label>
                                    <textarea
                                        required
                                        placeholder="레이아웃 변경, 기능 추가, 플러그인 충돌 등 수정이 필요한 내용을 상세히 적어주세요."
                                        className={cn(inputClasses, "h-40 resize-none")}
                                    ></textarea>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Common Fields for both tabs */}
                    <div className="mt-6">
                        <label className={labelClasses}>첨부 파일 (선택)</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-foreground/10 border-dashed rounded-xl transition-colors cursor-pointer block">
                            <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-foreground/30" />
                                <div className="flex text-sm text-foreground/60 justify-center">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-accent hover:text-accent/80">
                                        <span>파일 업로드</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">또는 드래그 앤 드롭</p>
                                </div>
                                <p className="text-xs text-foreground/40">PNG, JPG, PDF 최대 10MB</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="privacy"
                                name="privacy"
                                type="checkbox"
                                required
                                className="w-4 h-4 rounded border-foreground/20 text-accent focus:ring-accent bg-background"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="privacy" className="font-medium text-foreground/70">
                                개인정보 수집 및 이용에 동의합니다. *
                            </label>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full relative flex items-center justify-center bg-accent text-white px-8 py-5 rounded-full font-bold text-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:bg-accent/90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_40px_rgba(59,130,246,0.2)]"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2 relative z-10">
                                    <span className="h-4 w-4 rounded-full border-2 border-white/20 border-t-white animate-spin"></span>
                                    접수 처리 중...
                                </span>
                            ) : (
                                <span className="relative z-10">문의 접수하기</span>
                            )}
                        </button>
                    </div>
                    </div>
                </form>
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {toast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", bounce: 0.3 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
                    >
                        <div className={cn(
                            "flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl backdrop-blur-md text-sm font-medium border",
                            toast.type === "success"
                                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                : "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400"
                        )}>
                            {toast.type === "success" ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                            {toast.msg}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
