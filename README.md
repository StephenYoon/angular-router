# Angular Router
An application illustrating Angular's routing capabilities.

`master` branch lazy loads `crisis-center` module within `app-routing.module.ts` and within `crisis-center` we implement named routing. However we found that named routing doesn't work very well (ie not at all).

`no-lazy-loading-module` branch, we load all components within the `app.module.ts` and all routing with `app-routing.module.ts`. We found that named routing works!  Mystery: with modules that lazy load, named routing doesn't seem to work.

## Enabling named route in the main app.component
- click on "Contact" or "Mainbar" to load the named route on the main app.component.

## Enabling named route in the nested child component
- click on "Crisis Center" on the top and in this component click on "Open Sidebar"
- in the branch `no-lazy-loading-module` this works fine but in the `master` branch, not so much
