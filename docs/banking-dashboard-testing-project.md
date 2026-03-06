# Banking Dashboard -- Projeto de Estudo de Testes Frontend

Projeto focado em **aprender e demonstrar testes no frontend**
utilizando ferramentas modernas do ecossistema React.

A ideia é construir uma aplicação que simula um **Internet Banking**,
inspirada em experiências reais de produtos fintech.

------------------------------------------------------------------------

# Objetivo do Projeto

Treinar e demonstrar:

-   Testes unitários
-   Testes de componentes
-   Testes de hooks
-   Testes de integração
-   Mock de API
-   Testes end‑to‑end

Além disso, o projeto serve como **item forte de portfólio para vagas
frontend pleno/sênior**.

------------------------------------------------------------------------

# Stack Tecnológica

Frontend:

-   Next.js
-   TypeScript
-   Tailwind CSS

Testes:

-   Jest
-   React Testing Library
-   Mock Service Worker (MSW)
-   Playwright (opcional para E2E)

------------------------------------------------------------------------

# Funcionalidades da Aplicação

## Autenticação

-   Login simulado
-   Persistência de sessão

## Dashboard

-   Saldo da conta
-   Lista de transações
-   Gráfico simples de movimentação

## Transações

-   Transferência entre contas
-   Filtro de transações
-   Busca por descrição

## Estados da aplicação

-   Loading
-   Error
-   Empty state

------------------------------------------------------------------------

# Arquitetura do Projeto

Estrutura recomendada:

src/

components/ BalanceCard/ TransactionCard/ TransactionList/

hooks/ useTransactions/ useTransfer/

services/ api.ts

utils/ currency.ts date.ts

mocks/ handlers.ts

tests/ transfer-flow.test.tsx

------------------------------------------------------------------------

# Tipos de Testes

## 1. Testes Unitários

Testam funções puras da aplicação.

Exemplos:

-   formatCurrency()
-   calculateBalance()
-   filterTransactions()

Exemplo:

``` ts
describe("calculateBalance", () => {
  it("should sum deposits and withdrawals", () => {
    const transactions = [
      { type: "deposit", amount: 100 },
      { type: "withdraw", amount: 50 }
    ]

    const result = calculateBalance(transactions)

    expect(result).toBe(50)
  })
})
```

------------------------------------------------------------------------

## 2. Testes de Componentes

Testam renderização e comportamento de componentes.

Exemplo:

``` tsx
render(<TransactionCard transaction={mockTransaction} />)

expect(
  screen.getByText("Transferência")
).toBeInTheDocument()
```

Casos a testar:

-   renderização correta
-   estado vazio
-   loading
-   erro

------------------------------------------------------------------------

## 3. Testes de Hooks

Testar lógica isolada.

Exemplo:

-   useTransactions
-   useTransfer

Casos:

-   loading
-   sucesso
-   erro

------------------------------------------------------------------------

## 4. Testes de Integração

Testam fluxos reais da aplicação.

Exemplo de fluxo:

Usuário realiza transferência\
→ API é chamada\
→ saldo é atualizado\
→ interface reflete mudança

------------------------------------------------------------------------

# Mock de API com MSW

MSW permite simular respostas de API durante os testes.

Exemplo:

``` ts
rest.get("/transactions", (req, res, ctx) => {
  return res(
    ctx.json(mockTransactions)
  )
})
```

Vantagens:

-   testes independentes de backend
-   previsibilidade
-   simulação de erro e latência

------------------------------------------------------------------------

# Testes End‑to‑End (Opcional)

Ferramenta:

Playwright

Fluxo exemplo:

Login\
→ acessar dashboard\
→ realizar transferência\
→ verificar saldo atualizado

------------------------------------------------------------------------

# Cobertura de Testes

Configurar no Jest:

coverage

Meta recomendada:

80% ou mais

Exemplo para README:

Test Coverage: 86%

------------------------------------------------------------------------

# Estrutura do README

Exemplo:

# Banking Dashboard

Simulação de internet banking construída com Next.js e TypeScript.

## Stack

-   Next.js
-   TypeScript
-   Jest
-   React Testing Library
-   MSW
-   Playwright

## Testes

Testes unitários, de componentes e integração.

## Cobertura

86%

------------------------------------------------------------------------

# Como colocar no currículo

Exemplo:

Banking Dashboard (Projeto pessoal)

-   Aplicação web simulando internet banking construída com Next.js e
    TypeScript
-   Implementação de testes unitários, de componentes e integração com
    Jest e React Testing Library
-   Mock de API utilizando MSW
-   Testes end‑to‑end com Playwright
-   Cobertura de testes superior a 80%

------------------------------------------------------------------------

# Roadmap de Estudo

## Semana 1 -- Jest

-   fundamentos de testes
-   unit tests
-   mocks
-   coverage

## Semana 2 -- React Testing Library

-   renderização
-   queries
-   userEvent
-   testes de componentes

## Semana 3 -- Integração

-   MSW
-   testes de fluxo
-   Playwright (E2E)

------------------------------------------------------------------------

# Resultado Esperado

Ao final do projeto você terá:

-   domínio de testes frontend modernos
-   projeto forte de portfólio
-   demonstração de maturidade em engenharia de software
-   melhor posicionamento para vagas frontend pleno/sênior
