## 🖼️ Screenshot

<p align="center"> 
<img src="https://res.cloudinary.com/da91uwz7j/image/upload/v1652198324/hubspot-contact-create/ezgif.com-gif-maker_wmelzz.gif" width="400px">
<img src="https://res.cloudinary.com/da91uwz7j/image/upload/v1652198323/hubspot-contact-create/ezgif.com-gif-maker_1_kr9cvp.gif" width="400px">
</p>

## About the project

Este aplicativo faz parte de um desafio de engenharia de software, onde foi proposto a criação de uma aplicação web responsável por criar e atualizar dados, consumindo apartir de uma api definida(HubSpot).

## 🖥️ Technologies

Tecnologias usadas na resoluçao desse desafio.

- [ReactJS](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)
- [React-bootstrap](https://react-bootstrap.github.io/)

## 🚀 Getting started

Inicie com a instalação das dependências de desenvolvimento:

```bash
$ npm install
```

em seguida o comando para executar a aplicação web em modo desenvolvimento:

```bash
$ yarn dev
```

## 🔑 Keys

Para a utilização dessa aplicação em outras contas de desenvolvimento utilizando os schemas criados a principio, deve-se primeiramente realizar a troca da develop apikey, onde a mesma se encontra nas variáveis de ambiente '.env' demonstrado na imagem a seguir:

https://drive.google.com/file/d/1Mh8uDzkYyK77E_MFatUFNxWhNRPwh-zn/view?usp=sharing

## 🤖 Oauth 2.0

Para começar a realizar cadastros e atualizações dos registros deve-se atentar a verificação Oauth 2.0, após a execução de todos os passos anteriores, realizar o acesso através da interface pelo botão indicado na imagem a baixo:

https://drive.google.com/file/d/1OXebMVPE08JvAwjRM1k7018QQYidhySI/view?usp=sharing

ou através do link a baixo:

- [Oauth-2.0](https://app.hubspot.com/oauth/authorize?client_id=6499a143-10c7-432c-8218-5e6a6a8b4fe6&redirect_uri=http://localhost:3000/&scope=crm.objects.contacts.read%20crm.objects.contacts.write%20crm.schemas.contacts.read%20crm.schemas.contacts.write)
