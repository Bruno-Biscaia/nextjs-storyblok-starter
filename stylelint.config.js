module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    'stylelint-config-tailwindcss'      // já traz os ignores
  ],
  rules: {
    // caso não queira usar o config-tailwindcss, comente-o acima e use este bloco:
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen',
        'layer',
        'base',
        'components',
        'utilities'
      ]
    }]
  }
}
