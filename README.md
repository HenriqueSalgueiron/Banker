# Banking Dashboard

[![CI/CD](https://github.com/HenriqueSalgueiron/Banker/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/HenriqueSalgueiron/Banker/actions/workflows/ci-cd.yml)

Simulacao de internet banking construida com Next.js e TypeScript, com foco em **testes frontend** e **CI/CD**.

## Stack

**Frontend:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4

**Testes:** Jest 30 · React Testing Library · user-event

**CI/CD:** GitHub Actions · Vercel

## Funcionalidades

- Saldo da conta
- Lista de transacoes
- Transferencia entre contas
- Filtro e busca por descricao
- Estados de loading, erro e empty state

## Testes

29 testes · 100% de cobertura

| Tipo        | Quantidade | Descricao                                                                 |
| ----------- | ---------- | ------------------------------------------------------------------------- |
| Unitarios   | 9          | Funcoes puras (`formatCurrency`, `formatDate`, `adjustToBusinessDay`)     |
| Componentes | 11         | Renderizacao, loading, erro, empty state, interacoes com `userEvent`      |
| Hooks       | 6          | `useAccount` e `useTransfer` com `jest.mock()`, `jest.fn()`, `renderHook` |
| Integracao  | 3          | Fluxo completo: service → hook → componentes no Dashboard                 |

## CI/CD

Pipeline automatizado com GitHub Actions que roda a cada push na `main` e em pull requests.

| Etapa   | Descricao                                            |
| ------- | ---------------------------------------------------- |
| Lint    | Verifica padroes de codigo com ESLint                |
| Testes  | Roda os 29 testes com Jest                           |
| Build   | Compila o projeto com Next.js                        |
| Deploy  | Deploy automatico na Vercel (apenas push na `main`)  |

Deploy: [banker-yt3k.vercel.app](https://banker-yt3k.vercel.app)

## Arquitetura

```
src/
  app/              # Pages, layouts e API routes (Next.js)
  components/       # Componentes React (BalanceCard, TransactionCard, TransactionList, Dashboard)
  hooks/            # Custom hooks (useAccount, useTransfer)
  services/         # API client (api.ts)
  utils/            # Funcoes utilitarias (currency.ts, date.ts)
  types/            # TypeScript types
  mock/             # Mock data
.github/
  workflows/        # Pipeline CI/CD (GitHub Actions)
```

## Como rodar

```bash
npm run dev           # dev server
npm test              # rodar testes
npm run test:coverage # testes com cobertura
npm run lint          # ESLint
npm run build         # build de producao
```

React · Next.js · React Native · Vue.js · TypeScript · JavaScript · HTML5 · CSS3 · Jest · Testing Library · REST APIs · Vuex · Pinia · Python · Django · PostgreSQL · Node.js · Docker · Zustand · Tailwind CSS · SASS · Git · Firebase · Figma · WCAG
