# SDET Automation Framework

[![Playwright Tests](https://img.shields.io/badge/tested%20with-Playwright-2EAD33)](https://playwright.dev/)
[![Language](https://img.shields.io/badge/language-TypeScript-blue)](https://www.typescriptlang.org/)
[![Design Pattern](https://img.shields.io/badge/pattern-POM-orange)](https://playwright.dev/docs/pom)



## Overview
This project is a high-performance **SDET (Software Development Engineer in Test)** automation framework. It is designed to streamline QA processes through robust, scalable, and maintainable end-to-end testing.



## Key Architecture
The framework implements the **Page Object Model (POM)** pattern by leveraging Playwright's **Test Fixtures**. This allows:
* **Dependency Injection:** Direct injection of page classes into tests.
* **Clean Code:** Elimination of repetitive setup (`new Page()`) in every test.
* **Maintainability:** Separation of selectors from test logic.



## Features
- **Automated E2E Testing:** Stable and fast execution across environments.
- **Extended Test Fixtures:** Custom `test` function in `base.ts` for seamless page access.
- **Advanced Reporting:** HTML reports with screenshots, videos and traces on failure.
- **Cross-browser Support:** Validated on Chromium, Firefox, and WebKit.
- **CI/CD Ready:** Optimized for GitHub Actions, Jenkins, or GitLab CI.



## Tech Stack
- **Framework:** [Playwright](https://playwright.dev/)
- **Language:** TypeScript / [Node.js](https://nodejs.org/)
- **Design Pattern:** Page Object Model (POM)
- **Reporting:** Playwright HTML Reporter



## Project Structure
```text
├── src/
│   ├── data/                # Test data
│   │   └── users.json         # Data for testing (JSON)
│   ├── fixtures/            # Custom Playwright test extensions (Fixtures)
│   │   └── base.ts            # Page instantiation logic & Dependency Injection
│   └── pages/               # Page Object Model classes (Business Logic)
│       ├── LoginPage.ts       # Selectors and methods for Login Page
│       └── SecurePage.ts      # Selectors and methods for Secure Page
├── tests/                   # Test suites (Spec files)
│   ├── login.spec.ts          # Login scenarios
│   ├── logout.spec.ts         # Logout scenarios
│   ├── security.spec.ts       # Security scenarios
│   └── session.spec.ts        # Session scenarios
├── playwright.config.ts     # Playwright global configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```



## Getting Started
Follow these steps to set up the project locally and start running tests.



## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Git](https://git-scm.com)



## Installation
1. **Clone the repository:**
   Open your terminal and run the following command to download the project:
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**
    ```bash
    cd SDET-Project
    ```

3. **Install dependencies:**
Install all the required packages listed in `package.json`:
    ```bash
    npm install
    ```

4. **Install Playwright Browsers:**
Download the necessary browser binaries (Chromium, Firefox, and WebKit):
    ```bash
    npx playwright install
    ```



## Running Tests

### Command Line Execution

| Action | Command |
| :--- | :--- |
| **Run all tests** | `npx playwright test` |
| **Run with UI Mode** | `npx playwright test --ui` |
| **Headed mode** | `npx playwright test --headed` |
| **Debug tests** | `npx playwright test --debug` |



## Reporting
After the tests complete, a detailed HTML report is generated. To view it, run:
```bash
npx playwright show-report
```