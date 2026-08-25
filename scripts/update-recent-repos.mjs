import { readFile, writeFile } from "node:fs/promises";
import process from "node:process";

const username = process.env.GITHUB_USERNAME || "Beebop2727";
const readmePath = process.env.README_PATH || "README.md";
const fixturePath = process.env.RECENT_REPOS_FIXTURE;
const repoLimit = 6;
const startMarker = "<!-- RECENT-REPOS:START -->";
const endMarker = "<!-- RECENT-REPOS:END -->";

function escapeMarkdown(value) {
  return String(value ?? "")
    .replaceAll("\\", "\\\\")
    .replaceAll("|", "\\|")
    .replace(/[\r\n]+/g, " ")
    .trim();
}

async function getRepositories() {
  if (fixturePath) {
    return JSON.parse(await readFile(fixturePath, "utf8"));
  }

  const endpoint = new URL(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos`,
  );
  endpoint.search = new URLSearchParams({
    type: "owner",
    sort: "pushed",
    direction: "desc",
    per_page: "100",
  });

  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": `${username}-profile-readme-updater`,
  };

  if (process.env.GH_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GH_TOKEN}`;
  }

  const response = await fetch(endpoint, { headers });
  if (!response.ok) {
    throw new Error(
      `GitHub API request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

function renderRepositories(repositories) {
  const recent = repositories
    .filter(
      (repo) =>
        repo.private === false &&
        repo.fork === false &&
        repo.archived === false &&
        repo.name.toLowerCase() !== username.toLowerCase(),
    )
    .sort(
      (left, right) =>
        Date.parse(right.pushed_at ?? 0) - Date.parse(left.pushed_at ?? 0),
    )
    .slice(0, repoLimit);

  if (recent.length === 0) {
    return "No recent public repositories found.";
  }

  const rows = recent.map((repo) => {
    const name = escapeMarkdown(repo.name);
    const description = escapeMarkdown(repo.description) || "No description yet.";
    const language = escapeMarkdown(repo.language) || "—";
    const updated = repo.pushed_at
      ? new Date(repo.pushed_at).toISOString().slice(0, 10)
      : "—";

    return `| [**${name}**](${repo.html_url}) | ${description} | ${language} | ${updated} |`;
  });

  return [
    "| Repository | Description | Main language | Last pushed |",
    "|---|---|---|---|",
    ...rows,
  ].join("\n");
}

const readme = await readFile(readmePath, "utf8");
const start = readme.indexOf(startMarker);
const end = readme.indexOf(endMarker);

if (start === -1 || end === -1 || end < start) {
  throw new Error("Recent repository markers are missing or out of order.");
}

const repositories = await getRepositories();
const generated = renderRepositories(repositories);
const before = readme.slice(0, start + startMarker.length);
const after = readme.slice(end);
const updatedReadme = `${before}\n${generated}\n${after}`;

if (updatedReadme !== readme) {
  await writeFile(readmePath, updatedReadme);
  console.log(`Updated ${readmePath} with ${repoLimit} recent repositories.`);
} else {
  console.log(`${readmePath} is already up to date.`);
}
