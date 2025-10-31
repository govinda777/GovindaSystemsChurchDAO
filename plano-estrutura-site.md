# Plano de Estrutura do Site - Govinda Systems Church DAO

## 1. Arquitetura de Informação

A estrutura de pastas reflete a hierarquia do site, garantindo que o conteúdo seja fácil de encontrar e que os URLs sejam lógicos.

```
/ (root)
|-- index.html (Homepage)
|-- /pages
|   |-- sobre/
|   |   |-- valores.html
|   |   |-- alicerces.html
|   |   |-- filosofia.html
|   |-- jornada/
|   |   |-- visitante.html
|   |   |-- membro.html
|   |   |-- diacono.html
|   |   |-- presbitero.html
|   |   |-- mandala-mestra.html
|   |-- cerimonias/
|   |   |-- ayahuasca.html
|   |   |-- sananga.html
|   |   |-- rapé.html
|   |   |-- aconselhamento.html
|   |   |-- cursos.html
|   |   |-- casamento.html
|   |   |-- batismo.html
|   |-- comunidade/
|   |   |-- governanca.html
|   |   |-- votacao.html
|   |-- financas/
|   |   |-- doacoes.html
|   |   |-- auditoria.html
|   |   |-- blockchain.html
|   |-- filantropia/
|   |   |-- ongs-certificadas.html
|   |-- dao-builder/
|   |   |-- smart-contracts.html
|   |   |-- templates.html
|   |   |-- suporte.html
|   |-- contato/
|   |   |-- agendar-visita.html
|   |   |-- formulario-contato.html
|-- /assets
|   |-- /css
|   |   |-- main.css
|   |-- /js
|   |   |-- main.js
|   |-- /images
|       |-- /logos
|       |-- /cerimonias
|       |-- /icons
```

## 2. Mapa de Links Internos

### Homepage (`index.html`)
- **Header Nav:**
  - Sobre → `/pages/sobre/valores.html`
  - Jornada → `/pages/jornada/visitante.html`
  - Cerimônias → `/pages/cerimonias/ayahuasca.html`
  - Comunidade → `/pages/comunidade/governanca.html`
  - Finanças → `/pages/financas/doacoes.html`
  - Filantropia → `/pages/filantropia/ongs-certificadas.html`
  - DAO Builder → `/pages/dao-builder/smart-contracts.html`
  - Contato → `/pages/contato/agendar-visita.html`
- **CTAs Críticos:**
  - "Agendar Visita" → `/pages/contato/agendar-visita.html`
  - "Explorar Jornada" → `/pages/jornada/visitante.html`
  - "Ver Doações" → `/pages/financas/doacoes.html`
- **Seções:** Links para todas as 8 seções principais.

### Seção: Sobre
- **Breadcrumbs:** `Home > Sobre`
- **Menu Lateral:**
  - `valores.html` (ativo)
  - `alicerces.html`
  - `filosofia.html`
- **Links de Conteúdo:**
  - Para `Jornada` → `/pages/jornada/visitante.html`

### Seção: Jornada NFT
- **Breadcrumbs:** `Home > Jornada > [Página Atual]`
- **Timeline Visual:**
  - Visitante → `visitante.html`
  - Membro → `membro.html`
  - Diácono → `diacono.html`
  - Presbítero → `presbitero.html`
  - Mandala Mestra → `mandala-mestra.html`
- **Links:** Cada estágio leva ao próximo e ao anterior.

### Seção: Cerimônias
- **Breadcrumbs:** `Home > Cerimônias`
- **Grid de Cerimônias:**
  - Cada cerimônia (Ayahuasca, Sananga, etc.) leva à sua página detalhada.
- **CTA em cada página:** "Agendar Participação" → `/pages/contato/agendar-visita.html`

### Seção: Comunidade
- **Breadcrumbs:** `Home > Comunidade`
- **Links:**
  - `governanca.html` → `votacao.html`
  - `votacao.html` → `(plataforma de votação externa/snapshot)`

### Seção: Finanças
- **Breadcrumbs:** `Home > Finanças`
- **Menu:**
  - `doacoes.html`
  - `auditoria.html`
  - `blockchain.html`
- **Links:**
  - `doacoes.html` → Link para Etherscan da carteira.
  - `auditoria.html` → Dashboard Dune Analytics.

### Seção: Filantropia
- **Breadcrumbs:** `Home > Filantropia`
- **Lista de ONGs:** Cada uma com link para seu site.

### Seção: DAO Builder
- **Breadcrumbs:** `Home > DAO Builder`
- **Links:**
  - `smart-contracts.html` → GitHub Repo
  - `templates.html` → GitHub Repo
  - `suporte.html` → `/pages/contato/formulario-contato.html`

### Seção: Contato
- **Breadcrumbs:** `Home > Contato`
- **Formulários:**
  - Agendamento de visita.
  - Contato geral.

## 3. Jornadas de Usuário (User Flows)

1. **Novo Visitante → Agendamento**
   - `Homepage` → Clica "Agendar Visita" (CTA)
   - `agendar-visita.html` → Preenche formulário
   - *Sucesso:* Mensagem de confirmação.

2. **Visitante → Membro**
   - `Homepage` → "Explorar Jornada"
   - `visitante.html` → Lê sobre a jornada
   - `membro.html` → Vê requisitos
   - Clica "Tornar-se Membro" → (Conecta carteira, mint NFT)

3. **Membro → Votação**
   - `Homepage` → "Comunidade"
   - `governanca.html` → Entende o processo
   - `votacao.html` → Clica para ir ao Snapshot.

4. **Usuário → Doador**
   - `Homepage` → "Finanças" ou "Ver Doações"
   - `doacoes.html` → Vê transparência
   - Clica "Doar com ETH" → (Interage com widget de doação).

## 4. Componentes Reutilizáveis

- **Navbar:** Menu principal com dropdowns.
- **Footer:** Links úteis e redes sociais.
- **Breadcrumbs:** Navegação de localização.
- **Card de Cerimônia:** Imagem, título, descrição curta, botão "Saiba Mais".
- **Timeline de Jornada:** Representação visual dos estágios NFT.
- **Botão CTA Primário:** Estilo consistente para ações principais.

## 5. Priorização de Implementação (Fases)

1. **Fase 1: Foundation (Semana 1)**
   - Setup do repositório e GitHub Pages.
   - `index.html` (Homepage) com a estrutura básica e navegação.
   - Páginas essenciais: `valores.html`, `visitante.html`, `agendar-visita.html`.
   - CSS básico para layout e tipografia.

2. **Fase 2: Jornada e Conteúdo (Semana 2)**
   - Todas as páginas da seção `jornada`.
   - Grid de `cerimonias` com links para páginas (ainda sem conteúdo detalhado).
   - Implementar links internos entre as páginas da jornada.

3. **Fase 3: Transparência e Interação (Semanas 3-4)**
   - Seções `Finanças` e `Comunidade`.
   - Integração com Etherscan/Dune (links).
   - Seção `DAO Builder` com links para o GitHub.

4. **Fase 4: Otimização e Lançamento (Semana 5+)**
   - Conteúdo final para todas as páginas.
   - Otimizações de SEO (meta tags).
   - Teste de links quebrados.
   - Adicionar animações sutis e interatividade (e.g., Mandala Mestra).

## 6. Checklist de Validação

- [ ] Todos os links na `Navbar` funcionam.
- [ ] Todos os CTAs críticos na `Homepage` estão corretos.
- [ ] A navegação por `Breadcrumbs` reflete a estrutura.
- [ ] A timeline da `Jornada` tem links corretos.
- [ ] Links externos (Etherscan, Dune, GitHub) abrem em nova aba.
- [ ] Formulários de contato enviam para o destino correto.
- [ ] O site é responsivo (mobile-first).
