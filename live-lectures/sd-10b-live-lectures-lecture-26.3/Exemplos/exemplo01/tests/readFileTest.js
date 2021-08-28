const { readFile } = require('../readFile')
const { expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');


describe('Chama a função "ReadFile"', () => {
    describe('quando o arquivo é lido com sucesso', () => {
        describe('a resposta', () => {
            before(() => {
                sinon.stub(fs, 'readFile').resolves(FILE_CONTENT);
            });

            after(() => {
                fs.readFile.restore();
            });

            const FILE_CONTENT = 'Testes 💚';

            it('é uma string', async () => {
                const resposta = await readFile('teste.txt');

                expect(resposta).to.be.a('string');
            })

            it('é igual ao conteúdo do arquivo', async () => {
                const resposta = await readFile('teste.txt');

                expect(resposta).to.be.equal(FILE_CONTENT);
            })
        })
    })

    describe('quando ocorre algum erro na leitura do arquivo', () => {
        describe('a resposta', () => {

            before(() => {
                sinon.stub(fs, 'readFile').rejects();
            });

            after(() => {
                fs.readFile.restore();
            })

            it('é igual a "null"', async () => {
                const resposta = await readFile('nao-existe.txt');

                expect(resposta).to.be.equal(null)
            })
        })
    })
})