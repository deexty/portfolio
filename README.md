# Meu Portfolio

Portfolio pessoal, desenvolvido para demonstrar meu trabalho de forma prática e intuitiva.

## Instruções de Instalação

1. Certifique se de ter o docker,git e node.js instalados na sua máquina.
        -docker: `https://docs.docker.com`,
        -git: `https://git-scm.com`,
        -node.js: `https://nodejs.org/en/download`
3. Clone este repositório: `git clone https://github.com/deexty/portfolio.git`.
4. Adicione os arquivos .env necessarios para execucão do projeto.
        -api:
           - `DB_URL` = `url banco mongo ex:mongodb://mongo:27017/portfolio.`
6. Execute o codigo: `docker compose up -d`.
     
   

## Exemplos de Uso

### Soma
```python
>>> from calculadora import soma
>>> soma(2, 3)
5
