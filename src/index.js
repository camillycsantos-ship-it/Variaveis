//import dotenv from 'dotenv';
//dotenv.config();

console.log(process.env.PRIMEIRO_ENV)
console.log(process.env.PASS_ENV)

const { PRIMEIRO_ENV, PASS_ENV } = process.env

console.log({PRIMEIRO_ENV, PASS_ENV})