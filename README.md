# E2E Tests - Cypress APIs E2E

This project uses [Cypress](https://www.cypress.io) for APIs e2e automate testing.

Some additional dependencies:
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor)
- [Eslint](https://eslint.org)

## Getting Started

### Install project dependencies
Access the project root and execute the command in the terminal

```
npm install
```
### Test execution

For the first time test execution, you can just execute:

    npx cypress open

This command will open a Cypress execution window, showing all Features, grouped by Services/Folder:

*On first time execution, it could take some time to open, until cypress installation/setup.

You can click on one of then to start a test execution.


### Cucumber BDD style test scenarios

This project uses a `cypress-cucumber-preprocessor`, witch means that testing scenarios is wrote in cucumber style BDD using Gherkin language.

If you are not familiar with Cucumber, we recommend reading this [docs](https://cucumber.io/docs/guides/overview).

The “features” files are located on `cypress > e2e > features`, separated by services.
       
	├── cypress
    |   ├── e2e
	│   |    └── features
    |   |        ├── uiAutomatedTest.feature
	│   │        └── uiAutomatedTest
	│   │            └── step-definition.js
    |   └──...
	└──...

## Autor

* **Fernando Baldo** - *GitHub* - [Fernandobaldo](https://github.com/Fernandobaldo)

