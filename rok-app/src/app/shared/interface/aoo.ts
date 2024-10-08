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

export interface IAooMember {
    aoo_id: string;
    id: string;
    user_name: string;
    user_position: string;
    user_role: string;
    user_description: string;

}