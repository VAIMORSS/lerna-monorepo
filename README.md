# Lerna-Monorepo

- Sample counter web and mobile app which uses same Redux

## How to Run apps

1. run `yarn bootstrap` command in the root
2. go to `packages/web` and run `yarn start`
3. go to `packages/mobile` and run `yarn android` or `yarn ios`, if you have M1 chip, then attach `arch -x86_64` infront of the run command

## How to add Package

1. Add any package in the `packages` directory
2. Make sure the main file in the `package.json` file are directed to the dist folder files

## How to add any package to any other package as dependancy

1. run command `yarn lerna add <Which package to add> --scope=<Where to Add package>`
