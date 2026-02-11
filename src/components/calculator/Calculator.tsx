'use client';

import { useState, useMemo } from 'react';
import { CourseRecord, Program } from '@/types';
import { getAllCourses } from '@/lib/grading/data';
import { calculateCGPA, predictCGPA } from '@/lib/grading/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CourseRow } from './CourseRow';
import { PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CalculatorProps {
    initialProgram: Program;
}

const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

export function Calculator({ initialProgram }: CalculatorProps) {
    const [program] = useState<Program>(initialProgram);
    const [completedCourses, setCompletedCourses] = useState<CourseRecord[]>([]);
    const [ongoingCourses, setOngoingCourses] = useState<CourseRecord[]>([]);
    const [futureCourses, setFutureCourses] = useState<CourseRecord[]>([]);

    // Load available courses based on program
    const availableCourses = useMemo(() => getAllCourses(program), [program]);

    // Derived state: CGPA
    const currentSummary = useMemo(() => calculateCGPA(completedCourses), [completedCourses]);

    // Prediction: Current + Ongoing
    const predictionSummary = useMemo(() => {
        return predictCGPA(currentSummary, ongoingCourses);
    }, [currentSummary, ongoingCourses]);

    // Planning: Current + Ongoing + Future
    const planningSummary = useMemo(() => {
        const allProjected = [...ongoingCourses, ...futureCourses];
        return predictCGPA(currentSummary, allProjected);
    }, [currentSummary, ongoingCourses, futureCourses]);

    const addCourse = (type: 'completed' | 'ongoing' | 'future') => {
        const newRecord: CourseRecord = {
            code: '',
            name: '',
            credits: 0,
            level: 'Foundation',
            program: program,
            status: type === 'completed' ? 'Completed' : type === 'ongoing' ? 'Ongoing' : 'Future',
            // No grade initially
        };

        if (type === 'completed') setCompletedCourses([...completedCourses, newRecord]);
        else if (type === 'ongoing') setOngoingCourses([...ongoingCourses, newRecord]);
        else setFutureCourses([...futureCourses, newRecord]);
    };

    const updateCourse = (type: 'completed' | 'ongoing' | 'future', index: number, field: keyof CourseRecord, value: string | number) => {
        const setter = type === 'completed' ? setCompletedCourses : type === 'ongoing' ? setOngoingCourses : setFutureCourses;
        const collection = type === 'completed' ? completedCourses : type === 'ongoing' ? ongoingCourses : futureCourses;

        const updated = [...collection];

        if (field === 'code') {
            // When code changes, update other course details
            const courseDetails = availableCourses.find(c => c.code === value);
            if (courseDetails) {
                updated[index] = { ...updated[index], ...courseDetails, code: value as string };
            }
        } else {
            updated[index] = { ...updated[index], [field]: value };
        }

        setter(updated);
    };

    const removeCourse = (type: 'completed' | 'ongoing' | 'future', index: number) => {
        const setter = type === 'completed' ? setCompletedCourses : type === 'ongoing' ? setOngoingCourses : setFutureCourses;
        const collection = type === 'completed' ? completedCourses : type === 'ongoing' ? ongoingCourses : futureCourses;
        const updated = collection.filter((_, i) => i !== index);
        setter(updated);
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400"
                    >
                        {program === 'ES' ? 'Electronic Systems' : 'Data Science'} Calculator
                    </motion.h2>
                    <a
                        href={program === 'ES'
                            ? "https://docs.google.com/document/u/1/d/e/2PACX-1vTFhsEQkgismKJq5Ey_172lv7MJ8STdeSPbn3Jw4PEwwEo0b4q6J841DQCQWKazcEw47XrYFO9fBTEp/pub"
                            : "https://docs.google.com/document/u/1/d/e/2PACX-1vSUvKzH7yIXNVwUgRYSIT8M0x1jhFSkslEtj9UPo3dtWI_sJ38Hh_PzbBygpF0vIOo8K7lTy-uYkqdu/pub?urp=gmail_link"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 underline underline-offset-4 flex items-center gap-1"
                    >
                        View {program} Grading Document
                    </a>
                </div>

                <Button variant="outline" onClick={() => window.location.href = '/'} className="w-full md:w-auto border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-900/20">
                    Switch Program
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Current Status Card */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <Card className="bg-white/80 dark:bg-zinc-900/80 border-purple-200 dark:border-purple-900 shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Current CGPA</CardTitle>
                            <CardDescription className="text-4xl font-bold text-purple-700 dark:text-purple-400">
                                {currentSummary.cgpa.toFixed(2)}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm font-medium text-muted-foreground">
                            Earned Credits: {currentSummary.earnedCredits} / {currentSummary.totalCredits}
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Prediction Card */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <Card className="bg-white/80 dark:bg-zinc-900/80 border-blue-200 dark:border-blue-900 shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Predicted CGPA</CardTitle>
                            <CardDescription className="text-4xl font-bold text-blue-700 dark:text-blue-400">
                                {predictionSummary.cgpa.toFixed(2)}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm font-medium text-muted-foreground">
                            After Ongoing Courses
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Planning Card */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <Card className="bg-white/80 dark:bg-zinc-900/80 border-indigo-200 dark:border-indigo-900 shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Future CGPA</CardTitle>
                            <CardDescription className="text-4xl font-bold text-indigo-700 dark:text-indigo-400">
                                {planningSummary.cgpa.toFixed(2)}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm font-medium text-muted-foreground">
                            After Future Scenarios
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            <Tabs defaultValue="current" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-purple-50 dark:bg-zinc-900 p-1 rounded-xl">
                    <TabsTrigger value="current" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300 data-[state=active]:shadow-sm rounded-lg transition-all">Current Status</TabsTrigger>
                    <TabsTrigger value="prediction" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-300 data-[state=active]:shadow-sm rounded-lg transition-all">Prediction</TabsTrigger>
                    <TabsTrigger value="planning" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:text-indigo-700 dark:data-[state=active]:text-indigo-300 data-[state=active]:shadow-sm rounded-lg transition-all">Future Planning</TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                    <TabsContent value="current" key="tab-current">
                        <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
                            <Card className="border-purple-100 dark:border-purple-900/50">
                                <CardHeader>
                                    <CardTitle>Completed Courses</CardTitle>
                                    <CardDescription>
                                        Add courses you have already completed with their grades.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {completedCourses.map((course, index) => (
                                        <CourseRow
                                            key={`completed-${index}`}
                                            courses={availableCourses}
                                            selectedCourseCode={course.code}
                                            selectedGrade={course.grade}
                                            onCourseChange={(code) => updateCourse('completed', index, 'code', code)}
                                            onGradeChange={(grade) => updateCourse('completed', index, 'grade', grade)}
                                            onRemove={() => removeCourse('completed', index)}
                                        />
                                    ))}
                                    <Button variant="outline" className="w-full border-dashed border-purple-300 hover:border-purple-500 hover:bg-purple-50 text-purple-600 dark:border-purple-700 dark:hover:bg-purple-900/20 dark:text-purple-300" onClick={() => addCourse('completed')}>
                                        <PlusCircle className="mr-2 h-4 w-4" /> Add Course
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="prediction" key="tab-prediction">
                        <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
                            <Card className="border-blue-100 dark:border-blue-900/50">
                                <CardHeader>
                                    <CardTitle>Ongoing Courses</CardTitle>
                                    <CardDescription>
                                        Add courses you are currently studying and your expected grades.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {ongoingCourses.map((course, index) => (
                                        <CourseRow
                                            key={`ongoing-${index}`}
                                            courses={availableCourses}
                                            selectedCourseCode={course.code}
                                            selectedGrade={course.grade}
                                            onCourseChange={(code) => updateCourse('ongoing', index, 'code', code)}
                                            onGradeChange={(grade) => updateCourse('ongoing', index, 'grade', grade)}
                                            onRemove={() => removeCourse('ongoing', index)}
                                        />
                                    ))}
                                    <Button variant="outline" className="w-full border-dashed border-blue-300 hover:border-blue-500 hover:bg-blue-50 text-blue-600 dark:border-blue-700 dark:hover:bg-blue-900/20 dark:text-blue-300" onClick={() => addCourse('ongoing')}>
                                        <PlusCircle className="mr-2 h-4 w-4" /> Add Ongoing Course
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="planning" key="tab-planning">
                        <motion.div variants={tabVariants} initial="hidden" animate="visible" exit="exit">
                            <Card className="border-indigo-100 dark:border-indigo-900/50">
                                <CardHeader>
                                    <CardTitle>Future Scenario Planning</CardTitle>
                                    <CardDescription>
                                        Add hypothetical future courses and grades to see their impact.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {futureCourses.map((course, index) => (
                                        <CourseRow
                                            key={`future-${index}`}
                                            courses={availableCourses}
                                            selectedCourseCode={course.code}
                                            selectedGrade={course.grade}
                                            onCourseChange={(code) => updateCourse('future', index, 'code', code)}
                                            onGradeChange={(grade) => updateCourse('future', index, 'grade', grade)}
                                            onRemove={() => removeCourse('future', index)}
                                        />
                                    ))}
                                    <Button variant="outline" className="w-full border-dashed border-indigo-300 hover:border-indigo-500 hover:bg-indigo-50 text-indigo-600 dark:border-indigo-700 dark:hover:bg-indigo-900/20 dark:text-indigo-300" onClick={() => addCourse('future')}>
                                        <PlusCircle className="mr-2 h-4 w-4" /> Add Future Course
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>
                </AnimatePresence>
            </Tabs>

            <div className="flex justify-end text-sm text-gray-500 dark:text-gray-400">
                <p>* Calculations are fully client-side and not saved to any server.</p>
            </div>
        </div>
    );
}
