import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <div style={{display: "flex", gap: "8px"}}>
      <Link href="/sens-calculator">
        <a>Sens calculator</a>
      </Link>
      <Link href="/flow-chart">
        <a>Flow chart</a>
      </Link>
      <Link href="/micro-strats">
        <a>Micro strats</a>
      </Link>
    </div>
  );
};
