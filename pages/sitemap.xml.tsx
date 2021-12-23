import { getAllPostIds } from "../lib/posts";

function generateSiteMap(posts) {
  console.log(posts);
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://www.ericingland.com</loc>
     </url>
     ${posts}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const posts = getAllPostIds()
    .map(
      (post) => `
    <url>
        <loc>${`https://www.ericingland.com/posts/${post.params.id}`}</loc>
    </url>
  `
    )
    .join("");
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
