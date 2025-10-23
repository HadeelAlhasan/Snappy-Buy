import Footer from "../parts-page/Footer";
import NavBar from "../parts-page/NavBar";
import Group from "./Group";

export default function Groups({ showptn }) {
  const group = [];
  for (let i = 0; i < 5; i++) {
    group.push(
      <div key={i} className={`${i % 2 != 0 ? "revese" : ""}`}>
        <Group showptn={showptn} />
        <div data-aos="fade-up" className="hr"></div>
      </div>
    );
  }
  return (
    <div>
      <NavBar blod={"group"} />
      <div className="groups">{group}</div>
      <Footer />
    </div>
  );
}
