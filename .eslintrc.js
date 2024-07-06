// https://docs.expo.dev/guides/using-eslint/
module.exports = {
    extends: ['expo', 'eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'warn',
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
};
