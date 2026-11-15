// The four project covers, shared by the work cards and the hero's cover
// stack. A plain module rather than an export from PvWork: that file is a
// client component, and the hero is rendered on the server.
//
// Placeholder dogs until sharper exports of the real covers exist: one-5,
// bp-hero and worksheets-dashboard. FS2 has its full quality export.
export const COVERS = {
  growthFund: "/media/dog-1.webp",
  fs2: "/media/fs2-hero.webp",
  battlePass: "/media/dog-3.webp",
  worksheets: "/media/dog-4.webp",
} as const;
