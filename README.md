# ngms

This module helps to create default angular components from terminal.

## Requirements
Node ^7.0
npm ^3.5

## Installation

Install package globally to run it directly from terminal `npm i ngms -g`

## Usage

Run `ngms` to create folder named "NewComponent" with default structure:

* NewComponent 
    * index.ts
    * NewComponent.ts
    * NewComponent.html
    * NewComponent.scss
    
## Options

You can change default component name by defining additional parameters.

### name
Define the name of created component (by default set to "Component").
 
 ```
 ngms --name=Main
 ```
 
 Will generate the following:
 
* Main
    * index.ts
    * Main.ts
    * Main.html
    * Main.scss


### prf
 Allows to set text prefix to the name of your component (by default is empty);
 
  ```
  ngms --prf=Main.
  ```
  
  Will generate the following:
  
 * MainNewComponent
     * index.ts
     * Main.NewComponent.ts
     * Main.NewComponent.html
     * Main.NewComponent.scss
 
### postfix
 Allows to set text postfix to the name of your component (by default is empty);
 
  ```
  ngms --postfix=post.
  ```
  
  Will generate the following:
  
 * NewComponentPost
     * index.ts
     * NewComponent.post.ts
     * NewComponent.post.html
     * NewComponent.post.scss

### div
 Set delimiter to separate component name from postfix/prefix (by default is ".");
 
  ```
  ngms --prf=main --name=component --div=-
  ```
  
  Will generate the following:
  
 * MainComponent
     * index.ts
     * main-component.ts
     * main-component.html
     * main-component.scss
