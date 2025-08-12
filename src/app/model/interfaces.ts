export interface student{
    name:string,
    email:string,
    password:number | string,
    phone:number | null,
    role:string
}

export interface login{
    name:string,
    password:string | number
}