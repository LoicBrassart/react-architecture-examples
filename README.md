# Architecture and organization tips

## Foreword

- These are architectural/organizational **tips**. I'm by no means an expert in this domain, but I thiink they can be useful to anyone beginning to work with React.
- If you don't like one of them: don't use it! It's fine to do what works for you, don't follow any rule for the sake of it.
- Feel free to change your mind and update your architecture. You should never feel constrained, achitecture should be a tool, not an obstacle!
- Different projects (teams, size, aim, etc...) call for different rules. Branches in this repo will represent some examples for different project sizes

## First steps

- Add `package-lock.json` to `.gitignore`
  - Personal preference: I don't like it to clog all my PRs with 1k+ updates whenever it wants to
- Get rid of "useless" files
  - CSS
  - Tests (sad but true... To be continued ?)
  - Logo
  - WeBVitals & other tools

## MD - Medium Projects

When your project is 6~20 components wide:

- Components live in a `components` folder
- Components each have their own folder
  - Component files are named `index.js`
  - Styles are named `style.css`
  - Specific assets can be stored directly in the component folder

### Pros

- Quite scalable

### Cons

- Most files are names `index.js` or `style.css`, which can be uncomfortable at first
  - I took the habit of rading the _folder_ in which my files are, instead or their _name_
