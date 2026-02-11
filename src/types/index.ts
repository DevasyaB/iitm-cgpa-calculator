export type Grade = 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'U' | 'WA' | 'WQ' | 'I';

export type Program = 'ES' | 'DS';
export type Level = 'Foundation' | 'Diploma' | 'Degree';

export interface Course {
  code: string;
  name: string;
  credits: number;
  level: Level;
  program: Program | 'Both';
  semester?: number; // Approximate semester for sorting
}

export type CourseStatus = 'Completed' | 'Ongoing' | 'Future';

export interface CourseRecord extends Course {
  grade?: Grade;
  status: CourseStatus;
}

export interface StudentProfile {
  program: Program;
  completedCourses: CourseRecord[];
  ongoingCourses: CourseRecord[];
  futureCourses: CourseRecord[];
}

export type CGPASummary = {
  cgpa: number;
  totalCredits: number;
  earnedCredits: number;
};
