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
    <main className="w-full flex justify-center pt-8 px-4 text-center font-medium">
      <div className="w-full max-w-screen-xl shadow-xl border rounded-2xl" style={{
        backgroundImage: 'url(/bg-sky.png)'
      }}>
        <div className="pt-10 pb-6">
          <div className="inline-block py-3 md:py-4 px-6 md:px-8 text-sm lg:text-2xl md:text-lg sm:text-md xs:text-sm text-sky-500 rounded-full bg-sky-500/10 border-2 border-sky-300">
            NEW: SCOPED Typography Variables 🥳
          </div>
        </div>

        <div className="py-4 lg:py-6">
          <div className="flex justify-center align-middle gap-2 lg:gap-4">
            <img src="/tw-logo.svg" alt="tailwindcss-logo" className="w-[3rem] lg:w-[4.5rem] md:w-[4rem] sm:w-[3rem]" />
            <div className=" text-4xl lg:text-6xl md:text-6xl sm:text-5xl xs:text-5xl text-slate-950">tailwindcss</div>
          </div>
          <div className="py-6 text-xs lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
            <div className="text-sky-500 pb-1">UNOFFICIAL DESIGN SYSTEM</div>
            <div className="text-slate-950">v3.4.3</div>
          </div>
          <div className="text-sky-500 pb-6 text-xs lg:text-xl md:text-md sm:text-md xs:text-sm">by @praveenjuge</div>
        </div>

        <div className="max-w-screen-md m-auto pb-[2rem] flex justify-center flex-wrap">
          {tagArr.map((tag, idx) => {
            return (
              <div key={idx} className="flex gap-1 lg:gap-4 md:gap-2 px-4 py-1 m-2 rounded-full bg-sky-500/10 border border-sky-300">
                <img src="/tw-logo.svg" alt="tailwindcss-logo" className="w-[16px] lg:w-[20px] md:w-[18px] sm:w-[16px]" />
                <span className="text-sky-500 text-xs lg:text-xl md:text-md sm:text-md xs:text-sm">{tag}</span>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  );
}
