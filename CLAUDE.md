# Banker - Banking Dashboard

Projeto de estudo focado em testes frontend e CI/CD. Simula um Internet Banking com Next.js.

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
- Jest 30 + React Testing Library
- date-fns para datas
- GitHub Actions (CI/CD) + Vercel (deploy)

## Estrutura

```
src/
  app/              # Pages e layouts do Next.js
  components/       # Componentes React, cada um em sua própria pasta
    BalanceCard/
      BalanceCard.tsx
      BalanceCard.spec.tsx
      index.ts
  hooks/            # Custom hooks + testes colocados ao lado
    useAccount.ts
    useAccount.spec.ts
  services/         # API client (api.ts)
  utils/            # Funções utilitárias + testes colocados ao lado
    currency.ts
    currency.spec.ts
  types/            # TypeScript types (transaction.ts, account.ts)
  mock/             # Mock data
.github/
  workflows/        # Pipeline CI/CD (GitHub Actions)
```

## Convenções

- Testes ficam ao lado do arquivo que testam (colocação)
- Arquivos de teste usam sufixo `.spec.ts` / `.spec.tsx`
- Componentes ficam em pastas próprias com `index.ts` barrel (ex: `components/BalanceCard/BalanceCard.tsx`)
- Idioma do código: inglês. Documentação/commits: português ok.
