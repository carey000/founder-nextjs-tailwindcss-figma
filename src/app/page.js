export default function Home() {
  // tag数组
  const tagArr = [
    "COLORS",
    "VARIABLES",
    "SHADOWS",
    "TYPOGRAPHY",
    "GRIDS",
    "FORMS PLUGIN",
    "BACKDROP BLUR",
    "BLURS",
    "SPACING",
    "BORDERS",
    "OPACITY",
    "CURSORS"
  ];
  return (
    <main>
      <div
        style={{
          backgroundImage: "url(/bg-sky.png)"
        }}
      >
        <div>
          <div>NEW: SCOPED Typography Variables 🥳</div>
        </div>

        <div>
          <div>
            <img src="/logo.svg" alt="tailwindcss-logo" />
            <div>tailwindcss</div>
          </div>
          <div>
            <div>UNOFFICIAL DESIGN SYSTEM</div>
            <div>v3.4.3</div>
          </div>
          <div>by @praveenjuge</div>
        </div>

        <div>
          {tagArr.map((tag, idx) => {
            return (
              <div key={idx}>
                <img src="/tw-logo.svg" width={32} alt="tailwindcss-logo" />
                <span>{tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
