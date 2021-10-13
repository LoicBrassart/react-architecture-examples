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

## Large Projects

When your project is 20+ components wide

- Components should be separated following their **aim**:

  - `business` for business entities
    - "Visitors come to my website to see this content"
    - Entities can be displayed several ways (in a table, as cards, as buttons, as forms, ...). In this case, you can deep one level deeper yet, and create several components for your entity. I recommend that data is passed as `props`, and nested components should be simple expressions
  - `layout` for the basic, common structure of your app (Nav menu, footer, etc)
  - `pages` for components called by your router
    - You can place all your "on mount" API calls here: it will prevent you from calling the
  - `ui` for navigation components (Buttons, Lists, ...)
  - Of course you can create as many folders as you need!

- Helper code should go in specific, component-agnostic folders (`hooks` for helper functions, `styles` for global styling and variables, ...)
- Each "main" folder should contain an `index.js` (yeah, I know: "Again ?!"). These index files will do exactly wht the titl implies: they index the content, import it and re-export all components as a default export
  - This allows to import several components at once in the other files, limiting file-cluttering at the head of every business component

### Pros

- Very scalable solution, every new bit of code should now have a clear place to be stored
- Easy imports ("Import Header and Footer from my layout" seems quite logical, even when read aloud)
- Abstraction of component complexity: whether a component uses a custom hook, a css-in-js tool or anything else, it should **never** be apparent from higher in the file architecture

### Cons

- Quite complicated at first glance
- Every component/file added must be referenced in the matching `index.js` file
  - ... And sometimes, the hardest part is to ind which one it is !

## Other tips

### pages/Err404

#### Aim

Ensure any malformed url will fall on a proper error page

#### Explanation

- Add a simple `<Route>` at the **last** position in your `<Switch>`, and make it match any pattern. Every url not recognized up to there will redirect to your 404 page

### ui/PrivateRoute

#### Aim

Add a layer of UX/Security in your frontend, ensuring that a visitor can't access to your administration pages even if he knows the exact url

#### Explanation

- Create a PrivateRoute component, and make your authentication checking accessible from it (in this repo, it's a simple boolean).
- If `auth` is true, the component will go through and redirect you to the mentionned page
- If `auth` is false, you'll be redirected to any page of your choice (here, I juste redirect to my homepage)

### Absolute imports

#### Aim

Simplify imports, by specifying that `src` is an acceptable root folder:

```
  import { Home, Err404, Contacts, Admin } from './pages';
->
  import { Home, Err404, Contacts, Admin } from 'pages';

```

#### Explanation

- Creating a `jsconfig.json` file and adding the right configuration allows to write absolute imports in your files

#### Caveats

Beware, if one of your main folders sports the same name as one of your `node_modules`, the module will be imported instead of your file... Nevermore will I call a gfolder `entities`
