import { CourseRecord, CGPASummary } from '@/types';
import { GRADE_POINTS } from './data';

export const calculateCGPA = (courses: CourseRecord[]): CGPASummary => {
    let totalGradePoints = 0;
    let earnedCredits = 0; // Credits for completed courses with valid grades
    let totalCredits = 0; // Total credits attempted (completed)

    for (const course of courses) {
        if (course.status === 'Completed' && course.grade) {
            if (course.grade === 'U' || course.grade === 'WA' || course.grade === 'WQ' || course.grade === 'I') {
                // Fail grades or incomplete - credits count towards denominator if it's a fail? 
                // Typically U grades count as 0 points but credits are included in CGPA. 
                // WA/WQ usually mean 0 points and credits included.
                // Incomplete (I) usually doesn't count until completed.

                // As per standard IITM BS rules:
                // U, WA, WQ are failures. Credits are counted in denominator? 
                // Wait, standard CGPA is (Sum of (Credits * Grade Points)) / (Sum of Credits of courses with valid grades).
                // If U, grade point is 0. So it lowers CGPA drastically.

                if (course.grade !== 'I') {
                    const gp = GRADE_POINTS[course.grade] || 0;
                    totalGradePoints += course.credits * gp;
                    totalCredits += course.credits;
                    // earnedCredits does not increase for failures
                }
            } else {
                const gp = GRADE_POINTS[course.grade] || 0;
                totalGradePoints += course.credits * gp;
                totalCredits += course.credits;
                earnedCredits += course.credits;
            }
        }
    }

    const cgpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;

    return {
        cgpa: parseFloat(cgpa.toFixed(2)),
        totalCredits,
        earnedCredits
    };
};

export const predictCGPA = (currentSummary: CGPASummary, ongoingCourses: CourseRecord[]): CGPASummary => {
    // Base values from current history
    let totalGradePoints = currentSummary.cgpa * currentSummary.totalCredits;
    let totalCredits = currentSummary.totalCredits;
    let earnedCredits = currentSummary.earnedCredits;

    for (const course of ongoingCourses) {
        if (course.grade) {
            const gp = GRADE_POINTS[course.grade] || 0;

            // Handle Fail/Pass logic
            if (course.grade !== 'I') {
                totalGradePoints += course.credits * gp;
                totalCredits += course.credits;
                if (gp > 0) { // Assuming >0 is a pass, or check strict grade list
                    earnedCredits += course.credits;
                }
            }
        }
    }

    const predictedCGPA = totalCredits > 0 ? totalGradePoints / totalCredits : 0;

    return {
        cgpa: parseFloat(predictedCGPA.toFixed(2)),
        totalCredits,
        earnedCredits
    };
};
