import ScrollBar from "@/components/ScrollBar";
import Client from "@/components/shared/client";
import Counter from "@/components/shared/counter";
import Detail from "@/components/shared/deatails";
import Footer from "@/components/shared/footer";
import Last from "@/components/shared/last";

export default function Home() {
  return (
    <main>
      <ScrollBar />
      <Client />
      <div className="flex flex-col gap-3">
        <Detail type="one" leftImage="yes" />
        <Counter />
        <Detail type="two" leftImage="yes" />
        <Detail type="two" leftImage="no" />
      </div>
      <Last />
      <Footer />
    </main>
  );
}
