function multiplyValue(value: number, multiplier: number = 2): number {
    return value * multiplier;
}

type ProcessInput = string | number | boolean;

function processInput(value: ProcessInput): ProcessInput {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
}

type Location = readonly [number, number, string];

function formatCoordinate(location: Location): string {
    const locationName = location.filter((item) => typeof item === "string");
    const coords = location.filter((item) => typeof item === "number");
    return `Location: ${locationName} (${coords.join(", ")})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter(
        (course) => course.isPublished && course.students >= minStudents,
    );
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map((item) => item[key]);
}

class Employee {
    constructor(
        protected name: string,
        private baseSalary: number,
    ) {}

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string,
    ) {
        super(name, baseSalary);
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

async function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}
