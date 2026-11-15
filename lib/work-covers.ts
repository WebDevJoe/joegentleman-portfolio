// The four project covers, shared by the work cards and the hero's cover
// stack. A plain module rather than an export from PvWork: that file is a
// client component, and the hero is rendered on the server.
//
// Placeholder dog until a sharper export of the Battle Pass cover exists.
// FS2, Worksheets and Growth Fund have their full quality exports.
export const COVERS = {
  growthFund: "/media/gxk-active.webp",
  fs2: "/media/fs2-hero.webp",
  battlePass: "/media/dog-3.webp",
  worksheets: "/media/ws-dash-overview.webp",
} as const;
