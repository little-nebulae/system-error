import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { x } from "tinyexec";

function parseLine(line: string) {
  const [name, number, ...rest] = line.split(" ");
  const message = rest.join(" ");
  return { name: name as string, number: number as string, message };
}

const record: Record<
  string,
  { name: string; number: string; message: string }
> = {};

const result = x("errno", ["--list"]);
for await (const line of result) {
  const parsedLine = parseLine(line.trim());
  record[parsedLine.name] = parsedLine;
}

await writeFile(
  join(import.meta.dirname, "errno-record.json"),
  JSON.stringify(record),
);
