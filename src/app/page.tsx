"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-8 bg-gradient-to-b from-purple-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="relative flex flex-col place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50 mb-4"
        >
          <Image src="/logo.png" alt="Namdapha Logo" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-500 drop-shadow-sm">
            Namdapha Scholar
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your companion for academic success in the IITM BS Degree.
            Calculate, Predict, and Plan your journey with style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/calculator?program=ES" passHref className="w-full">
              <Card className="h-full flex flex-col border-2 border-purple-100 dark:border-purple-900/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all cursor-pointer bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-purple-700 dark:text-purple-300">BS in Electronic Systems</CardTitle>
                  <CardDescription className="text-center">Master the hardware. Plan your credits.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center mt-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg">
                    Select ES Program
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/calculator?program=DS" passHref className="w-full">
              <Card className="h-full flex flex-col border-2 border-blue-100 dark:border-blue-900/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all cursor-pointer bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-blue-700 dark:text-blue-300">BS in Data Science</CardTitle>
                  <CardDescription className="text-center">Decode the data. Architect your future.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center mt-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg">
                    Select DS Program
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Link
          href="https://docs.google.com/document/u/1/d/e/2PACX-1vTFhsEQkgismKJq5Ey_172lv7MJ8STdeSPbn3Jw4PEwwEo0b4q6J841DQCQWKazcEw47XrYFO9fBTEp/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-4 rounded-lg border border-blue-200 dark:border-blue-900 bg-white/30 dark:bg-zinc-900/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center justify-between group">
            <span className="font-medium text-blue-700 dark:text-blue-300">ES Grading Document (Jan 2026)</span>
            <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>
        <Link
          href="https://docs.google.com/document/u/1/d/e/2PACX-1vSUvKzH7yIXNVwUgRYSIT8M0x1jhFSkslEtj9UPo3dtWI_sJ38Hh_PzbBygpF0vIOo8K7lTy-uYkqdu/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-4 rounded-lg border border-purple-200 dark:border-purple-900 bg-white/30 dark:bg-zinc-900/30 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center justify-between group">
            <span className="font-medium text-purple-700 dark:text-purple-300">DS Grading Document (Jan 2026)</span>
            <span className="text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>
      </motion.div>
    </main>
  );
}
