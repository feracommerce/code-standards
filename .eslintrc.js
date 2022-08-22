// Sider's recommended ruleset is based on eslint:recommended,
// and following rules are additionally enabled/disabled.
// See https://eslint.org/docs/rules/ for more details.
// And, we generated the ruleset using ESLint 7.17, on 2021-04-05.
module.exports = {
    "parserOptions": {"ecmaVersion": 2015},
    "extends": ["eslint:recommended"],
    "rules": {
        // Custom to Fera (but also default `eslint:recommended`):
        "no-unused-vars": 0,
        "no-useless-escape": 0,
        "class-methods-use-this": [0, {"enforceForClassFields": false}],
        "no-empty-function": ["error", {"allow": ["functions", "arrowFunctions", "methods"]}],
        "radix": 0,
        "no-param-reassign": 0,
        "eqeqeq": [0, "smart"],
        "no-undef": 0,
        "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
        "no-invalid-this": 0,
        "no-throw-literal": 0,
        "no-lonely-if": 0,
        "camelcase": ["error", {
            "allow": [
                "^[A-Z][a-zA-Z0-9]*(_?[A-Z][a-zA-Z0-9]*)*$",
                "^__*"
            ]
        } ],

        // Enabled [Possible Errors]
        "no-await-in-loop": "error",
        "no-loss-of-precision": "error",
        "no-promise-executor-return": "error",
        "no-template-curly-in-string": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-optional-chaining": "error",
        "no-useless-backreference": "error",
        "require-atomic-updates": "error",

        // Enabled [Best Practices]
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "max-classes-per-file": "error",
        "no-alert": 0,
        "no-caller": "error",
        "no-constructor-return": "error",
        "no-div-regex": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-restricted-properties": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-unmodified-loop-condition": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-return": "error",
        "no-warning-comments": 0,
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "require-await": "error",
        "vars-on-top": 0,

        // Enabled [Variables]
        "no-label-var": "error",
        "no-restricted-globals": "error",
        "no-undef-init": "error",
        "template-curly-spacing": ["error", "always"],

        // Enabled [Stylistic Issues]
        "func-name-matching": "error",
        "id-denylist": "error",
        "id-match": "error",
        "no-array-constructor": "error",
        "no-multiple-empty-lines": "error",
        "no-new-object": "error",
        "no-restricted-syntax": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "error",

        // Enabled [ECMAScript 6]
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "generator-star-spacing": "error",
        "no-confusing-arrow": "error",
        "no-duplicate-imports": "error",
        "no-restricted-exports": "error",
        "no-restricted-imports": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "prefer-const": "error",
        "prefer-numeric-literals": "error",
        "symbol-description": "error"
    }
};
