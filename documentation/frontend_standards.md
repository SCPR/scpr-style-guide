
# Frontend coding standards

## Support
- Browser support: IE 10 and above.

## Dependency management and modules
- `npm` will be sole dependency management tool.

## Build 
- CSS: the following features of SASS should not be used:
  - Functions
  - @extend
  - For loops
  - Operators (use calc)
- CSS: code can be compiled with a SASS or a combination of SASS and postcss.
- CSS: code will be auto-prefixed with vendor-specific properties, they should
  not be typed out in the source.
- assests will be compiled together with webpack.
- only npm scripts will be used for building.
- semver will be used; major changes mean consuming code need to make major
  changes to upgrade, minor means minor changes, patch means no changes
  necessary to upgrade.

## Naming
- CSS: no prefixing will be done for classes as the library will be small enough to
  not warrant it.
- CSS: use the "Suggested custom methodology" naming convention from the styleguide,
  `{component_name}-{block_name}-{modifier}`
- CSS: different hierarchies in a name should be separated by `-` and spaces should
  be represented by a `_`.

## Style enforcement
- This repository is hooked into Code Climate to get automatic review of SCSS and JS

## Architecture
The structure of the parts of the style will be modular. Small, resusable pieces
that have one function and are not dependant on one-another. Components should
be given easy to understand names.

- CSS: each component should be a class with it's name as the first part.
- CSS: the css components will have the following structure:
```
/base
/components
/modules
/layout
/overrides
```
- CSS: will be imported in this grouped order: base, components, modules,
  overrides and in alphabetically order within these groups.
- CSS: base code should only include tag rules `a { }, h1 { }`.
- CSS: component code should be classes nested no more then 0 level deep.
- CSS: module code should be classes nested no more then 2 levels deep.
- HTML: components should be accessible by default.
- JS: components should work (display all data) without JS by default.
- CSS: components should not define their own layout. Use of margins should be kept to a minimum.
- CSS: spacing between components will be done with adjacent sibling selector `{selector} + {selector}`.
- CSS: complicated layout should be done in layout classes.

## Libraries
- JS: any library added that's total file size is above 25kb should be
  evaluated for performance affect.
