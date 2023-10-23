# Quick Start

## Installation

Install [Node.js](https://nodejs.org/en) and npm (will be installed with Node.js unless you unselect it) and run the following command:

```shell
npm install -g hopper-mcbe@latest
```

## Initialize a New Add-on

```shell
hopper init
```

This command will ask you some questions and create your project in a directory with the name you specified in the first prompt.

## Project Commands

All of the following commands need to be run in a project created with `hopper init`.

### Development

Run the following command to build in development mode. This will not minify the output script bundle and will output all files in your `com.mojang` development pack directories.

```shell
npm run build-dev
```

You can also use the following command to automatically build in development mode when a file in the project is modified.

```shell
npm run watch
```

If you need to remove the pack from your `com.mojang` development pack directories. You can run the following command to do so. You will need to do this if you remove a file and want it removed from your development pack directories as well.

```shell
npm run clean
```

### Production

Run the following command to build in production mode. This will optimize the project (see [Optimizations](/essentials/optimizations)) and will output all files into the `build` directory in the project.

```shell
npm run build-prod
```

## Updating Hopper

To update your global install of Hopper, you can run the same command you use to install Hopper.

```shell
npm install -g hopper-mcbe@latest
```

All of your projects created using `hopper init` will have a local install of Hopper as well. To update that, run the following command in the project directory:

```shell
npm install hopper-mcbe@latest
```
