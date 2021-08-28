const { expect } = require('chai');
const sinon = require('sinon');
const readline = require('readline-sync');

const calculaArea = require('../CalculaArea');

describe('Executa o scritp CalculaArea', () => {
    describe('a resposta', () => {

        before(() => {
            sinon.stub(readline, 'questionInt').returns(10);
        })
        after(() => {
            readline.questionInt.restore();
        })

        it('é um "number"', () => {
            const resposta = calculaArea();
            expect(resposta).to.be.a('number');
        })

        it('é igual a "100" se o lado for "10"', () => {
            const resposta = calculaArea();

            expect(resposta).to.be.equals(100)
        })
    })

    describe('Se o lado for negativo', () => {
        describe('A resposta', () => {

            before(() => {
                sinon.stub(readline, 'questionInt').returns(-10);
            })

            after(() => {
                readline.questionInt.restore();
            })

            it('Dev dar um erro', () => {
                expect(function name() {
                    calculaArea()
                }).to.throw()
            })
        })
    })
})