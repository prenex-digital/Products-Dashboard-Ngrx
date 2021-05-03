export enum FilterList {
    PRICE,
    SIZE
}

export const filterEntities = {
    size: 'size',
    price: 'price'
}

export interface FilteringList {
    value: FilterList;
    viewValue: string;
}

export const filterList: FilteringList[] = [
    { value: FilterList.PRICE, viewValue: 'Price' },
    { value: FilterList.SIZE, viewValue: 'Size' }
];