import supertest from "supertest";
import { expect } from "chai";



const request = supertest('http://localhost:8001')


const product1 = {
    title:'carbon',
    price:54,
    description:'carbon para el asado',
    category:'comestible',
    image:'fadfadfasd',
    rating: {"rate":2.1,"count":430},
    stock:85,
    code:878945
}

//Quitar el middleware de protección de ruta para usuarios logeados 
describe('test de endpoint productos', function (){
    it('probar el metodo post de /api/product', async function (){
        const response = await  request.post ('/api/product/').send(product1)
        console.log(response);
        expect(response._body).to.have.property('status')
        expect(response._body).to.have.property('payload')
    })
    it('Probar el método GET de /api/products', async function () {
        const response = await request.get('/api/products');
        expect(response.body).to.be.an('object'); 
        expect(response.body).to.have.property('docs'); 
        expect(response.body.docs).to.be.an('array'); 
        expect(response.status).to.equal(200);})
})


describe('test de endpoint carts', function(){
    it ('Probar metodo get por id de cart', async function(){
        const cartID = '64907a6d03cfffe10fc18db4'; // Reemplazar con un id de carrito válido
        const response = await request.get(`/api/cart/${cartID}`);
        
        expect(response.body).to.have.property('status'); 
        expect(response.body.status).to.equal('Succes'); 
        expect(response.body).to.have.property('payload'); 
        expect(response.body.payload).to.be.an('object'); 
        expect(response.body.payload).to.have.property('products');
        expect(response.body.payload.products).to.be.an('array'); 
        expect(response.body.payload).to.have.property('total');
        expect(response.status).to.equal(200);
    })
})