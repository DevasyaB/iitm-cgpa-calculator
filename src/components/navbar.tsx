"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-purple-500/50">
                            <Image
                                src="/logo.png"
                                alt="Namdapha Logo"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
                            Namdapha Scholar
                        </span>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
                        <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Home</Link>
                        <Link href="/calculator?program=ES" className="transition-colors hover:text-foreground/80 text-foreground/60">ES Calc</Link>
                        <Link href="/calculator?program=DS" className="transition-colors hover:text-foreground/80 text-foreground/60">DS Calc</Link>
                    </nav>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
