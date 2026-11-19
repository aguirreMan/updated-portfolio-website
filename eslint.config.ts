
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    ignores: ['dist/**', 'build/**', 'coverage/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      semi: ['error', 'never'],
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
])
