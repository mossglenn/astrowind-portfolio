import fs from 'fs/promises';
import path from 'path';

const defaultDir = './src/assets/styles/tokens';
const defaultFiles = ['fonts.css', 'base.css', 'dark.css'];

/**
 * Loads and concatenates the contents of one or more CSS token files.
 *
 * @param files - List of token CSS filenames (defaults to standard set)
 * @param dir - Directory path containing token files (defaults to `src/assets/styles/tokens`)
 * @returns A single string containing all token CSS
 */
export async function loadTokens(files: string[] = defaultFiles, dir: string = defaultDir): Promise<string> {
  const contents = await Promise.all(
    files.map(async (file) => {
      try {
        return await fs.readFile(path.join(dir, file), 'utf-8');
      } catch (err) {
        if (import.meta.env.DEV) {
          console.warn(`[loadTokens] Skipped missing file: ${file} ${err.message}`);
        }
        return '';
      }
    })
  );
  return contents.join('\n\n');
}
