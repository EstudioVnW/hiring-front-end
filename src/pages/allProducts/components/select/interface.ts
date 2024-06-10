export interface SelectProps {
    onSortChange: (sort: string, order: string) => void;
    sortBy: string;
    sortOrder: string;
}
