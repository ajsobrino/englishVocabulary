import Word from './word';
export default class Page<T> {
    constructor(elements: T[]){    
        this.elements = elements;
    }
    page:number;
    totalElement:number;
    elementPerPage: number;
    elements: T[];
}