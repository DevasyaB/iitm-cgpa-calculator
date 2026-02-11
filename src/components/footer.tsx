import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-8 bg-purple-50/50 dark:bg-zinc-900/50 backdrop-blur-sm">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex items-center justify-center gap-6">
                    <Link href="https://www.linkedin.com/company/namdapha-iitm/?originalSubdomain=in" target="_blank" className="text-muted-foreground hover:text-blue-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://www.instagram.com/namdapha_iitm" target="_blank" className="text-muted-foreground hover:text-pink-600 transition-colors">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://www.youtube.com/@Namdapha_IITM" target="_blank" className="text-muted-foreground hover:text-red-600 transition-colors">
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-sm text-muted-foreground text-center">
                        Built for the IITM BS Community.
                    </p>
                    <p className="flex items-center justify-center text-sm text-muted-foreground gap-1">
                        Made with <span className="text-red-500 animate-pulse">❤</span> in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
