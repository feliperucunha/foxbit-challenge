module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      "plugin:react/recommended",
      "next/core-web-vitals"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "6",
        "sourceType": "module",
        "ecmaFeatures": {
          "modules": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
}
