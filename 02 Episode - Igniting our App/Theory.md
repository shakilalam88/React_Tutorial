# Timeline 02 -Igniting our App
```sh
00:00:00 – Creating Github Repository and pushing code 
00:03:00 – Git commands (branch, commit, push origin)
00:08:50 – first igniting the app
00:14:30 – How React apps are so fast?
00:16:00 – npm introduced
00:21:00 – npm init 
00:22:48 – jest (test  command)
00:24:30 – Why we need package.json
00:26:30 – Installing important packages, Bundler
00:28:00 – create react app
00:29:00 – Parcel introduced
00:30:30 – “npm install -D parcel” command, Dev & Normal Dependency
00:36:00 – ( ~,  ^) - caret & tilde symbol importance
00:40:00 – package-lock.json
00:44:40 – Node Modules
00:50:30 – Parcel dependency
00:55:00 – git ignore command
00:59:00 – npm install 
01:05:00 – npx parcel, localhost
01:12:15 – npm install react
01:14:00 – npm install react-dom
01:15:30 – import React from “react”
01:16:30 – import ReactDOM from “react-dom”
01:23:00 – Deep explanation of Parcel
01:33:00 – “Parcel is a beast”
01:38:45 – Exploring Parcel documentation
01:43:00 – System design question 
01:45:00 – Prod bundles
01:56:00 – Git ignore files (parcel_cache, node_modules)
01:58:00 - support for older versions of Browsers
02:03:00 – Government Websites- Old versions of browser
02:08:00 – Why is Parcel fast?
02:11:00 – Session Recap
```


# Chapter 02 - Igniting our App

## Project Assignment:
- In your `existing project`
    - initialize `npm` into your `repo` "npm init",("test command: jest")
    - npm i -D parcel
    - npx parcel index.html
    - install `react` and `react-dom`
    - Restart server- npx parcel "file-name(index.html)"
    - `remove CDN` links of `react`
    - `install parcel`
    - `ignite your app` with parcel
    - remove `"main": "app.js"` for switching to npx parcel build index.html
    - add `type='module'` in scripts tag
    - add scripts for `“start”` and `“build”` with `parcel commands`
    - add `.gitignore` file
    - add `browserslist`
    - `build a production version` of your code using `parcel build`
    - The `".md"` file extension is used for Markdown files. Markdown is a lightweight markup language that allows you to write formatted text using a plain text editor.

## Theory Assignment:
- What is `NPM`?
- What is `Parcel/Webpack`? Why `do we need it`?
- What is `.parcel-cache`
- What is `npx` ?
- What is `difference` between `dependencies` vs `devDependencies`
- What is `Tree Shaking`?
- What is `Hot Module Replacement`?
- List down your `favorite 5 superpowers of Parcel` and `describe any 3` of them in your
own words.
- What is `.gitignore`? What should `we add` and `not add` into it?
- What is the `difference` between `package.json` and `package-lock.json`
- Why should I not modify `package-lock.json`?
- What is `node_modules` ? Is it a `good idea to push that on git`?
- What is the `dist` folder?
- What is `browserslist`
- Read about `dif bundlers`: `vite`, `webpack`, `parcel`
- Read about: `^` - `caret` and `~` - `tilde`
- Read about `Script types in html` (MDN Docs)
- What is `HMR (Hot Module Replacement)`

# _Chapter 02 - Igniting our App_


## Q: What is `NPM`?
A: It is a tool used for package management and the default package manager for Node projects. `NPM is installed when NodeJS` is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database. 
- `npm` alternative is `yarn`

### How to initialize `npm`?
```
npm init
```
`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.


## Q: What is `Parcel/Webpack`? Why do we need it?
A: `Parcel/Webpack` is type of a web application bundler used for development and productions purposes or power our application with different type functionalities and features.
It offers blazing fast performance utilizing multiCore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start.
Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.

### Parcel Features:
* HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
* File watcher algorithm - made with C++
* Minification
* Cleaning our code
* DEV and production Build
* Super fast building algorithm
* Image optimization
* Caching while development
* Compresses
* Compatible with older version of browser
* HTTPS in dev
* Port Number
* Consistent hashing algorithm
* Zero Configuration
* Automatic code splitting

### installation commands:
- Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.

- Parcel Commands :
    - For development build:
    ```
    npx parcel <entry_point> 
    ```
    - For production build :
    ```
    npx parcel build <entry_point> 
    ```

## Q: What is `.parcel-cache`?
A: `.parcel-cache` is used by parcel(bundler) to reduce the building time.
It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.


## Q: What is `npx`?
A: `npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.


## Q: What is difference between `dependencies` vs `devDependencies`?
A: `Dependencies` should contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, JQuery and etc. 
`DevDependencies` should contain modules/packages a developer needs during development.
such as, `parcel, webpack, vite, mocha`.
`These packages` are `necessary only while you are developing your project`, not necessary on production.
To save a dependency as a devDependency on installation we need to do, 
```
npm install --save-dev
```
instead of just,
```
npm install --save
```


## Q: What is `Tree Shaking`?
A: `Tree shaking` is process of removing the unwanted code that we do not use while developing the application.
In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.


## Q: What is `Hot Module Replacement`?
A: `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.


## Q: List down your favorite `5 superpowers of Parcel` and describe any 3 of them in your own words.
A: `5 superpowers of Parcel`:
* `HMR (Hot Module Replacement)` - adds, or removes modules while an application is running, without a full reload.
* `File watcher algorithm` - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
* `Minification` - Minification is the process of minimizing code and markup in your web pages and script files.
* `Image optimization`
* `Caching while development`


## Q: What is `.gitignore`? What should we `add and not add` into it?
A: The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`.
The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.
`package-lock.json` should `not add` into your `.gitignore` file.

The entries in this file can also follow a matching pattern.
```
* is used as a wildcard match
/ is used to ignore pathname relative to the .gitignore file
# is used to add comments to a .gitignore file
```
This is an example of what the .gitignore file could look like:
```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```


## Q: What is the difference between `package.json` and `package-lock.json`?
A: `package.json`:
* This file is mandatory for every project
* It contains basic information about the project
* Application name/version/scripts

`package-lock.json`:
* This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
* It is generated after an npm install
* It allows future dev & automated systems to download the same dependencies as the project.
* it also allows to go back to the past version of the dependencies without actual
‘committing the node_modules folder.
* It records the same version of the installed packages which allows to reinstall them.
Future installs will be capable of building identical description tree.

**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

* **~** : `Approximately equivalent to version`, will update you to all future patch versions, without incrementing the minor version.
* **^** : `Compatible with version`, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.


## Q: Why should I not modify `package-lock.json`?
A: `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## Q: What is `node_modules` ? Is it a good idea to push that on git?
A: `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
`Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.


## Q: What is the `dist` folder?
A: The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.


## Q: What is `browserslist`?
A: `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

## Q: What is `HMR (Hot Module Replacement)`?
A: `HMR` stands for Hot Module Replacement. It's a feature of some development tools that allows you to see changes to your code in real-time without having to refresh the page or restart the application. When you make changes to your code, HMR will detect those changes and apply them to the running application without losing its current state. This can save a lot of time during development and can help you catch bugs more quickly