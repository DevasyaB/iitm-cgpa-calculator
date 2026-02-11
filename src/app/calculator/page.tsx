'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calculator } from '@/components/calculator/Calculator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Program } from '@/types';

function CalculatorContent() {
    const searchParams = useSearchParams();
    const programParam = searchParams.get('program');
    const program: Program = (programParam === 'ES' || programParam === 'DS') ? programParam : 'DS';

    return <Calculator key={program} initialProgram={program} />;
}

export default function CalculatorPage() {
    return (
        <div className="container mx-auto py-8 px-4 min-h-screen">
            <div className="mb-6">
                <Link href="/">
                    <Button variant="ghost" className="pl-0 gap-2">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </Button>
                </Link>
            </div>

            <Suspense fallback={<div className="text-center p-10">Loading Calculator...</div>}>
                <CalculatorContent />
            </Suspense>
        </div>
    );
}
