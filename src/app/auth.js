import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/cresentials";
import Credentials from "next-auth/providers/credentials";


export const {auth,
    signIn,
    handlers:{GET,POST}}= NextAuth({
    providers:[
Credentials({
    name:"credentials",
    async authorize(credentials){
        const user ={id:1000, name:"Bisma" ,password:"123"}
        if(credentials?.username==user.name && credentials?.password==user.password){
            return user;
        }
        else return null
    },
}),
    ],
    secret:process.env.AUTH_SECRET,
    pages:{
        signIn:"/login",
    }
});