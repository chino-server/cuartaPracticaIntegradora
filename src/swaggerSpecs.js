import { __dirname } from "./utils/utils.js";
import {join} from 'path'
import swaggerJSDoc from "swagger-jsdoc";

const documentationDir = join(__dirname, '..', 'docs');
console.log('aqui',documentationDir);
const swaggerOptions = {
    definition:{
        openapia:'3.0.1',
        info:{
            title:'Adopme API',
            description:'Documentación para productos y carts'
        },
    },
    apis: [`${documentationDir}/**/*.yaml`],
}

export const swaggerSetup = swaggerJSDoc(swaggerOptions)