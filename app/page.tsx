import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    { name: "Project One", img: "/project1.jpg", href: "/projects/project1" },
    { name: "Project Two", img: "/project2.jpg", href: "/projects/project2" },
    { name: "Project Three", img: "/project3.jpg", href: "/projects/project3" },
    { name: "Project Four", img: "/project4.jpg", href: "/projects/project4" },
  ];

  return (
    <div className="px-8 sm:px-32 py-16 flex flex-col gap-24">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center sm:text-left">
        <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 leading-tight">
          Anastasia Meadows
        </h1>
        <p className="text-base">
          UI/UX Designer @ UCSD
        </p>
      </header>

      {/* Projects Grid */}
      <section className="w-full max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {projects.map((project) => (
            <Link key={project.name} href={project.href} className="group block">
              <div className="relative w-full aspect-[5/4] overflow-hidden shadow-lg">
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-4 text-center sm:text-left text-2xl font-semibold group-hover:underline">
                {project.name}
              </h2>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 text-center text-gray-500">
        <p>Thanks for looking!</p>
      </footer>
    </div>
  );
}

