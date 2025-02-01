# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

# Dynamic Form Generator
This project is a Dynamic Form Generator built with React and Tailwind CSS. The form is dynamically generated based on a JSON schema and supports various field types and validations.

# Installation
git clone https://github.com/ayajthecoder/dynamic-form-generator.git
cd dynamic-form-generator
npm install
npm run dev

# Library Used
React Icons	Provides icons for the UI (e.g., export icon).
Tailwind CSS	Utility-first CSS framework for styling the application.
Redux	State management library for managing form data globally.
React Redux	Official React bindings for Redux.
Vite	Build tool for fast development and production builds.

# Features
Dynamic Form Rendering: Forms are generated dynamically based on a JSON schema.
Field Types: Supports text, email, password, number, date, select, radio, checkbox, textarea, and file upload fields.
Form Validation: Includes real-time validation for required fields, email format, min/max length, and regex patterns.
Import/Export Schema: Users can import and export the form schema as a JSON file.
Theme Support: Light and dark themes are supported using a custom theme context.
Tooltips: Export functionality includes a tooltip for better user experience.
Redux Integration: Form data is stored in the Redux store for global state management.