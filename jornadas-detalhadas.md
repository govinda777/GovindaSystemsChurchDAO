# Jornadas de Usuário Detalhadas - Govinda Systems Church DAO

Este documento aprofunda as jornadas dos diferentes perfis de usuário, identificando pontos críticos e fluxos de interação.

## Jornada 1: Novo Visitante

- **Perfil:** Alguém que ouviu falar da igreja e quer saber mais. Cético, mas curioso.
- **Objetivo:** Entender se o local é seguro, acolhedor e se os valores se alinham com os seus. O objetivo final é agendar uma primeira visita.
- **Tempo Estimado:** 10-16 minutos.

### Fluxo Visual (ASCII)
```
[Homepage]
    |
    +-- CTA "Explorar Valores" -> [Página: Valores]
    |   |
    |   +--> Leitura sobre Empatia, Paz, etc.
    |   |
    |   +--> Link "Veja Nossas Cerimônias" -> [Página: Grid de Cerimônias]
    |       |
    |       +--> Clica em "Ayahuasca" -> [Página: Detalhe Ayahuasca]
    |           |
    |           +--> Lê sobre segurança e preparação
    |           |
    |           +--> CTA "Agendar Participação" -> [Página: Agendar Visita]
    |
    +-- CTA "Agendar Visita" (Direto) -> [Página: Agendar Visita]
        |
        +--> Preenche formulário (Nome, Email, Cerimônia de Interesse)
        |
        +--> [MENSAGEM DE SUCESSO]
```

- **Pontos Críticos:**
  - Clareza e transparência na página de Valores.
  - Informações sobre segurança e protocolo nas páginas de cerimônias.
  - Facilidade de uso do formulário de agendamento.
- **Saída Esperada:** Um novo lead qualificado para uma visita.

## Jornada 2: Visitante -> Membro

- **Perfil:** Já participou de uma cerimônia, sentiu-se conectado e quer se aprofundar.
- **Objetivo:** Entender o caminho de progressão, os benefícios e responsabilidades de se tornar membro.
- **Tempo Estimado:** 15-20 minutos.

### Fluxo Visual (ASCII)
```
[Homepage]
    |
    +-- Menu "Jornada" -> [Página: Visitante]
        |
        +--> Leitura sobre o primeiro passo
        |
        +--> Timeline Visual -> Clica em "Membro" -> [Página: Membro]
            |
            +--> Entende requisitos (e.g., participar de 3 cerimônias)
            |
            +--> Vê benefícios (acesso a cursos, poder de voto)
            |
            +--> CTA "Tornar-se Membro" -> [Conexão de Carteira Digital]
                |
                +--> [Mint do NFT de Membro]
                |
                +--> [Página de Confirmação/Boas-vindas]
```

- **Pontos Críticos:**
  - A timeline da jornada deve ser clara e intuitiva.
  - Os pré-requisitos para cada nível devem ser explícitos.
  - O processo de conexão da carteira e mint do NFT deve ser o mais simples possível.
- **Saída Esperada:** Um novo membro oficial da DAO.

## Jornada 3: Membro Ativo (Governança)

- **Perfil:** Membro com NFT, engajado e quer participar das decisões.
- **Objetivo:** Entender como funciona a governança, ver propostas e votar.
- **Tempo Estimado:** 5-10 minutos.

### Fluxo Visual (ASCII)
```
[Homepage]
    |
    +-- Menu "Comunidade" -> [Página: Governança]
        |
        +--> Leitura sobre o processo de propostas e votação
        |
        +--> Link "Ver Propostas Ativas" -> [Página: Votação]
            |
            +--> Lista de propostas (ativas e passadas)
            |
            +--> CTA "Votar no Snapshot" -> [Redireciona para Snapshot.org]
```
- **Ponto Crítico:** A página de votação deve ser um "hub" claro que direciona para a plataforma externa de forma segura.
- **Saída Esperada:** Voto computado em uma proposta.

## Jornada 4: Doador

- **Perfil:** Usuário (membro ou não) que acredita no projeto e quer contribuir financeiramente.
- **Objetivo:** Fazer uma doação de forma transparente e segura.
- **Tempo Estimado:** 8-12 minutos.

### Fluxo Visual (ASCII)
```
[Homepage]
    |
    +-- CTA "Ver Doações" -> [Página: Doações]
        |
        +--> Vê o total arrecadado e a lista de transações
        |
        +--> Link "Auditoria Completa" -> [Dashboard Dune Analytics] (Opcional)
        |
        +--> [Widget de Doação]
            |
            +--> Conecta carteira
            |
            +--> Insere valor em ETH
            |
            +--> Confirma transação
            |
            +--> [MENSAGEM DE SUCESSO]
```
- **Ponto Crítico:** A prova social (transparência total) é o que motiva a doação. O widget deve ser confiável.
- **Saída Esperada:** Doação registrada na blockchain.

## Jornada 5: Developer (DAO Builder)

- **Perfil:** Desenvolvedor ou líder de outra comunidade interessado em replicar o modelo.
- **Objetivo:** Acessar os smart contracts, templates e entender como "forkar" a DAO.
- **Tempo Estimado:** 20-30 minutos.

### Fluxo Visual (ASCII)
```
[Homepage]
    |
    +-- Menu "DAO Builder" -> [Página: Smart Contracts]
        |
        +--> Explicação da arquitetura (MembershipNFT, Treasury, Gov)
        |
        +--> CTA "Ver Contratos no GitHub" -> [Repositório GitHub]
            |
            +--> Navega pelo código na pasta /contracts
            |
            +--> Lê o README.md do repositório
            |
            +--> [Fork do Repositório]
```
- **Ponto Crítico:** A documentação no GitHub (README) é tão importante quanto o código.
- **Saída Esperada:** Um novo fork do projeto, expandindo o ecossistema.

## Jornada 6: Explorador de Eventos

- **Perfil:** Membro ou visitante recorrente que quer ver o calendário de eventos.
- **Objetivo:** Descobrir qual a próxima cerimônia ou curso.
- **Tempo Estimado:** 5-10 minutos.

### Fluxo Visual (ASCII)
```
[Homepage]
    |
    +-- Menu "Cerimônias" -> [Página: Grid de Cerimônias]
        |
        +--> Visualiza todas as cerimônias disponíveis
        |
        +--> Clica em "Cursos Semanais" -> [Página: Detalhe Cursos]
            |
            +--> Vê a agenda e os temas
            |
            +--> CTA "Inscrever-se" -> [Página: Agendar Visita] (com o campo "Cursos" pré-selecionado)
```
- **Ponto Crítico:** O grid de cerimônias deve ser visualmente atraente e fácil de navegar.
- **Saída Esperada:** Inscrição em um evento específico.
