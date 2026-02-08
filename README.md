# 🚀 Storytelling de Workflow: Sprint de Alinhamento GitFlow

> **Case de Liderança Técnica e Cultura de Engenharia**

Este projeto documenta e materializa, em formato de aplicação React, o processo de mentoria e padronização de workflow realizado entre a Tech Lead, o Product Owner e o time de Frontend.

🔗 **Acesse o Projeto:** [https://nosso-carrossel-storytelling.vercel.app/](https://nosso-carrossel-storytelling.vercel.app/)

## 📌 O Desafio e a Solução

O objetivo foi transformar o alinhamento técnico (muitas vezes abstrato) em um produto visual tangível. Utilizamos esta aplicação para validar na prática a metodologia **GitFlow**, servindo simultaneamente como:
1.  **Documentação Viva:** Um guia visual das etapas de desenvolvimento.
2.  **Prova de Conceito (PoC):** O próprio código do projeto segue as regras de governança de Pull Requests e Branching Strategy ensinadas.

## 🛠️ Tecnologias Utilizadas

*   **React.js:** Biblioteca principal para construção da interface.
*   **Styled Components:** CSS-in-JS para estilização moderna, responsiva e modular.
*   **Vercel:** Deployment e CI/CD.

## 🏗️ Estrutura do Projeto

A aplicação foi construída focando em componentização e medidas relativas (`rem`, `%`, `vh`), garantindo que o relatório seja acessível em qualquer dispositivo:

*   **Container:** Centralização e controle de largura máxima (`max-width`) para Desktop.
*   **SlideImage:** Uso de `object-fit: contain` para manter a proporção visual dos prints do Discord/GitHub sem distorção.
*   **Content:** Tipografia fluida com `clamp()` para ajuste automático entre mobile e desktop.

## 📈 Metodologia Aplicada (GitFlow)

Este repositório é o resultado prático da sprint de alinhamento:

*   🛡️ **Main/Develop:** Ambientes protegidos para garantir a integridade do código.
*   🌿 **Feature Branches:** Desenvolvimento isolado e focado (ex: `feat/hero`).
*   ✅ **Code Review & Governança:** Validação técnica da Tech Lead e aprovação de negócio do PO antes do merge.

## 🚀 Como Rodar o Projeto

```bash
# Clone o repositório
git clone [Link do seu repositório]

# Entre na pasta
cd [Nome da pasta]

# Instale as dependências
npm install

# Inicie o projeto
npm run dev
```

## 👤 Equipe e Contribuições

*   **Bianca Caetano** - Tech Lead (Liderança Técnica e Mentoria)
*   **Victor de Souza** - Product Owner (Validação e Sandbox)
*   **Israel** - Frontend Developer (Treinamento e Implementação)
