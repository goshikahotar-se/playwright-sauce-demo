# 🚀 [Sauce Demo Project] Playwright Automation Framework

This project is using the https://www.saucedemo.com/ website to perform some UI testing using Playwright automation framework.

## 🛠 Tech Stack
* **Language:** TypeScript / JavaScript
* **Test Runner:** Running on local for the time being
* **Automation Tool:** Playwright
* **Design Pattern:** Page Object Model (POM)

## 📋 Prerequisites
List requirements needed before setup:
* Node.js v18+ / npm
* Browser Drivers: ChromeDriver, Firefox
* IDE: VS Code

## ⚙️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Install dependencies:
   ```bash
   npm install  # or mvn clean install
   ```

## 🚀 Running Tests
Provide command-line examples for different scenarios:
* **Run all tests:**
  ```bash
  npx playwright test
  ```
* **Run specific test (e.g., Smoke):**
  ```bash
  npx playwright test tests/sauce/{test-filename}
  ```

## 📊 Reporting
Explain how to view results after execution:
* npx playwright show-report

## 📁 Project Structure
Briefly explain the directory layout:
* `/tests` - Actual test scripts.
* `/pages` - Page Object classes.

## 🤝 Contributing
Guidelines for contributors:
1. Fork the repo.
2. Create a feature branch.
3. Submit a Pull Request with updated tests.
