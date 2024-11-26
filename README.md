
# DevRadar
### Buscando desenvolvedores num raio e tecnologia específicos através de um mapa global. 

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#dev-radar">Dev Radar</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

Projeto desenvolvido durante a <strong>Semana OmniStack 10</strong>, evento criado pela <strong><a href="https://rocketseat.com.br/">Rocketseat</a></strong>.  

## Sobre

Projeto desenvolvido durante a <strong>Semana OmniStack 10</strong>, evento criado pela <strong><a href="https://rocketseat.com.br/">Rocketseat</a></strong>.  

Ocorreu em Janeiro de 2020 e teve como intuito mostrar na prática o poder da stack
<strong><a href="https://nodejs.org/pt-br/">NodeJS</a></strong> +
<strong><a href="https://pt-br.reactjs.org/">ReactJS</a></strong> +
<strong><a href="https://reactnative.dev">React Native</a></strong> e como essas tecnologias podem te levar até os seus maiores objetivos como programador.

## Dev Radar

O Dev Radar é uma aplicação para buscar desenvolvedores por stack baseado na localização atual do usuário. O proposito é simples: o usuário busca por uma tecnologia e a aplicação irá informar outros devs num raio de 10KM que trabalham com a respectiva tecnologia.
A aplicação possui duas partes sendo elas a aplicação web e o app mobile, as quais serão mostras e explicadas nos próximos tópicos.

### Aplicação web

A aplicação web tem como função ser a interface de cadastro dos usuários. A interface é simples e possui à esquerda um formulário para preenchimento dos dados e à direita a lista dos usuários já cadastrados, conforme vemos a seguir:

![web](https://github.com/JsnEvt/DevRadar/blob/main/img/web520x815.png)

Ao acessar a página será solicitado a permissão para acessar a localização do usuário, sendo ela concedida, automaticamente os dados de latitude e longitude do usuário serão inseridos no formulário.

### Aplicação mobile

O objetivo do app mobile é servir para realizar a busca de devs por tecnologia desejada. Ao acessar o aplicativo, o usuário irá se deparar com a tela abaixo aonde terá um campo para inserir a tecnologia que deseja buscar e um mapa aonde o pin dos devs serão inseridos revelando suas respectivas localizações:

![mapa_mobile](https://github.com/JsnEvt/DevRadar/blob/main/img/mapa240x520.png)

Ao clicar na marcação de um dev, uma breve descrição dele será exibida, contendo seu nome, bio do Github e as tecnologias com que ele trabalha:

Ao clicar na biografia do desenvolvedor, o usuário será direcionado para o perfil dele no Github aonde poderá segui-lo, ver seus projetos e explorar outras informações à respeito dele:

![perfil_mobile](https://github.com/JsnEvt/DevRadar/blob/main/img/perfil240x520.png)


## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/JsnEvt/DevRadar

# Acesse a pasta do projeto no terminal/cmd
$ cd DevRadar

# Vá para a pasta Backend
$ cd Backend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta 3333 - acesse <http://localhost:3333>
```

### 🖥️ Rodando o Front End (Web)

```bash
# Clone este repositório
$ git clone https://github.com/JsnEvt/DevRadar

# Acesse a pasta do projeto no terminal/cmd
$ cd DevRadar

# Vá para a pasta web
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start


# O servidor inciará na porta 3000 - acesse <http://localhost:3000>
```

### 📱 Rodando o App (Mobile)

```bash
# Clone este repositório
$ git clone https://github.com/JsnEvt/DevRadar

# Acesse a pasta do projeto no terminal/cmd
$ cd DevRadar

# Vá para a pasta mobile
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação
$ expo start

# Será aberto no terminal o menu do Expo onde poderá scanear o QR Code para executar o app diretamente no seu celular ou as opções de executar no emulador android ou iOS
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="75"/>

<img align="left" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="75" />

<img align="left" src="https://www.svgrepo.com/show/353722/expo.svg" alt="Expo" height="100" />

<br><br><br><br>


## 🦸 Autor

[![Linkedin Badge](https://img.shields.io/badge/-Jason-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jason-everton-041226223/)](https://www.linkedin.com/in/jason-everton)

[![Gmail Badge](https://img.shields.io/badge/-jasonemsw10@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jasonemsw10@gmail.com)](mailto:jasonemsw10@gmail.com)


## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Jason Everton 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jason-everton)

---


