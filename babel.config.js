module.exports = {
    presets: [
        [
          'next/babel',
          // Our Stele configuration is very tightly coupled with
          // our Babel configuration. These overrides to Next's
          // Babel preset will compile JSX in the exact format
          // required for Stele to have the ability to extract AND
          // replace translated code.
          {
            // Disabling "modules" preserves ES modules.
            'preset-env': { modules: false },
            // The default _is_ "classic", but Next is overwriting it to "automatic"
            // The "classic" runtime utilizes React.createELement, instead of
            // the new JSX transform, which isn't supported by Stele.
            'preset-react': { runtime: 'classic' },
          },
        ],
      ],
    "plugins": ["macros"]
  }