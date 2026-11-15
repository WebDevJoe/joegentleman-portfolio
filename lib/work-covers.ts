// The four project covers, shared by the work cards and the hero's cover
// stack. A plain module rather than an export from PvWork: that file is a
// client component, and the hero is rendered on the server.
//
// Placeholder dogs until sharper exports of the real covers exist: one-5,
// fs2-cover, bp-hero and worksheets-dashboard, in that order.
export const COVERS = {
  growthFund: "/media/dog-1.webp",
  fs2: "/media/dog-2.webp",
  battlePass: "/media/dog-3.webp",
  worksheets: "/media/dog-4.webp",
} as const;
