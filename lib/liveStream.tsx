import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const liveStreamDirectory = path.join(process.cwd(), "post/liveStreams");

export function getSortedliveStreamData() {
  // Get file names under /liveStream
  const fileNames = fs.readdirSync(liveStreamDirectory);
  const allliveStreamData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(liveStreamDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the liveStream metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  // Sort liveStream by date
  return allliveStreamData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllliveStreamIds() {
  const fileNames = fs.readdirSync(liveStreamDirectory);
  return fileNames.map((filename) => {
    return {
      params: {
        id: filename.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getliveStreamData(id: string) {
  const fullpath = path.join(liveStreamDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullpath, "utf8");

  // use gray-matter to parse the metadata section
  const matterResult = matter(fileContents);

  // use remark to convert markdown into HTML string
  // ATAU Memparsing HTML string to markdown
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  console.log("HTML", contentHtml);

  // combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
