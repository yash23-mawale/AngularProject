export interface student{
    name:string,
    email:string,
    password:number | string,
    phone:number,
    role:string
}

export interface login{
    username:string,
    password:string | number
}