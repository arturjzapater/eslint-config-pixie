module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        mocha: true,
        node: true,
    },
    extends: 'eslint:recommended',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        'array-bracket-spacing': [ 'error', 'always', {
            objectsInArrays: false,
        }],
        'comma-dangle': [ 'warn', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
        }],
        'eol-last': [ 'error', 'always' ],
        'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
        'no-prototype-builtins': 0,
        'no-trailing-spaces': 'error',
        'no-unused-vars': [ 'error', {
            args: 'after-used',
            'argsIgnorePattern': '^_',
        }],
        'object-curly-spacing': [ 'error', 'always' ],
        'semi': [ 'error', 'never' ],
    },
}
