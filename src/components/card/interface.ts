export interface TextsProps {
    color?: string;
    size?: string;
    opacity?: string;
}

export interface CardProps {
    item: {
        id: string;
        name: string;
        createdAt: string;
        desciption: string;
        price: string;
    };
}
