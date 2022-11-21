# Circe UI

> An implementation of Circe UI style library in Sass.  
> Project status: **alpha**

## Getting Started

### Setup the repo:
```
$ git clone https://github.com/Diego-EC/circe-ui.git && cd circe-ui
$ npm i
```

### Build workflow
#### 1. Increase version
In the package.json file, version property.  
In the Readme.md file, version table.

#### 2. Generate dist/ files
```
$ npm run build
```
It'll create a dist/ folder at the root.  

#### 3. Login on npmjs.com
```
$ npm login
```

#### 4. Publish
```
$ npm publish
```

### Run the development server:
#### 1. Run the transpiler
```
$ npm run compile:sass
```

#### 2. Instal the Live Server Extension (or other similar tool)

#### 3. Execute the aplication
Inside src/ there is an index.html file, open it with Live Server.  
It will auto refresh with each change.


## Use Circe UI for your project
#### 1. Install Circe UI via NPM
```
$ npm i circe-ui
```
#### 2. Import library SCSS in your styles
```css
@import '../node_modules/circe-ui/dist/main.css';
```


## Package versions

| Version       | Date       | Notes            |
|---------------|------------|------------------|
| 1.0.1-alpha.1 | 2022/11/21 | Updated readme. |
| 1.0.0-alpha.1 | 2022/11/21 | Initial version. |