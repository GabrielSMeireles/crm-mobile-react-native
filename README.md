# CRM Mobile (React Native + Expo)

[![React Native](https://img.shields.io/badge/React%20Native-0.70%2B-blue)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2047-black)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

Aplicação **mobile** para gerenciamento de **clientes**, **produtos**, **vendas** e **embalagens** em um sistema CRM, construída com **React Native + Expo + TypeScript**.

---

## 🔥 Destaques

- 📱 Interface mobile responsiva com React Native + Expo
- 🧠 Gerenciamento de Clientes, Produtos, Vendas, Embalagens e Categorias
- ⚡️ TypeScript em todo o projeto para tipagem segura
- 🧭 Navegação entre telas com React Navigation
- 🗂️ Estrutura organizada por responsabilidades (screens, components, services, contexts)

---

## ✅ Pré-requisitos

Antes de rodar o projeto:

- **Node.js 18+**
- **Yarn**
- **Expo CLI** instalado globalmente:
  ```bash
  npm install -g expo-cli
  ```
- **Expo Go** no seu dispositivo físico (Android ou iOS), **ou** um emulador configurado

---

## 🏁 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/GabrielSMeireles/crm-mobile-react-native.git
cd crm-mobile-react-native

# Instale as dependências
yarn install

# Inicie o Expo
yarn start
```

Após rodar `yarn start`, o **Metro Bundler** será aberto no navegador. Você pode:

- 📷 Escanear o **QR Code** com o app **Expo Go** no celular
- Pressionar `a` para abrir no **emulador Android**
- Pressionar `i` para abrir no **simulador iOS** (apenas macOS)

---

## 📱 Telas e Funcionalidades

### 🔑 Login
- Tela inicial do app
- Campos de e-mail e senha
- Redirecionamento automático caso o usuário já esteja autenticado

### 👥 Clientes
- Listagem de todos os clientes cadastrados
- Cadastro de novo cliente
- Edição de dados do cliente
- Remoção de cliente

### 📦 Produtos
- Listagem de produtos com filtro por categoria
- Cadastro de novo produto
- Edição de produto existente
- Remoção de produto

### 🛒 Vendas
- Listagem de vendas realizadas
- Registro de nova venda
- Edição e remoção de vendas

### 🗂️ Categorias
- Listagem de categorias de produtos
- Cadastro, edição e remoção de categorias

### 📫 Embalagens (Packing)
- Listagem de tipos de embalagem
- Cadastro, edição e remoção de embalagens

---

## 🗂️ Estrutura do Projeto

```
crm-mobile-react-native/
├── assets/                  # Ícones e imagens do app
├── src/
│   ├── components/          # Componentes reutilizáveis (botões, inputs, cards...)
│   ├── screens/             # Telas da aplicação (Login, Clientes, Produtos, Vendas...)
│   ├── navigation/          # Configuração do React Navigation (Stack / Tab)
│   ├── services/            # Configuração das chamadas de dados
│   ├── contexts/            # Contextos React (AuthContext, etc.)
│   └── types/               # Tipos e interfaces TypeScript
├── App.tsx                  # Ponto de entrada da aplicação
├── app.json                 # Configuração do Expo
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências e scripts
```

---

## 📦 Principais Dependências

| Pacote | Finalidade |
|---|---|
| `react-native` | Framework mobile |
| `expo` | Ambiente de desenvolvimento mobile |
| `typescript` | Tipagem estática |
| `@react-navigation/native` | Navegação entre telas |
| `@react-native-async-storage/async-storage` | Persistência local de dados |
| `react-native-vector-icons` | Ícones na interface |

---

## ✅ O que ver no projeto

- Estrutura de projeto React Native com Expo e TypeScript bem organizada
- Navegação entre telas com React Navigation (Stack e Tab)
- Separação clara de responsabilidades: telas, componentes, serviços e contextos
- CRUD completo para todos os módulos do CRM
- Uso de Context API para gerenciamento de estado global

---
