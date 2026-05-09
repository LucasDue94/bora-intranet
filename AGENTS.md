# AGENTS.md

## Projeto

Você está trabalhando em um projeto Angular standalone para uma intranet de uma empresa de eventos.

Siga sempre estas regras globais.

Antes de tudo selecione a versão do node utilizando nvm use 22.12.0

---

# 1. Arquitetura

O projeto usa arquitetura hexagonal.

## Estrutura base

```text
/src
  /core
    /domain
    /dto
    /mappers
    /ports
    /services
    /utils
  /infrastructure
    /repositories
    /storage
    /interceptors
    /theme
  /presentation
    /components
    /pages
    /layouts
    /guards
```

---

# 2. Regras por camada

## /core/domain

- Modelos puros de domínio.
- Não podem depender de Angular, HTTP, DTOs ou infraestrutura.

---

## /core/dto

- Objetos de transferência de dados.
- Arquivos devem seguir a nomenclatura:

```text
nome.dto.ts
```

---

## /core/mappers

- Responsáveis por converter DTO ↔ Domain.
- Todo mapper deve possuir, por padrão:

```text
toDomain
toDTO
```

---

## /core/ports

- Interfaces e contratos usados pelos services.
- Não devem conhecer detalhes de HTTP.

---

## /core/services

- Responsáveis pelas regras de aplicação.
- Devem depender de ports.
- Não devem depender de repositories concretos.

---

## /infrastructure/repositories

- Implementações concretas das ports.
- Aqui pode existir comunicação HTTP.

---

## /presentation

- Componentes, páginas, layouts e guards.
- Não deve conter regra de negócio complexa.

### Convenção obrigatória para páginas

```text
nome.page.ts
nome.page.html
nome.page.scss
```

---

# 3. Angular

- Usar Angular standalone.
- Usar inject() em vez de constructor injection.
- Usar signals quando fizer sentido.
- Usar lazy loading para páginas.
- Usar tipagem forte.
- Evitar arquivos desnecessários.

---

# 4. Antes de alterar qualquer código

Antes de criar ou modificar arquivos:

- Analise a solicitação.
- Explique brevemente o que será criado.
- Respeite a arquitetura existente.
- Não misture responsabilidades entre camadas.

---

# 5. Ao criar uma nova feature

Sempre avalie se a feature precisa de:

- domain
- dto
- mapper
- port
- servicepreciso
- repository
- page
- componentes reutilizáveis
- rota lazy

Crie apenas o necessário.

---

# 6. Regras gerais

- Não misturar DTO com Domain.
- Não acessar HTTP diretamente em components ou services.
- Toda comunicação externa deve passar por repositories.
- Toda conversão entre DTO e Domain deve passar por mappers.
- Domain não deve depender de Angular.
- Preferir código simples e legível.
- Evitar abstrações desnecessárias.
- Evitar duplicação de responsabilidade.
- Manter separação clara entre camadas.
- Priorizar uso de componentes do Primeng
- Usaremos o padrão BEM css
- Priorizar reaproveitamento de css, sempre pensar de modo geral e verificar se já existe uma classe para aquela necessidade antes de criar uma nova
- Utilizar as classes utilitárias Primeflex e Primeicons
- Sempre componentizar quando possível
- Não se preocupe com os testes unitários, só escreva os testes para o componente que eu pedir
