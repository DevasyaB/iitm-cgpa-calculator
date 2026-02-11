import { Course } from '@/types';

export const GRADE_POINTS: Record<string, number> = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 4,
    U: 0,
    WA: 0,
    WQ: 0,
    I: 0, // Incomplete doesn't count towards CGPA but credits might be attempted
};

export const ES_COURSES: Course[] = [
    // Foundation Level
    { code: 'MA1101', name: 'Math for Electronics I', credits: 4, level: 'Foundation', program: 'ES', semester: 1 },
    { code: 'CS1101', name: 'Introduction to C Programming', credits: 4, level: 'Foundation', program: 'ES', semester: 1 },
    { code: 'EE1101', name: 'Electronic Systems Thinking and Circuits', credits: 4, level: 'Foundation', program: 'ES', semester: 1 },
    { code: 'HS1001', name: 'English I', credits: 4, level: 'Foundation', program: 'ES', semester: 1 },
    { code: 'EE1104', name: 'Electronic Systems Thinking and Circuits Lab', credits: 1, level: 'Foundation', program: 'ES', semester: 1 },
    { code: 'CS1102', name: 'Introduction to Linux and Programming', credits: 4, level: 'Foundation', program: 'ES', semester: 2 }, // Doc title: Introduction to Linux Programming
    { code: 'CS1902', name: 'Introduction to the Linux Shell Lab', credits: 1, level: 'Foundation', program: 'ES', semester: 2 },
    { code: 'EE1102', name: 'Digital Systems', credits: 4, level: 'Foundation', program: 'ES', semester: 2 },
    { code: 'EE1103', name: 'Electrical and Electronic Circuits', credits: 4, level: 'Foundation', program: 'ES', semester: 2 },
    { code: 'EE1105', name: 'Electronics Lab', credits: 3, level: 'Foundation', program: 'ES', semester: 2 },
    { code: 'CS2101', name: 'Embedded C Programming', credits: 4, level: 'Foundation', program: 'ES', semester: 3 },
    { code: 'CS2901', name: 'Introduction to C Programming Lab', credits: 1, level: 'Foundation', program: 'ES', semester: 1 }, // Added based on doc
    { code: 'HS1002', name: 'English II', credits: 4, level: 'Foundation', program: 'ES', semester: 2 },

    // Diploma Level
    { code: 'CS2102', name: 'Python Programming', credits: 4, level: 'Diploma', program: 'ES', semester: 3 }, // Doc name: Python Programming
    { code: 'EE2101', name: 'Signals and Systems', credits: 4, level: 'Diploma', program: 'ES', semester: 3 },
    { code: 'EE2102', name: 'Analog Electronic Systems', credits: 4, level: 'Diploma', program: 'ES', semester: 4 },
    { code: 'EE2104', name: 'Analog Electronics Lab', credits: 3, level: 'Diploma', program: 'ES', semester: 4 },
    { code: 'EE3101', name: 'Digital Signal Processing', credits: 4, level: 'Diploma', program: 'ES', semester: 4 },
    { code: 'EE2103', name: 'Digital System Design', credits: 4, level: 'Diploma', program: 'ES', semester: 4 },
    { code: 'EE2902', name: 'Digital System Design Laboratory', credits: 1, level: 'Diploma', program: 'ES', semester: 4 }, // Kept, check if in doc
    { code: 'EE3103', name: 'Sensors and Application', credits: 4, level: 'Diploma', program: 'ES', semester: 5 },
    { code: 'EE3104', name: 'Sensors Laboratory', credits: 2, level: 'Diploma', program: 'ES', semester: 5 }, // Doc name: Sensors Laboratory
    { code: 'EE3102', name: 'Control Engineering', credits: 4, level: 'Degree', program: 'ES', semester: 6 }, // Moved to Degree per doc
    { code: 'EE2104_CO', name: 'Computer Organization', credits: 4, level: 'Diploma', program: 'ES', semester: 3 }, // From doc
    { code: 'EE2105', name: 'Electronic Testing and Measurement', credits: 4, level: 'Diploma', program: 'ES', semester: 4 }, // From doc

    // Degree Level
    { code: 'EE3105', name: 'Electromagnetic Fields and Transmission Lines', credits: 4, level: 'Degree', program: 'ES', semester: 6 },
    { code: 'EE4102', name: 'Electronic Product Design', credits: 4, level: 'Degree', program: 'ES', semester: 6 },
    { code: 'BSGN3001', name: 'Strategies for Professional Growth', credits: 4, level: 'Degree', program: 'ES', semester: 6 },
    { code: 'EE4101', name: 'Embedded Linux and FPGAs', credits: 4, level: 'Degree', program: 'ES', semester: 6 },
    { code: 'EE4901', name: 'Embedded Linux and FPGAs (Lab)', credits: 1, level: 'Degree', program: 'ES', semester: 6 },
    { code: 'EE5102', name: 'Digital IC Design', credits: 4, level: 'Degree', program: 'ES', semester: 7 },
    { code: 'MA3101', name: 'Probability and Statistics', credits: 4, level: 'Degree', program: 'ES', semester: 7 },
    { code: 'EE3106', name: 'Semiconductor Devices and VLSI Technology', credits: 4, level: 'Degree', program: 'ES', semester: 7 },
    // Open Electives
    { code: 'CS2004', name: 'Machine Learning Foundations', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'CS2001', name: 'Database Management Systems', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'CS2002', name: 'PDSA using Python', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'CS2003', name: 'Modern Application Development I', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'CS2006', name: 'Modern Application Development II', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'CS2007', name: 'Machine Learning Techniques', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'CS2008', name: 'Machine Learning Practice', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'BSCS3004', name: 'Deep Learning', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'EE4001', name: 'Speech Technology', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'BSDA5013', name: 'Deep Learning Practice', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'BSMS4002', name: 'Design Thinking for Data-Driven App Development', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'BSMS4001', name: 'Industry 4.0', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'BSMS3034', name: 'Corporate Finance', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'BSCS4021_ES', name: 'Programming Concepts using Java', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'BSDA5006', name: 'Deep Learning for Computer Vision', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'BSMS3002', name: 'Market Research', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
    { code: 'BSMS3033', name: 'Managerial Economics', credits: 4, level: 'Degree', program: 'ES', semester: 8 },
];

export const DS_COURSES: Course[] = [
    // Foundation Level
    { code: 'MA1001', name: 'Mathematics for Data Science I', credits: 4, level: 'Foundation', program: 'DS', semester: 1 },
    { code: 'HS1001', name: 'English I', credits: 4, level: 'Foundation', program: 'DS', semester: 1 },
    { code: 'CS1001', name: 'Computational Thinking', credits: 4, level: 'Foundation', program: 'DS', semester: 1 },
    { code: 'MA1002', name: 'Statistics for Data Science I', credits: 4, level: 'Foundation', program: 'DS', semester: 1 },
    { code: 'MA1003', name: 'Mathematics for Data Science II', credits: 4, level: 'Foundation', program: 'DS', semester: 2 },
    { code: 'HS1002', name: 'English II', credits: 4, level: 'Foundation', program: 'DS', semester: 2 },
    { code: 'CS1002', name: 'Introduction to Python Programming', credits: 4, level: 'Foundation', program: 'DS', semester: 2 },
    { code: 'MA1004', name: 'Statistics for Data Science II', credits: 4, level: 'Foundation', program: 'DS', semester: 2 },

    // Diploma Level
    { code: 'CS2004', name: 'Machine Learning Foundations', credits: 4, level: 'Diploma', program: 'DS', semester: 3 },
    { code: 'CS2007', name: 'Machine Learning Techniques', credits: 4, level: 'Diploma', program: 'DS', semester: 3 },
    { code: 'CS2008', name: 'Machine Learning Practice', credits: 4, level: 'Diploma', program: 'DS', semester: 4 },
    { code: 'MS2001', name: 'Business Data Management', credits: 4, level: 'Diploma', program: 'DS', semester: 4 },
    { code: 'MS2002', name: 'Business Analytics', credits: 4, level: 'Diploma', program: 'DS', semester: 5 },
    { code: 'CS2003_TDS', name: 'Tools in Data Science', credits: 4, level: 'Diploma', program: 'DS', semester: 5 }, // Re-adding identifier to avoid duplicate key issues if needed, or rely on distinct names
    { code: 'CS2002', name: 'PDSA using Python', credits: 4, level: 'Diploma', program: 'DS', semester: 3 },
    { code: 'CS2001', name: 'Database Management Systems', credits: 4, level: 'Diploma', program: 'DS', semester: 3 },
    { code: 'CS2003_APP1', name: 'Application Development I', credits: 4, level: 'Diploma', program: 'DS', semester: 4 }, // Unique Code
    { code: 'CS2005', name: 'Programming Concepts using Java', credits: 4, level: 'Diploma', program: 'DS', semester: 4 },
    { code: 'CS2009', name: 'System Commands', credits: 4, level: 'Diploma', program: 'DS', semester: 5 },
    { code: 'CS2006', name: 'Application Development II', credits: 4, level: 'Diploma', program: 'DS', semester: 5 },
    { code: 'CS3007', name: 'Generative AI', credits: 4, level: 'Diploma', program: 'DS', semester: 5 },

    // Degree Level
    { code: 'BSCS3002', name: 'Software Testing', credits: 4, level: 'Degree', program: 'DS', semester: 6 },
    { code: 'BSCS3001', name: 'Software Engineering', credits: 4, level: 'Degree', program: 'DS', semester: 6 },
    { code: 'BSCS3004', name: 'Deep Learning', credits: 4, level: 'Degree', program: 'DS', semester: 6 }, // Moved to degree Core
    { code: 'BSCS3003', name: 'AI: Search Methods for Problem Solving', credits: 4, level: 'Degree', program: 'DS', semester: 6 },
    { code: 'BSGN3001', name: 'Strategies for Professional Growth', credits: 4, level: 'Degree', program: 'DS', semester: 6 },
    { code: 'BSDA5001', name: 'Introduction to Big Data', credits: 4, level: 'Degree', program: 'DS', semester: 6 },
    { code: 'BSCS3005', name: 'Programming in C', credits: 4, level: 'Degree', program: 'DS', semester: 7 },
    { code: 'BSDA5006', name: 'Deep Learning for Computer Vision', credits: 4, level: 'Degree', program: 'DS', semester: 7 },
    { code: 'BSDA5004', name: 'Large Language Models', credits: 4, level: 'Degree', program: 'DS', semester: 7 }, // Added from Annexure
    { code: 'BSDA5013', name: 'Deep Learning Practice', credits: 4, level: 'Degree', program: 'DS', semester: 7 },
    { code: 'BSMS4001', name: 'Industry 4.0', credits: 4, level: 'Degree', program: 'DS', semester: 7 },
    { code: 'BSCS4022', name: 'Operating Systems', credits: 4, level: 'Degree', program: 'DS', semester: 7 },
    { code: 'BSDA5007', name: 'Reinforcement Learning', credits: 4, level: 'Degree', program: 'DS', semester: 8 }, // Special Topics in ML
    { code: 'BSMS3034', name: 'Corporate Finance', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSCS4024', name: 'Computer Networks', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSDA4001', name: 'Data Science and AI Lab', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSCS4010', name: 'Application Development Lab', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSBT4001', name: 'Algorithmic Thinking in Bioinformatics', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSBT4002', name: 'Big Data and Biological Networks', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSMS3002', name: 'Market Research', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSMA3014', name: 'Statistical Computing', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSCS4021', name: 'Advanced Algorithms', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSMS3033', name: 'Managerial Economics', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSEE4001', name: 'Speech Technology', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSDA5014', name: 'Machine Learning Operations (MLOps)', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSDA5002', name: 'Mathematical Foundations of Generative AI', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSCS3021', name: 'Theory of Computation', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSCS4001', name: 'Data Visualization Design', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSMS4002', name: 'Design Thinking for Data-Driven App Development', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSCS4003', name: 'Privacy & Security in Online Social Media', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSMS4003', name: 'Financial Forensics', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSMA3012', name: 'Linear Statistical Models', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSCS3031', name: 'Computer Systems Design', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSMA2001', name: 'Mathematical Thinking', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSDA5005', name: 'Introduction to Natural Language Processing (i-NLP)', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSMS4023', name: 'Game Theory and Strategy', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
    { code: 'BSDA5003', name: 'Algorithms for Data Science (ADS)', credits: 4, level: 'Degree', program: 'DS', semester: 8 },
];

export const getAllCourses = (program: 'ES' | 'DS') => {
    return program === 'ES' ? ES_COURSES : DS_COURSES;
};
