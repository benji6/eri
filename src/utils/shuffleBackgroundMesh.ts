export default function shuffleBackgroundMesh() {
  for (let i = 0; i < 7; i++) {
    document.documentElement.style.setProperty(
      `--mesh-${i}-x`,
      `${Math.random() * 100}%`,
    );

    document.documentElement.style.setProperty(
      `--mesh-${i}-y`,
      `${Math.random() * 100}%`,
    );
  }
}
