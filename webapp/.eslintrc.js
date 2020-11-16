module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    'indent': 'off',
    'vue/script-indent': ['warn', 2, {
    'baseIndent': 1
    }]
  },
  "overrides": [
    {
      "files": ["*.vue","*.js"],
      "rules": {
        "indent": "off"
      }
    }
  ]
};
/* eslint-disable */