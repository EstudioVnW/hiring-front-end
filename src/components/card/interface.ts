export interface TextsProps {
    color?: string;
    size?: string;
    opacity?: string;
}

export interface CardProps {
    products: {
        id: string;
        name: string;
        createdAt: string;
        desciption: string;
        avatar: string;
        price: number;
    };
}
