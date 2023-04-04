# Sharelist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# WHAT I DID

- Init Project with Angular CLI Command etc
* Delete all pre-code
* Create first component card with CLI Commande : ng generate component componentName
- Learn to pass data and display my component
    - Use OnInit Method to store my data first in my componentName.component.ts (Not dynamic)
    - Instead : Use Input Method on componentName.component.ts and OnInit on parentComponent in my case directy app.component.ts to accept the binded data.
        - Needed to create a Typescript Model and my first Typescript Interface to make Card Component understand his binded object stored with data
        - Data binded with OnInit in parentComponent and input data in card.component are both following the same Model
- Display data with
    - Text Interpollation
    - Binding:  like property/attribute bindings, class/styles bindings, Event bindings
    - Directives: Build-in directives ngClass/Style
- Ugly style and had fun with Angular stylesheets scoped system and Structural Directives
- Pipe : In my case I used datePipe
- Implemented first Service and added logic to it

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# NEXT OR CURRENTLY LEARING

- Routing for SPA (current)
- ngModel
- Observables
- Forms
- HTTP REQUEST
- modules : with lazy loading.
- Implement API
- Implement User Auth System


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
// Not Working //
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
// Not Working //
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
