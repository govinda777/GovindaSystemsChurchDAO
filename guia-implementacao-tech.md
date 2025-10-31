# Guia de Implementação Técnica - Govinda Systems Church DAO

Este guia fornece os passos técnicos para implementar a estrutura do site usando GitHub Pages e Jekyll.

## 1. Setup do Ambiente (GitHub Pages com Jekyll)

1.  **Nome do Repositório:** Verifique se o repositório no GitHub está nomeado como `[username].github.io` para um site de usuário ou configure o `gh-pages` para um site de projeto.
2.  **Habilitar GitHub Pages:**
    *   Vá para `Settings > Pages`.
    *   Selecione a branch `main` (ou `master`) como fonte.
    *   Escolha a pasta `/ (root)` ou `/docs`.
3.  **Arquivo `_config.yml`:** Crie este arquivo na raiz para configurar o Jekyll.

    ```yaml
    title: Govinda Systems Church DAO
    description: A decentralized church for the new age.
    baseurl: "" # Deixe em branco se for site de usuário/organização
    url: "https://[username].github.io" # URL final
    theme: jekyll-theme-minimal
    ```

## 2. Estrutura de Diretórios Recomendada (Jekyll)

Jekyll tem uma estrutura específica. A arquitetura de informação do plano se traduz assim:

```
/ (root)
|-- _config.yml
|-- index.html (Homepage)
|-- /pages/
|   |-- sobre/
|   |   |-- valores.md
|   |   |-- alicerces.md
|   |-- jornada/
|       |-- visitante.md
|       |-- membro.md
|   |-- ... (outras pastas)
|-- _layouts/
|   |-- default.html (Template base)
|   |-- page.html (Template para páginas internas)
|-- _includes/
|   |-- header.html (Navbar)
|   |-- footer.html
|   |-- breadcrumbs.html
|-- assets/
    |-- css/
    |   |-- style.scss (Sass habilitado por padrão)
    |-- js/
    |-- images/
```

*   **Páginas em Markdown (`.md`):** Mais fácil de editar conteúdo. Adicione o `front matter` no topo:
    ```markdown
    ---
    layout: page
    title: Nossos Valores
    permalink: /pages/sobre/valores/
    ---

    O conteúdo da página vai aqui...
    ```

## 3. Template HTML Base (`_layouts/default.html`)

Este é o esqueleto de todas as páginas.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }} | {{ site.title }}</title>
    <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
</head>
<body>
    {% include header.html %}

    <main>
        {{ content }}
    </main>

    {% include footer.html %}
    <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>
```

## 4. Navegação Reutilizável (`_includes/header.html`)

Crie o menu de navegação aqui para que ele apareça em todas as páginas.

```html
<header>
    <nav>
        <a href="{{ '/' | relative_url }}">Home</a>
        <div class="dropdown">
            <button>Sobre</button>
            <div class="dropdown-content">
                <a href="{{ '/pages/sobre/valores/' | relative_url }}">Valores</a>
                <a href="{{ '/pages/sobre/alicerces/' | relative_url }}">Alicerces</a>
            </div>
        </div>
        <!-- Outros menus dropdown -->
    </nav>
</header>
```

## 5. Mapa de Links por Página (Referência Rápida)

Use esta tabela como um checklist ao criar os links.

| Página Origem           | Texto do Link         | Página Destino                                     |
| ----------------------- | --------------------- | -------------------------------------------------- |
| **Homepage**            | `Agendar Visita`      | `/pages/contato/agendar-visita/`                |
| **Homepage**            | `Explorar Jornada`    | `/pages/jornada/visitante/`                     |
| `valores.html`          | `Nossa Jornada`       | `/pages/jornada/visitante/`                     |
| `visitante.html`        | `Próximo: Membro`     | `/pages/jornada/membro/`                        |
| `ayahuasca.html`        | `Agendar`             | `/pages/contato/agendar-visita/`                |
| `doacoes.html`          | `Ver Transações`      | `https://etherscan.io/address/[SUACARTEIRA]`       |
| `smart-contracts.html`  | `Ver no GitHub`       | `https://github.com/[SEUREPO]/tree/main/contracts` |

## 6. Script de Teste Automático de Links

Para evitar links quebrados, pode-se usar um script simples com `npm`.

1.  **Setup:**
    *   `npm init -y`
    *   `npm install broken-link-checker -D`
2.  **Adicione ao `package.json`:**
    ```json
    "scripts": {
      "test:links": "blc --recursive --exclude-external http://127.0.0.1:4000"
    }
    ```
3.  **Como usar:**
    *   Rode o Jekyll localmente: `bundle exec jekyll serve`
    *   Em outro terminal, rode: `npm run test:links`

## 7. Checklist de Implementação

-   **Fase 1: Foundation**
    -   [ ] Repositório criado e GitHub Pages ativado.
    -   [ ] `_config.yml` configurado.
    -   [ ] `_layouts/default.html` e `_includes/header.html` criados.
    -   [ ] `index.html` (Homepage) com navegação básica.
    -   [ ] Página `/pages/sobre/valores.md` criada.
    -   [ ] Página `/pages/jornada/visitante.md` criada.
    -   [ ] Página `/pages/contato/agendar-visita.md` criada.
    -   [ ] CSS inicial (`style.scss`) com tipografia e cores.
-   **Fase 2: Jornada e Conteúdo**
    -   [ ] Todas as páginas em `/pages/jornada/` criadas.
    -   [ ] Timeline da jornada implementada (HTML/CSS).
    -   [ ] Grid de cerimônias na página principal da seção.
    -   [ ] Links entre as páginas da jornada estão funcionando.
-   **Fase 3: Transparência e Interação**
    -   [ ] Páginas de `Finanças` e `Comunidade` criadas.
    -   [ ] Links externos para Etherscan e Dune adicionados.
    -   [ ] Links para o repositório GitHub na seção `DAO Builder`.
-   **Fase 4: Otimização**
    -   [ ] `title` e `description` (meta) em todas as páginas via Front Matter.
    -   [ ] Teste de links quebrados (`npm run test:links`).
    -   [ ] Validação mobile-first (DevTools).
    -   [ ] Deploy final.
