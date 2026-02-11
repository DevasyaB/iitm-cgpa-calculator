import { Course, Grade } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseRowProps {
    courses: Course[];
    selectedCourseCode: string; // The code of the currently selected course
    selectedGrade?: Grade;
    onCourseChange: (code: string) => void;
    onGradeChange: (grade: Grade) => void;
    onRemove: () => void;
}

const GRADES: Grade[] = ['S', 'A', 'B', 'C', 'D', 'E', 'U', 'WA', 'WQ', 'I'];

export function CourseRow({
    courses,
    selectedCourseCode,
    selectedGrade,
    onCourseChange,
    onGradeChange,
    onRemove,
}: CourseRowProps) {

    const selectedCourse = courses.find(c => c.code === selectedCourseCode);

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-2 p-3 border rounded-md bg-white dark:bg-zinc-900 shadow-sm">
            <div className="flex-1 w-full sm:w-auto">
                <Select value={selectedCourseCode} onValueChange={onCourseChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Course" />
                    </SelectTrigger>
                    <SelectContent>
                        {courses.map((course, idx) => (
                            <SelectItem key={`${course.code}-${course.name}-${idx}`} value={course.code}>
                                <span className="font-medium">{course.code}</span> - {course.name} <span className="text-muted-foreground text-xs">({course.credits} Cr)</span>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                <div className="w-24 shrink-0">
                    <Select value={selectedGrade} onValueChange={(v) => onGradeChange(v as Grade)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Grade" />
                        </SelectTrigger>
                        <SelectContent>
                            {GRADES.map((g) => (
                                <SelectItem key={g} value={g}>{g}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {selectedCourse && (
                    <Badge variant="secondary" className="shrink-0 w-16 justify-center">
                        {selectedCourse.credits} Cr
                    </Badge>
                )}

                <Button variant="ghost" size="icon" onClick={onRemove} className="text-red-500 hover:text-red-700 hover:bg-red-50 shrink-0 ml-auto sm:ml-0">
                    <X className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
