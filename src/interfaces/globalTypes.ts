
 export interface BaseState {
     status: 'idle' | 'loading' | 'succeeded' | 'failed'
     err: string | null
 }

 export interface Category  {
     _id: string;
     name: string;
 }

 export interface Login {
    nickName: string;
    password: string;
 }

 export interface SingnUp extends Login {
     passwordConfirmed: string;
 }

 export type Roles = 'customer'| 'manager' | 'admin'

 export interface TokenInfo {
     UserInfo : {
         roles: Roles[],
         nickName: string,
         exp: number,
         iat: number
     }
 }

