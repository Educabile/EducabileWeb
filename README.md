# Educabile Website

[![GitHub contributors](https://img.shields.io/github/contributors/Educabile/EducabileWeb.svg)](https://GitHub.com/Educabile/EducabileWeb/graphs/contributors/)
[![made-with-react](https://img.shields.io/badge/Made%20with-React-1f425f.svg)](https://reactjs.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Table of Contents

1. [Overview](#Overview)
2. [Versions](#Versions)
3. [Linters](#Linters)
4. [IDE](#IDE)
5. [Installation and Setup](#Installation-and-setup)
6. [Environment variables](#Environment-variables)
7. [Testing](#Testing)
8. [Commit Guidelines](#Commit-Guidelines)

---

## Overview

<img src="https://react-materialize.github.io/img/react-materialize-logo.svg" alt="React Materialize" width="128">

This website is being built with [`React.js`](https://github.com/facebook/react) and [`React-Materialize`](https://github.com/react-materialize/react-materialize).

---

## Linters

<img src="https://prettier.io/icon.png" alt="Prettier" width="128">
<img src="https://avatars-04.gitter.im/group/iv/3/57542cecc43b8c6019777d76" alt="ESLint" width="128">
<img src="https://s3.amazonaws.com/media-p.slid.es/uploads/467124/images/2872758/stylelint-icon-black.svg" alt="stylelint" width="128">

To enforce a consistent style across the entire project we are using [`Prettier`](https://prettier.io/).

We are also using [`ESLint`](https://eslint.org/) to catch bugs and syntax errors during development and [`stylelint`](https://stylelint.io/) for CSS linting.

We run `Prettier`,`ESLint` and `stylelint` before each commit thanks to [`Husky`](https://github.com/typicode/husky), so that you can focus on what matter the most : writing code.

We automatically generate `WebP` images and different size for each assets you add, thanks to [`sharp`](https://github.com/lovell/sharp)

You should not manually add references to `WebP` images in the CSS as we insert them during the build phase of the project.

Please, note that you will not be able to commit/push any changes you made if your code doesn't pass any of the linting stage described above.

In that case check your `git-log` and fix any problem reported there.

Also note that by default `ESLint` and `stylelint` will try to fix any problems they can fix by themseves.

They will bother you only for changes they can't fix.

All of the above assure us that our code base is always consistent with the rules we are using and bug free as much as possible.

---

## Versions

- `React`: 16.5.2
- `React Materialize`: 2.4.5

---

## IDE

<img src="https://www.macupdate.com/images/icons256/54025.png" alt="Visual Studio Code" width="128">

We highly encourage you to use [`Visual Studio Code`](https://code.visualstudio.com/) as your `IDE`.

If you use another `IDE` we provide you a `.editorconfig` file, please check your `IDE` compatibility [here](https://editorconfig.org/#download).

If you use `Visual Studio Code` you should download [`Settings Sync`](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync).

Please refer to [`Settings Sync`](https://github.com/shanalikhan/code-settings-sync) documentantion and download the following settings: `b5b90af7638c5e03fee4347f577bb6fb`.

---

## Installation and setup

<img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/963/square_256/yarn.png" alt="Yarn" width="128">

Note: You first have to download and install [`yarn`](https://yarnpkg.com/lang/en/)

Run this commands to download and install the required packages

```bash
   yarn
```

### Start local development

```bash
   yarn start
```

---

## Environment variables

<img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.png" alt="Dot Env" width="128">

This app requires you to create `.env`, `.env.production` and `.env.staging` files in the root directory of the project for it to properly works.

You can duplicate and rename `.env.schema` into `.env` and fill **ALL** the variables with the right values.

You should contact us for `.env.production` and `.env.staging` files and for `.env` values.

### Override settings

It is possible to override any global settings by creating a file called `.env.local`
and copy the configuration values from `.env` file.

---

## Testing

<img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/square_256/jestlogo.png" alt="Jest" width="128"/>
<img src="https://avatars2.githubusercontent.com/u/22632046?s=400&v=4" alt="Storybook" width="128">

We are using [`Jest`](https://github.com/facebook/jest) and [`Enzyme`](https://github.com/airbnb/enzyme) to test our components.

We also adopt [`Storybook`](https://github.com/storybooks/storybook) as our _UI Development Environment_.

---

## Commit Guidelines

We follow the [Angular Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits).

Refer to their documentation for more information.

Note: If you DON'T follow the [Angular Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) you will not be able to commit your changes.
