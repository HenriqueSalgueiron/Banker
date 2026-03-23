# Banking Dashboard

Simulacao de internet banking construida com Next.js e TypeScript, com foco em **testes frontend**.

## Stack

**Frontend:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4

**Testes:** Jest 30 · React Testing Library · user-event

## Funcionalidades

- Saldo da conta
- Lista de transacoes
- Transferencia entre contas
- Filtro e busca por descricao
- Estados de loading, erro e empty state

## Testes

29 testes · 100% de cobertura

| Tipo | Quantidade | Descricao |
|------|-----------|-----------|
| Unitarios | 9 | Funcoes puras (`formatCurrency`, `formatDate`, `adjustToBusinessDay`) |
| Componentes | 11 | Renderizacao, loading, erro, empty state, interacoes com `userEvent` |
| Hooks | 6 | `useAccount` e `useTransfer` com `jest.mock()`, `jest.fn()`, `renderHook` |
| Integracao | 3 | Fluxo completo: service → hook → componentes no Dashboard |

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
  tests/            # Testes (espelham a estrutura de src/)
```

## Como rodar

```bash
npm run dev           # dev server
npm test              # rodar testes
npm run test:coverage # testes com cobertura
npm run lint          # ESLint
npm run build         # build de producao
```
