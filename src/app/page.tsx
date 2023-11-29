import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h1>Welcome to Blogs R Us</h1>
      <h3>
        Welcome to Blogs R Us, your one-stop destination for captivating and
        thought-provoking content! Dive into a world of diverse perspectives as
        our blog page offers a rich tapestry of articles spanning topics from
        technology and lifestyle to travel and personal development. Whether
        you&apos;re a seasoned reader or a newcomer to the blogging scene, Blogs
        R Us is here to ignite your curiosity and keep you engaged with
        insightful and entertaining posts. Join us on this journey of
        exploration and discovery!
      </h3>
    </main>
  );
}
