export function LogoTile({ size = 48 }: { size?: number }) {
  return (
    <div
      className="bg-logo-tile rounded-[8px] shrink-0"
      style={{
        width: size,
        height: size,
        boxShadow: "0 0 0 1px #0d0d0d, 0 2px 4px 0 rgba(0,0,0,0.1)",
        border: "1.135px solid rgba(49,48,54,0)",
      }}
      aria-hidden
    />
  );
}
