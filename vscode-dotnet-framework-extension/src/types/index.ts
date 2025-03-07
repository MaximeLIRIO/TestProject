export interface TestResult {
    testName: string;
    status: 'passed' | 'failed' | 'skipped';
    duration: number; // in milliseconds
    errorMessage?: string; // optional, only if the test failed
}

export interface Project {
    name: string;
    path: string;
    framework: string; // e.g., ".NET Framework 4.7.2"
}

export interface Solution {
    name: string;
    projects: Project[];
    path: string;
}