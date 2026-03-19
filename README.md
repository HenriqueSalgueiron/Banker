# Banking Dashboard

Simulacao de internet banking construida com Next.js e TypeScript, com foco em **testes frontend**.

## Objetivo

Demonstrar dominio em testes frontend modernos:

- Testes unitarios
- Testes de componentes
- Testes de hooks
- Testes de integracao
- Mock de API
- Testes end-to-end (opcional)

## Stack

**Frontend:**

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

**Testes:**

- Jest 30
- React Testing Library
- Playwright (opcional para E2E)

## Funcionalidades

- Saldo da conta
- Lista de transacoes
- Transferencia entre contas
- Filtro e busca por descricao
- Estados de loading, erro e empty state

## Arquitetura

```
src/
  app/              # Pages e layouts do Next.js
  components/       # Componentes React
  hooks/            # Custom hooks (useTransactions, useTransfer)
  services/         # API client (api.ts)
  utils/            # Funcoes utilitarias (currency.ts, date.ts)
  types/            # TypeScript types
  mocks/            # Mock data
  tests/            # Testes (espelham a estrutura de src/)
```

## Tipos de Testes

### Testes Unitarios

Testam funcoes puras da aplicacao (`formatCurrency`, `formatDate`, etc).

### Testes de Componentes

Testam renderizacao e comportamento dos componentes com React Testing Library: renderizacao correta, loading, erro e empty state.

### Testes de Hooks

Testam logica isolada dos hooks (`useTransactions`, `useTransfer`) com cenarios de loading, sucesso e erro.

### Testes de Integracao

Testam fluxos reais: usuario realiza transferencia -> API e chamada -> saldo e atualizado -> interface reflete mudanca.

### Mock de API

Mocking com `jest.mock()`, `jest.fn()` e `jest.spyOn()` para isolar dependencias e simular respostas de API nos testes.

## Como rodar

```bash
npm run dev           # dev server
npm test              # rodar testes
npm run test:watch    # testes em modo watch
npm run test:coverage # testes com cobertura
npm run lint          # ESLint
npm run build         # build de producao
```

## Cobertura

Meta: 80%+
