# Day 1
## Installations

### Node JS
<pre>
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm (Node Package Manager*)
node -v
npm -v
</pre>

- Role of Node:
    - Server-side web development

        It allows developers to run JavaScript code on the server-side, outside of a web browser, which enables building fast, scalable, and high-performance applications.
    - Real-time applications
    - Command-line tools 

        Martin wants CLI wrapped, this can be done with node JS too.
- Role of npm:
    - Dependency management
    - Package publishing and sharing
    - Version control
    - Script execution

- Role of nvm:
    - For our scope nvm stands for Never Mind. Because we are not gonna need it. In general its known as (Node Version Manager)
    - Enables you to manage multiple version of node js and switch effortlessly
    - Use case: When you work on projects which needs different versions (Best Practices)
    - Example: Installation and usage
    <pre>
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    nvm install 12
    nvm ls
    nvm use 12
    nvm alias default 12
    </pre>

### React & relatives
- React comes for FREE with node JS installation
- create-react-app is a node pacakge that helps you create a React App (Best Practices)
- Some other frequently used packages are react-router-dom, axios, react-redux, semantic-ui-react*

<pre>
npm install react-router-dom
npm install axios
npm install semantic-ui-react 
npm install semantic-ui-css
</pre>
- *Package.json* The Maven/gradle of node JS. 
<pre> npm install axios --save </pre> 

When developer uses,  --save flag while installing a package that is needed for the project, it is saved in the package.json and any other developers working on the project then have access to the same environments.
### Hello Samer project
Install create-react-app and npx (if not present)
<pre> npx create-react-app hello-samer </pre>
### Visual Studio & relatives 
- ESLint
- Prettier
- Bracket Pair Colorizer
- Reactjs code snippets
- VSCode React Refactor
