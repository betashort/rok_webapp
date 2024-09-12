export interface IAoo {
    id: string,
    title: string,
}

export interface IAooResister {
    aoo_id: string;
    user_name: string;
    user_participation: boolean;
    password: string
}

export interface IAooMembers {
    aoo_id: string;
    id: string;
    user_name: string;
    
}