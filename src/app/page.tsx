import Link from "next/link";
import Menu from "./components/menu/menu";
import StyleGuideCotent from "./style-guide-content";

export default function HomePage() {
  return (
    <div id="container">
      <div id="nav-container">

        <Menu />

      </div>
      <div className="main-content-area">
        <div className="p-4">
          <StyleGuideCotent />
        </div>
      </div>
    </div>

  );
}
