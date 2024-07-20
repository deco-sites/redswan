import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [
    {
      'light': {
        '--background-header': "#FFF",
        '--text-header': "#393939",
        '--background-hero': "#393939",
        '--text-hero': "#FFF",
        '--background-section-truth-tellers': "#E15545",
        '--text-truth-tellers-marked': "#393939",
        '--text-truth-tellers': "#FFF",
        '--background-who-we-are': "#FFF",
        '--text-title-who-we-are': "#E15545",
        '--text-description-who-we-are': "#393939",
        
      }
    }
  ], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
