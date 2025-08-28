# Oikeusrekisterikeskus | Varasivustot

### Install nvm (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### Download and install Node.js (you may need to restart the terminal)
```bash
nvm install
```

### Verify the right Node.js version is used
```bash
node -v
```
Should print `v22.13.1`

### Verify the right npm version is used
```bash
npm -v
```
Should print `v10.9.2`

### Create a .env file
Create a `.env` file in the root of the project. You should specify the following keys:

`PAGE_TYPE`: The machine name of a page. Available names and their metadata can be found in `getPageConfig.js`.

Currently, the available names are:
- `oikeuspalveluvirasto`
- `oikeus`
- `konkurssiasiamies`
- `ulosottolaitos`
- `oikeusrekisterikeskus`

`QUERY_URL`: This is the Hygraph URL from where content is fetched. You can get the URL by looking at the environment variables of any page instance in `Cloudflare`.

**EXAMPLE:**
```bash
PAGE_TYPE="oikeuspalveluvirasto"
QUERY_URL="URL_HERE"
```

### Run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code

### Components
```
/components/FooterComponent.js: The component for rendering the footer.
/components/NavComponent.js: The component for rendering the navigation.
/components/PageComponent.js: The component for rendering a page.
```

### Lib
```
/lib/getPageConfig.js: Contains logic for storing page configuration.
/lib/getContent.js: Contains logic for fetching data from Hygraph.
```

### Pages
```
/page.js: Renders the "/" (fi) page.
/en/page.js: Renders the "/en" page.
/not-found.js: Renders the "404" page.
```

### Root layout
```
/layout.js: The "index" file of the project.
```

### Logos and Favicons
```
/public/logos and /public/favicons: Follow the naming convention of the already added folders and files.
```

## Adding a new set of pages
To add a new type of page to the project, simply go to `getPageConfig.js` and add an entry to the `pageConfig` object together with logos and favicons.

This should be coupled with:
1. Creating a new page instance in `Cloudflare` where you specify:
   1. The name of the page instance (preferably the same name as the "machine name", e.g. `oikeus` becomes `oikeus.pages.dev`).
   2. The framework: `Next.js (Static HTML Export)`.
   3. Build command: `npx next build`.
   4. Build output directory: `out`.
   5. The `PAGE_TYPE` and `QUERY_URL` env variables.
   6. A deploy hook that can later be added to `Hygraph` in the "Webhooks" section (this takes care of updating the page when changes are done in Hygraph).
2. Adding a new content entry in `Hygraph` from where you get the `content entry ID` that is used in `getPageConfig.js`.

Should you run into trouble or have questions, it is easiest to just look at the already existing page instances and see how they have been configured.

## Style changes
Styles can be modified in `global.scss` or in the files in the `/styles` folder.

## Deployment
Just push to `main` branch and the deployment process will be triggered automatically. The same happens when content is edited in `Hygraph`.

