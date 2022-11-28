<h1 align="center" id="title">Recipe book</h1>

<p align="center"><img src="https://socialify.git.ci/manoj633/recipe-book/image?language=1&amp;logo=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F3565%2F3565418.png&amp;name=1&amp;owner=1&amp;pattern=Plus&amp;theme=Light" alt="project-image"></p>

<p id="description">An Application to save your favorite recipes and add the required ingredients to your shopping list</p>

<p align="center"><img src="https://img.shields.io/github/license/manoj633/recipe-book?style=for-the-badge" alt="shields">&nbsp;&nbsp;<img src="https://img.shields.io/github/stars/manoj633/recipe-book?style=for-the-badge" alt="shields">&nbsp;&nbsp;<img src="https://img.shields.io/github/forks/manoj633/recipe-book?style=for-the-badge" alt="shields"></p>

<h2>🚀 Demo</h2>

[https://ng-recipe-book-abcdb.web.app/](https://ng-recipe-book-abcdb.web.app/)

Or you can scan the bellow QR code.

<img src="https://user-images.githubusercontent.com/42727681/194718185-3b994e9e-f5ed-46f8-89c3-dcdfb15304f5.png" style="width:200px"/>

<h2>Project Screenshots:</h2>
<br/>
<h3>Recipe list:</h3>
<img src="https://i.postimg.cc/C5QNJ8RC/recipes-list.png" alt="project-screenshot" width="4000" height="400/">
<br/>
<h3>Add a new Recipe:</h3>
<img src="https://i.postimg.cc/0QND3QRV/recipe-save.png" alt="project-screenshot" width="4000" height="400/">
<br/>
<h3>Shopping list:</h3>
<img src="https://i.postimg.cc/t4HPbDGZ/shopping-list.png" alt="project-screenshot" width="4000" height="400/">

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   View stored recipes
*   Add a new recipe with images and ingredients required
*   Edit an existing recipe
*   Add ingredients of a recipe to the shopping list
*   Delete a recipe
*   Edit item and quantity of an ingredient in shopping list
*   Add new item to Shopping list
*   Token based Authentication with auto-logout functionality after token expiration

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

* HTML
* CSS
* TypeScript
*   Angular
*   Firebase
*   NgRX
<br/>

<h2>📁 Folder structure</h2>

```
📦 recipe-book
├─ .browserslistrc
├─ .editorconfig
├─ .firebase
│  └─ hosting.ZGlzdA.cache
├─ .firebaserc
├─ .gitignore
├─ .vscode
│  ├─ extensions.json
│  ├─ launch.json
│  └─ tasks.json
├─ LICENSE
├─ README.md
├─ angular.json
├─ firebase.json
├─ karma.conf.js
├─ package-lock.json
├─ package.json
├─ src
│  ├─ app
│  │  ├─ app-routing.module.ts
│  │  ├─ app.component.css
│  │  ├─ app.component.html
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ auth
│  │  │  ├─ auth-interceptor.service.ts
│  │  │  ├─ auth.component.html
│  │  │  ├─ auth.component.ts
│  │  │  ├─ auth.guard.ts
│  │  │  ├─ auth.module.ts
│  │  │  ├─ auth.service.ts
│  │  │  └─ user.model.ts
│  │  ├─ core.module.ts
│  │  ├─ header
│  │  │  ├─ header.component.css
│  │  │  ├─ header.component.html
│  │  │  ├─ header.component.spec.ts
│  │  │  └─ header.component.ts
│  │  ├─ recipes
│  │  │  ├─ recipe-detail
│  │  │  │  ├─ recipe-detail.component.css
│  │  │  │  ├─ recipe-detail.component.html
│  │  │  │  ├─ recipe-detail.component.spec.ts
│  │  │  │  └─ recipe-detail.component.ts
│  │  │  ├─ recipe-edit
│  │  │  │  ├─ recipe-edit.component.css
│  │  │  │  ├─ recipe-edit.component.html
│  │  │  │  ├─ recipe-edit.component.spec.ts
│  │  │  │  └─ recipe-edit.component.ts
│  │  │  ├─ recipe-list
│  │  │  │  ├─ recipe-item
│  │  │  │  │  ├─ recipe-item.component.css
│  │  │  │  │  ├─ recipe-item.component.html
│  │  │  │  │  ├─ recipe-item.component.spec.ts
│  │  │  │  │  └─ recipe-item.component.ts
│  │  │  │  ├─ recipe-list.component.css
│  │  │  │  ├─ recipe-list.component.html
│  │  │  │  ├─ recipe-list.component.spec.ts
│  │  │  │  └─ recipe-list.component.ts
│  │  │  ├─ recipe-start
│  │  │  │  ├─ recipe-start.component.css
│  │  │  │  ├─ recipe-start.component.html
│  │  │  │  ├─ recipe-start.component.spec.ts
│  │  │  │  └─ recipe-start.component.ts
│  │  │  ├─ recipe.model.ts
│  │  │  ├─ recipes-resolver.service.ts
│  │  │  ├─ recipes-routing.module.ts
│  │  │  ├─ recipes.component.css
│  │  │  ├─ recipes.component.html
│  │  │  ├─ recipes.component.spec.ts
│  │  │  ├─ recipes.component.ts
│  │  │  ├─ recipes.module.ts
│  │  │  └─ recipes.service.ts
│  │  ├─ shared
│  │  │  ├─ alert
│  │  │  │  ├─ alert.component.css
│  │  │  │  ├─ alert.component.html
│  │  │  │  └─ alert.component.ts
│  │  │  ├─ data-storage.service.ts
│  │  │  ├─ dropdown.directive.ts
│  │  │  ├─ ingredient.model.ts
│  │  │  ├─ loading-spinner
│  │  │  │  ├─ loading-spinner.component.css
│  │  │  │  └─ loading-spinner.component.ts
│  │  │  └─ shared.module.ts
│  │  └─ shopping-list
│  │     ├─ shopping-edit
│  │     │  ├─ shopping-edit.component.css
│  │     │  ├─ shopping-edit.component.html
│  │     │  ├─ shopping-edit.component.spec.ts
│  │     │  └─ shopping-edit.component.ts
│  │     ├─ shopping-list-routing.module.ts
│  │     ├─ shopping-list.component.css
│  │     ├─ shopping-list.component.html
│  │     ├─ shopping-list.component.spec.ts
│  │     ├─ shopping-list.component.ts
│  │     ├─ shopping-list.module.ts
│  │     └─ shopping-list.service.ts
│  ├─ assets
│  │  └─ .gitkeep
│  ├─ environments
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ main.ts
│  ├─ polyfills.ts
│  ├─ styles.css
│  └─ test.ts
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json
```

<h2>🛡🏗️ Installation and setup:</h2>


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<h2>🛡️ License:</h2>

This project is licensed under the

<h2>💖Like my work?</h2>

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️. Thank you 🥰
