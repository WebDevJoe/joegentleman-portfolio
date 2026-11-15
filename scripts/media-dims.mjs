// Writes lib/media-dims.ts: the pixel size of every raster image in
// public/media, used by the case-study figures. Run after adding or replacing
// an image there.
import sharp from "sharp";
import { readdirSync, writeFileSync } from "node:fs";

const files = readdirSync("public/media")
  .filter((f) => /\.(webp|png|jpe?g|avif)$/i.test(f) && !/tile|underline/.test(f))
  .sort();
const rows = [];
for (const f of files) {
  const { width, height } = await sharp(`public/media/${f}`).metadata();
  rows.push(`  "/media/${f}": [${width}, ${height}],`);
}
writeFileSync(
  "lib/media-dims.ts",
  `// Pixel sizes of the raster images in public/media, so next/image can reserve
// their space and pick the right width without loading them first.
// Regenerate when an image is added or replaced:
//   node scripts/media-dims.mjs
export const MEDIA_DIMS: Record<string, [width: number, height: number]> = {
${rows.join("\n")}
};
`,
);
console.log(`${rows.length} images`);
