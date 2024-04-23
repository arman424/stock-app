import logo from "@/assets/stock-logo.svg";

export default function Header() {
  return (
    <header className="w-full bg-slate-900 rounded-lg h-22 text-center p-8">
      <div className="flex justify-center items-center gap-10">
        <img src={logo} alt="logo" className="w-full max-w-24" />
        <span className="text-white tracking-widest text-4xl mt-4 inline-block font-bold">
          MY STOCK APP
        </span>
      </div>
    </header>
  );
}
