export enum SortList {
    NAME,
    PRICEASC,
    PRICEDESC
}

export const sortEntities = {
     name :'name',
    price : 'price'
}

export interface SortingList {
    value: SortList;
    viewValue: string;
}

export const sortingList: SortingList[] = [
    { value: SortList.NAME, viewValue: 'Name Ascending' },
    { value: SortList.PRICEASC, viewValue: 'Price Ascending' },
    { value: SortList.PRICEDESC, viewValue: 'Price Descending' }
];