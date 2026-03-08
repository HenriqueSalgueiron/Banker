# Banker - Banking Dashboard

Projeto de estudo focado em testes frontend. Simula um Internet Banking com Next.js.

## Comandos

- `npm run dev` — dev server
- `npm test` — rodar testes
- `npm run test:watch` — testes em modo watch
- `npm run test:coverage` — testes com cobertura (meta: 80%+)
- `npm run lint` — ESLint
- `npm run build` — build de produção

## Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4
- Jest 30 + React Testing Library + MSW 2
- date-fns para datas

## Estrutura

```
src/
  app/              # Pages e layouts do Next.js
  components/       # Componentes React (BalanceCard, TransactionCard, TransactionList)
  hooks/            # Custom hooks (useTransactions, useTransfer)
  services/         # API client (api.ts)
  utils/            # Funções utilitárias (currency.ts, date.ts)
  types/            # TypeScript types (transaction.ts, account.ts)
  mocks/            # MSW handlers
  tests/            # Testes (espelham a estrutura de src/)
```

## Convenções

- Testes ficam em `src/tests/` espelhando a estrutura original (ex: `src/tests/utils/currency.spec.ts`)
- Arquivos de teste usam sufixo `.spec.ts` / `.spec.tsx`
- Componentes ficam em pastas próprias (ex: `components/BalanceCard/BalanceCard.tsx`)
- Idioma do código: inglês. Documentação/commits: português ok.
