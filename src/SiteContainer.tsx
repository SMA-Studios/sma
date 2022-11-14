import Boys from "./Boys";
import { Outlet } from "react-router";

const splashes = [
  "Spinal Muscular Atrophy",
  "Stegosaurus Man Ascends",
  "Seriously Masculine Antagonists",
  "Some Meticulous Analysts",
  "Supranational Manufacturing Assocation",
  "Saskatchewan Medical Association",
  "Somewhat Miniscule Afro-Eurasians",
  "Seated Men of America",
  "Shenandoah Mountain Appreciators",
  "Surprise Marsupial Attack",
  "Seventeen Massive Artichokes",
  "Slippery Martian Arsecracks",
  "Salient Motif Analysis",
  "Sexy Medieval Aristocrats",
  "Superlative: Most Awesome",
  "Slightly Masculine Altruists",
  "Siamese Musical Act",
  "Solid Metal Alloy",
  "Sapphire Mining Accident",
  "Secreting Minimal Amounts",
  "Spaghetti, Mom's Appreciators",
  "Studious Miners Association",
  "Small Matryoshka Assemblers",
  "Smegma Miners Abound",
  "Scimitar (Mercurial) Abusers",
  "Spectacularly Moronic Aborigines",
  "Seinfeld's Massive Anus",
  "Semiautomatic Military Artillery",
  "Secular Morose Assholes",
  "Seemingly Misanthropic Anthropologists",
  "Stop Motion Animations",
  "Simulated Male Adults"
  ];

const SiteContainer = () => {
  return (
    <div className="body-container">
      <div className="header">SMA: {splashes[Math.floor(Math.random()*splashes.length)]}</div>
      <Outlet />
    </div>
  );
};

export default SiteContainer;
