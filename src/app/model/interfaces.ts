export interface student{
    name:string,
    email:string,
    password:number | string,
    phone:number | null,
    role:string
}

export interface login{
    username:string,
    password:string | number
}