const DEFAULT_START = new Date('2024-01-01').getTime();
const DEFAULT_END = new Date('2024-07-01').getTime();

export function getRandomDate(start?: Date, end?: Date) {

    const startTime = start ? start.getTime() : DEFAULT_START;
    const endTime = end ? end.getTime() : DEFAULT_END;
    
    const randomTimestamp = startTime + Math.random() * (endTime - startTime);
    const date = new Date(randomTimestamp);
    
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${month}/${day}/${year}`;
}