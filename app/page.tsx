import About from "./components/About";
import Hero from "./components/Hero";
import NewsList from "./components/NewsList";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      <NewsList />
    </main>
  );
}
