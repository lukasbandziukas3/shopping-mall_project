
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

 export interface SingUp extends Login {
     passwordConfirmed: string;
 }

 export interface Order {
     _id: string;
     user: Pick<User,"nickName">,
     orderDate: Date,
     products: Product[],
 }

 export interface Product{
    _id: string;
    name: string,
     quantity: number,
     price: number,
 }

 export interface ProductGet extends Product {
     category: Category
 }

 export interface ProductSend extends Product {
     category: string
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

 export interface User  {
     _id: string;
     nickName: string;
     roles: Roles[],
     activeStatus: boolean
 }

