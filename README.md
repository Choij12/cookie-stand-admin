# Cookie-Stand-Admin

## Lab Overview:
 - Create a Cookie Stand Admin app using Next.js and style using Tailwind CSS.

## Feature Tasks and Requirements:
- The spec for lab is screen shot of Cookie Stand Admin Version 1
pages/Index.js should…
- Have <Head> component with page title set to Cookie Stand Admin
- Have a header component that matches spec.
- Have a <main> component containing <form> and a placeholder component showing JSON string of last created Cookie Stand.
- Have a <footer> component that matches spec.
- Style app using TailwindCSS utility classes.
- The specs for lab are screen shots Cookie Stand Admin Version 2 and Cookie Stand Admin No Stands
pages/Index.js should return top level component <CookieStandAdmin>
<CookieStandAdmin> details…
- Will contain the following components:
- `<Head>`, `<Header>`, `<main>`, `<CreateForm>`, `<ReportTable>`, and `<Footer>` component that matches spec.
- Import time slot data from supplied data.js file.
<CreateForm> component details…
- Object should have hourly_sales property with hard coded [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
<ReportTable> details…
- If reports is empty then render `<h2>No Cookie Stands Available</h2>`
- If reports is not empty then render a table with thead,tbody and tfoot components.


