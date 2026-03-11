# 📱 CRM Mobile – Plataforma de Gestão

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/status-concluído-brightgreen?style=for-the-badge)

> Aplicação **mobile** para gerenciamento de **clientes**, **produtos**, **vendas** e **embalagens** em um sistema CRM, desenvolvida com **React Native + Expo + TypeScript** 🛒.

---

## 📄 Sumário

1. [Visão Geral](#-visão-geral)
2. [Principais Funcionalidades](#-principais-funcionalidades)
3. [Arquitetura e Organização](#-arquitetura-e-organização)
4. [Estrutura do Projeto](#-estrutura-do-projeto)
5. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
6. [Como Executar](#-como-executar)
7. [Fluxo de Uso](#-fluxo-de-uso)
8. [Autor](#-autor)

---

## 🔍 Visão Geral

O **CRM Mobile** é uma aplicação de gestão desenvolvida para simular um sistema real de CRM, contemplando:

* Autenticação de usuários
* Gerenciamento de clientes
* Catálogo de produtos por categoria
* Registro e controle de vendas
* Gerenciamento de embalagens

O projeto foi desenvolvido inteiramente em **React Native + Expo**, com **TypeScript** para garantir tipagem segura e uma estrutura organizada e escalável.

---

## ⭐ Principais Funcionalidades

1. **Autenticação**

   * Tela de login com e-mail e senha.
   * Sessão persistida localmente com AsyncStorage.
   * Redirecionamento automático para usuários já autenticados.

2. **Clientes**

   * Listagem de clientes cadastrados.
   * Cadastro de novo cliente.
   * Edição e remoção de clientes.

3. **Produtos**

   * Listagem de produtos com filtro por categoria.
   * Cadastro, edição e remoção de produtos.

4. **Vendas**

   * Listagem de vendas realizadas.
   * Registro de nova venda.
   * Edição e remoção de vendas.

5. **Categorias**

   * Listagem, cadastro, edição e remoção de categorias de produtos.

6. **Embalagens (Packing)**

   * Listagem, cadastro, edição e remoção de tipos de embalagem.

---

## 🏗️ Arquitetura e Organização

### 📌 Estrutura Atual

O projeto está organizado de forma modular com separação clara de responsabilidades:

* Separação entre telas (screens), componentes visuais, serviços de dados e contextos globais.
* Tipagem estática com TypeScript em toda a aplicação.
* Gerenciamento de estado global via Context API.
* Navegação estruturada com React Navigation (Stack e Tab).

---

## 📂 Estrutura do Projeto

```
crm-mobile-react-native/
├── assets/                  # Ícones e imagens do app
│
├── src/
│   ├── components/          # Componentes reutilizáveis (botões, inputs, cards...)
│   ├── screens/             # Telas da aplicação (Login, Clientes, Produtos, Vendas...)
│   ├── navigation/          # Configuração do React Navigation (Stack / Tab)
│   ├── services/            # Configuração das chamadas de dados
│   ├── contexts/            # Contextos React (AuthContext, etc.)
│   └── types/               # Tipos e interfaces TypeScript
│
├── App.tsx                  # Ponto de entrada da aplicação
├── app.json                 # Configuração do Expo
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências e scripts
```

---

## 🔧 Tecnologias Utilizadas

| Camada | Tecnologia |
|---|---|
| **Mobile** | React Native • Expo |
| **Linguagem** | TypeScript |
| **Navegação** | React Navigation (Stack / Tab) |
| **Estado Global** | Context API |
| **Persistência Local** | AsyncStorage |
| **Ícones** | React Native Vector Icons |

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/GabrielSMeireles/crm-mobile-react-native.git
```

2. Acesse a pasta do projeto e instale as dependências:

```bash
cd crm-mobile-react-native
yarn install
```

3. Inicie o Expo:

```bash
yarn start
```

Após rodar `yarn start`, o **Metro Bundler** será aberto no navegador. Você pode:

* 📷 Escanear o **QR Code** com o app **Expo Go** no celular
* Pressionar `a` para abrir no **emulador Android**
* Pressionar `i` para abrir no **simulador iOS** (apenas macOS)

---

## 🔄 Fluxo de Uso

1. Abra o app e faça login com suas credenciais.
2. Navegue pelo menu para acessar os módulos disponíveis.
3. Gerencie seus **clientes**: cadastre, edite ou remova registros.
4. Acesse **produtos** e filtre por categoria.
5. Registre uma nova **venda** associando cliente e produto.
6. Gerencie **embalagens** e **categorias** conforme necessário.

---

## 👨‍💻 Autor

**Gabriel Meireles**
Desenvolvedor em formação com foco em Back-end e Fullstack.

---

> Projeto desenvolvido com foco em simular um sistema CRM real, aplicando boas práticas de desenvolvimento mobile com React Native e TypeScript.
