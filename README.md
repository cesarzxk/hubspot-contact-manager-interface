## About the project

Este aplicativo faz parte de um desafio de engenharia de software, onde foi proposto a criação de uma aplicação web responsável por criar e atualizar dados, consumindo apartir de uma api definida(HubSpot).

## Technologies

Tecnologias usadas na resoluçao desse desafio.


- [ReactJS](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)
- [Hubspot-api-nodejs](https://github.com/HubSpot/hubspot-api-nodejs)
- [React-bootstrap](https://react-bootstrap.github.io/)
- [ExpressJs](https://expressjs.com/)

## Getting started

Para começar, primeiramente com a instação das dependências necessárias para inicialização dos proximos passos.

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


Acessando a pasta 'back-end' utilizando os seguintes comando para proceguir a instalação:


$ yarn


Em seguida um comando para iniciar o servidor em modo desenvolvimento:


$ yarn dev


Em outra aba abra a pasta 'fronte-end' e inicie com a instalação das dependências de desenvolvimento:


$ npm install


em seguida o comando para executar a aplicação web em modo desenvolvimento:


$ yarn dev


## Keys

Para a utilização dessa aplicação em outras contas de desenvolvimento utilizando os schemas criados a principio, deve-se primeiramente realizar a troca da develop apikey, onde a mesma se encontra nas variáveis de ambiente '.env' demonstrado na imagem a seguir:


https://drive.google.com/file/d/1Mh8uDzkYyK77E_MFatUFNxWhNRPwh-zn/view?usp=sharing



## Oauth 2.0

Para começar a realizar cadastros e atualizações dos registros deve-se atentar a verificação Oauth 2.0, após a execução de todos os passos anteriores, realizar o acesso através da interface pelo botão indicado na imagem a baixo:

https://drive.google.com/file/d/1OXebMVPE08JvAwjRM1k7018QQYidhySI/view?usp=sharing

ou através do link a baixo:

- [Oauth-2.0](https://app.hubspot.com/oauth/authorize?client_id=6499a143-10c7-432c-8218-5e6a6a8b4fe6&redirect_uri=http://localhost:3000/&scope=crm.objects.contacts.read%20crm.objects.contacts.write%20crm.schemas.contacts.read%20crm.schemas.contacts.write)


## End-points

O back-end é composto por 3 end points:


----->authorization------>GET retorna token


----->schemas------------>GET retorna a resposta da criação, erro ou se já existe


----->contacts -----------> GET obtém todos os contatos e retorna
              |
              |-----------> GET:email retorna um contato através do seu email.
              |
              |-----------> PUT atualiza um contato e retorna uma resposta de criação
              |
              |-----------> POST cria um contato e retorna uma resposta de criação



