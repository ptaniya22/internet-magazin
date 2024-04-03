export interface IRegister {
    username: string;
    email: string;
    password: string
    password2: string
}

export interface ILogin {
    username: string;
    password: string;
}

export interface IProduct {
    id: number;
    description: string;
    image: string;
    price: string;
    rating: number;
    title: string;
    quantity: number | null
} 