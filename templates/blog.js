export default function BlogTemplate(doc) {
  const { title, main } = doc;

  return /* html */ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title || 'Blog Post'}</title>
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>
        <header>
          <h1>${title || ''}  Rebin</h1>
        </header>

        <main class="blog-layout">
          ${main}
        </main>

        <footer>
          <p>&copy; ${new Date().getFullYear()} My Blog</p>
        </footer>
      </body>
    </html>
  `;
}
