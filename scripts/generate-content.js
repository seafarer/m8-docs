#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dataDir = path.join(__dirname, '../src/data');
const outputFile = path.join(dataDir, 'content.ts');

// Read all markdown files
const markdownFiles = fs.readdirSync(dataDir)
  .filter(file => file.endsWith('.md'))
  .sort();

console.log('Found markdown files:', markdownFiles);

// Generate the content object
let contentObject = {};

markdownFiles.forEach(file => {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  contentObject[file] = content;
});

// Generate the TypeScript file
const tsContent = `// This file is auto-generated from markdown files
// Run: node scripts/generate-content.js to regenerate

export const markdownContent: Record<string, string> = ${JSON.stringify(contentObject, null, 2)};
`;

fs.writeFileSync(outputFile, tsContent);
console.log(`Generated ${outputFile} with ${markdownFiles.length} markdown files`);