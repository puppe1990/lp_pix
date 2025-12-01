# Blog MDX

Esta pasta contém os posts do blog em formato MDX.

## Como criar um novo post

1. Crie um novo arquivo `.mdx` nesta pasta
2. Adicione o frontmatter no início do arquivo:

```mdx
---
title: "Título do Post"
date: "2024-01-15"
excerpt: "Breve descrição do post"
author: "Nome do Autor"
tags: ["Tag1", "Tag2", "Tag3"]
---

Conteúdo do post em Markdown/MDX...
```

## Campos do Frontmatter

- `title` (obrigatório): Título do post
- `date` (obrigatório): Data de publicação no formato YYYY-MM-DD
- `excerpt` (opcional): Breve descrição que aparece na listagem
- `author` (opcional): Nome do autor
- `tags` (opcional): Array de tags para categorização

## Exemplo

Veja o arquivo `exemplo-post.mdx` para um exemplo completo de post.

## Recursos Suportados

- Markdown padrão
- Sintaxe MDX (componentes React)
- Syntax highlighting para código
- Tabelas (GitHub Flavored Markdown)
- Links automáticos em títulos
- Estilos customizados via Tailwind CSS

