import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <h1 className="text-5xl font-bold text-center">
          I&apos;m just a chill Guy
        </h1>
        <Image
          className=""
          src="/chillGuy.webp"
          alt="Chill Guy"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-center">My github 👇</p>
          <Link href="https://github.com/Albx68">
            <Image
              className="cursor-pointer"
              src="/githubWhite.svg"
              alt="Alby's github"
              width={40}
              height={20}
              priority
            />
          </Link>
        </div>
        <div>
          <Link
            href="https://albert-yumnam.vercel.app/"
            className="text-emerald-300 hover:text-emerald-600 text-center"
          >
            <p className="text-center">
              My less loved portfolio (haven&apos;t worked on it for a while) 👈
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
