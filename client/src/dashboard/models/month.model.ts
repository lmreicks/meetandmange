import { Week } from "./week.model";

export interface Month {
    name: string;
    weeks: Week[];
    weekdays: string[];
}

export const Months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December'
];
