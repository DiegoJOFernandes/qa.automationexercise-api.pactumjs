Aqui está um exemplo completo do arquivo `README.md` para o projeto:

---

# **QA Automation Exercise - API Testing**

Este repositório contém a automação de testes de API utilizando o framework **Pactum.js**. As APIs testadas estão listadas em [Automation Exercise API](https://automationexercise.com/api_list).

---

## **Pré-requisitos**

Certifique-se de ter os seguintes itens instalados em sua máquina antes de começar:

- **Node.js** (versão 21 ou superior)
- **NPM** ou **Yarn**

---

## **Instalação**

1. Clone o repositório:

   ```bash
   git clone https://github.com/DiegoJOFernandes/qa.automationexercise-api.pactumjs.git
   cd qa.automationexercise-api.pactumjs
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

---

## **Casos de Teste Implementados**

### **Testes de Contrato**

1. **API 1**: Get All Products List
   - Validação do status code `200`.

2. **API 12**: DELETE METHOD To Delete User Account
   - Validação do status code `200`.

### **Testes Funcionais**

1. **API 11**: POST To Create/Register User Account
   - Teste funcional para criação de uma conta de usuário.
   - Validação do status `201` e da mensagem `User created!`.

2. **API 12**: DELETE METHOD To Delete User Account
   - Teste funcional para exclusão de uma conta de usuário.
   - Validação do status `200` e da mensagem `Account deleted!`.

---

## **Como Executar os Testes**

1. Execute todos os testes:
   ```bash
   npm test
   ```

2. Execute testes específicos (Exemplo: Testes de API de Contrato ou Funcional):
   ```bash
   npm run test:contract
   ```
   ```bash
   npm run test:functional
   ```

---

## **Estrutura do Projeto**

```plaintext
qa.automationexercise-api.pactumjs/
├── commands/            # Funções utilitárias e comandos reutilizáveis
│   └── create-account.js
├── schemas/            # Funções utilitárias e comandos reutilizáveis
│   ├── delete-account-schema.js
│   └── product-schema.js
├── tests/
│   ├── contract/
│   │   ├── api1-get-products-list.test.js
│   │   ├── api12-delete-user-account.test.js
│   ├── functional/
│       ├── api11-create-user.test.js
│       ├── api12-delete-user-account.test.js
├── .github/             # Configurações para o GitHub Actions
│   └── workflows/
│       └── ci.yml       # Pipeline para execução automatizada
├── package.json         # Dependências e scripts do projeto
├── README.md            # Documentação do projeto
└── .gitignore           # Arquivos a serem ignorados pelo Git
```

---

## **Relatórios**

Os relatórios de execução dos testes são gerados automaticamente após cada execução. Para visualizar os relatórios:

1. Gere o relatório:
   ```bash
   npm run report
   ```

2. Abra o arquivo gerado:
   ```bash
   open reports/index.html
   ```

---

## **Integração com GitHub Actions**

O projeto inclui um pipeline configurado no **GitHub Actions** que executa os testes automaticamente a cada **push** ou **pull request**.

### **Pipeline Configurado**

1. Instala dependências.
2. Executa os testes automatizados.
3. Gera relatórios de execução.

---

## **Tecnologias Utilizadas**

- **Pactum.js**: Framework para testes de API.
- **Mocha**: Test runner.
- **Chai**: Biblioteca de asserção.
- **Joi**: Validação de schemas para testes de contrato.

---

## **Autor**

- Nome: Diego Fernandes
- Contato: https://www.linkedin.com/in/diego-fernandes-it

---

## **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).
