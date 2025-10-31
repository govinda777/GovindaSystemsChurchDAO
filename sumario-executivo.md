# Sumário Executivo - Plano de Estrutura do Site

Este documento fornece uma visão geral de alto nível do plano de organização do site Govinda Systems Church DAO.

## 1. Visão Geral do Projeto

O objetivo é reestruturar o site atual de uma única página para uma plataforma multi-página, organizada, intuitiva e que guie diferentes perfis de usuário através de jornadas claras, desde o primeiro contato até o engajamento na DAO.

## 2. Estrutura Visual do Site

A arquitetura de informação foi desenhada para ser hierárquica e escalável.

- **Homepage (Nível 0)**
  - **Seções Principais (Nível 1)**
    - `sobre`
    - `jornada`
    - `cerimonias`
    - `comunidade`
    - `financas`
    - `filantropia`
    - `dao-builder`
    - `contato`
      - **Páginas de Detalhe (Nível 2)**
        - `valores.html`
        - `visitante.html`
        - `ayahuasca.html`
        - etc.

## 3. Jornadas de Usuário Resumidas

Foram mapeadas 6 jornadas críticas para garantir que as necessidades de cada tipo de usuário sejam atendidas.

| # | Jornada                 | Ponto de Entrada | Conversão Final             | Foco da Experiência        |
|---|-------------------------|------------------|-----------------------------|----------------------------|
| 1 | **Novo Visitante**      | Homepage         | Agendamento de Visita       | Confiança e Acolhimento    |
| 2 | **Visitante → Membro**  | Seção "Jornada"  | Mint de NFT de Membro       | Clareza no Caminho         |
| 3 | **Membro Ativo**        | Seção "Comunidade" | Voto em Proposta (Snapshot) | Empoderamento e Participação|
| 4 | **Doador**              | Seção "Finanças" | Transação de ETH Confirmada | Transparência e Segurança  |
| 5 | **Developer**           | Seção "DAO Builder"| Fork do Repositório GitHub  | Acessibilidade e Documentação|
| 6 | **Explorador de Eventos**| Seção "Cerimônias"| Inscrição em Evento         | Descoberta e Facilidade    |

## 4. CTAs (Calls-to-Action) Críticos

Estes são os CTAs que devem ter maior destaque e, idealmente, aparecer em todas as páginas (no header ou em locais estratégicos).

1.  **"Agendar Visita"** → `/pages/contato/agendar-visita.html`
2.  **"Explorar Jornada"** → `/pages/jornada/visitante.html`
3.  **"Ver Doações"** → `/pages/financas/doacoes.html`
4.  **"Criar sua DAO"** → `/pages/dao-builder/smart-contracts.html`

## 5. Fases de Implementação Resumidas

A implementação será dividida em 4 fases para garantir entregas incrementais e gerenciáveis.

-   **Semana 1: Foundation**
    -   **Entrega:** Homepage funcional com navegação e as 3 páginas mais críticas (Valores, Visitante, Agendar Visita).
-   **Semana 2: Jornada**
    -   **Entrega:** Seção completa da Jornada NFT e grid de cerimônias.
-   **Semanas 3-4: Transparência & Comunidade**
    -   **Entrega:** Seções de Finanças, Governança e DAO Builder com links funcionais.
-   **Semana 5+: Otimizações**
    -   **Entrega:** Site completo, otimizado para SEO, mobile e com todos os links validados.

## 6. Métricas de Sucesso a Rastrear

-   **Engajamento:**
    -   Número de agendamentos de visita por semana.
    -   Taxa de conversão de visitante para membro (novos NFTs mintados).
-   **Governança:**
    -   Número de votos em propostas.
-   **Financeiro:**
    -   Volume de doações em ETH.
-   **Ecossistema:**
    -   Número de forks no repositório do DAO Builder.

## 7. Próximos Passos Imediatos

1.  **Aprovar este plano.**
2.  **Iniciar a Fase 1:** Configurar o ambiente técnico (GitHub Pages/Jekyll).
3.  **Desenvolver a Homepage (`index.html`) e o template base.**
4.  **Criar as três primeiras páginas de conteúdo (`valores`, `visitante`, `agendar-visita`).**
