# tarot-stylelint-config

Default Stylelint configuration for [Tarot](https://github.com/codynova/tarot).

This package is automatically used in the Tarot `build` process unless you have provided a custom `stylelintConfigPath`.

To use in your own custom configuration, install then extend this package in your stylelint config:

```bash
yarn add --dev tarot-stylelint-config
```

```jsonc
// .stylelintrc
{
    "extends": [
        "tarot-stylelint-config"
    ]
}
```

or

```js
// stylelint.config.js
module.exports = {
    extends: [ require.resolve('tarot-stylelint-config') ],
}
```