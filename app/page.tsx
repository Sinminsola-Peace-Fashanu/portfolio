import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    company: "MarketSkip",
    role: "Senior Product Manager",
    period: "Mar 2026 — Present",
    description:
      "Define and execute product strategy and roadmap for a multi-vendor marketplace, translating customer and business needs into product priorities while collaborating with Engineering, Design, and business stakeholders to improve the marketplace experience.",
    highlights: ["Product Strategy", "Marketplace", "Growth"],
  },
  {
    company: "Faramove",
    role: "Senior Product Manager",
    period: "May 2023 — Jan 2026",
    description:
      "Led product strategy, roadmap planning, and end-to-end delivery of logistics solutions serving 100,000+ active users. Data-informed product initiatives contributed to a 20% improvement in user retention and platform adoption by 25%.",
    highlights: ["100K+ users", "+20% retention", "+25% adoption"],
  },
  {
    company: "Instaflow",
    role: "Product Manager",
    period: "Nov 2024 — Mar 2025",
    description:
      "Defined product vision and roadmap for a cross-border digital payments platform serving users in Nigeria and Canada, supporting fund transfers, bill payments, and tuition payments. Worked across product requirements, user needs, and cross-functional delivery to improve the experience of moving and managing funds across borders.",
    highlights: ["Payments", "Nigeria + Canada", "Fintech"],
  },
  {
    company: "Palmoda",
    role: "Product Manager",
    period: "Jul 2024 — Oct 2024",
    description:
      "Managed the product backlog and Agile delivery processes, contributing to a 25% improvement in sprint velocity and 30% increase in feature delivery. Partnered with Design and User Research to identify opportunities and optimise key user journeys.",
    highlights: ["+25% velocity", "+30% delivery", "+22% satisfaction"],
  },
  {
    company: "Pill4rs",
    role: "Product Manager",
    period: "Jan 2024 — Jun 2024",
    description:
      "Led the development and launch of a digital creator-brand collaboration platform, supporting the onboarding of 1,000+ creators and 100+ organisations within the first quarter.",
    highlights: ["1,000+ creators", "100+ organisations", "Automation"],
  },
  {
    company: "ShopOnAlpha",
    role: "Product Manager",
    period: "Apr 2020 — Apr 2023",
    description:
      "Led a 10-person cross-functional team to launch a social commerce and escrow platform within four months and supported the onboarding of 18,000 Nigerian merchants.",
    highlights: ["18K merchants", "10-person team", "4-month launch"],
  },
];

const skills = [
  "Product Strategy",
  "Product Discovery",
  "User Research",
  "Product Roadmapping",
  "PRDs & Requirements",
  "Product Analytics",
  "Agile & Scrum",
  "Stakeholder Management",
  "User Journey Optimisation",
  "Usability Testing",
  "Prioritisation",
  "Product Launches",
];

const tools = [
  "Jira",
  "Figma",
  "Notion",
  "Miro",
  "Whimsical",
  "Mixpanel",
  "Google Analytics",
  "FullStory",
  "Inspectlet",
  "Github",
  "Postman",
  "Swagger",
  "HTML/CSS",
  "Node.js",
];

const certifications = [
  "Product Management Certification (PMC) — Product School",
  "Product-Led Growth Micro-Certification — Product School",
  "Certified Product Manager (CPM)",
  "Agile Scrum Master Certification — SkillUp by Simplilearn",
  "API Product Management Certification — API Academy",
  "Women Techsters Fellow — Tech4Dev",
];

const impactStats = [
  {
    value: "100K+",
    label: "Active users",
    description: "Supported logistics products serving 100K+ active users",
  },
  {
    value: "18K",
    label: "Merchants",
    description: "Merchants onboarded through ShopOnAlpha.",
  },
  {
    value: "+20%",
    label: "User retention",
    description: "Improvement in user retention through product initiatives.",
  },
  {
    value: "83%",
    label: "Faster fulfilment",
    description: "Improvement in order-processing and fulfilment efficiency.",
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#f7f5f0] text-[#171717]">
      {/* NAVIGATION */}
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#top"
          className="text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm"
        >
          Fashanu Sinminsola
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a
            href="#about"
            className="transition-opacity hover:opacity-50"
          >
            About
          </a>

          <a
            href="#experience"
            className="transition-opacity hover:opacity-50"
          >
            Experience
          </a>

          <a
            href="#work"
            className="transition-opacity hover:opacity-50"
          >
            Work
          </a>

          <a
            href="#skills"
            className="transition-opacity hover:opacity-50"
          >
            Skills
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-[#171717] px-5 py-2.5 text-xs font-medium transition-all hover:bg-[#171717] hover:text-white sm:text-sm"
        >
          Let&apos;s talk
        </a>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">

          {/* HERO CONTENT */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#171717]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#666]">
                Product Manager · Lagos, Nigeria · Open to Global Roles
              </p>
            </div>

            <h1 className="max-w-5xl text-[3.5rem] font-medium leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[7.4rem]">
              I build digital products that solve{" "}
              <span className="italic">real problems.</span>
            </h1>

            <div className="mt-9">
              <p className="max-w-xl text-base leading-7 text-[#62605b] sm:text-lg">
                I&apos;m Simi, a Product Manager who combines product thinking with a growing technical foundation to turn customer needs and business vision & challenges into practical digital solutions.
              </p>

              {/* PRIMARY CTA */}
              <div className="mt-8">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a2a2a] hover:shadow-lg"
                >
                  <span className="text-white">View selected work</span>

                  <span className="text-base text-white transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                
              </div>

              {/* HERO LINKS */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#777]">
                <a
                  href="https://www.linkedin.com/in/sinminsolapeace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-opacity hover:opacity-50"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="mailto:sinminsolaf@gmail.com"
                  className="underline underline-offset-4 transition-opacity hover:opacity-50"
                >
                  Email ↗
                </a>

              </div>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="flex justify-start lg:justify-end">
            <div className="profile-image-wrapper relative">

              {/* Rotating decorative circle */}
              <div className="profile-decoration absolute -right-7 -top-7 h-24 w-24 rounded-full border border-[#171717]/15" />

              {/* Image + attached badge */}
              <div className="relative h-[390px] w-[300px] overflow-visible rounded-[160px] sm:h-[480px] sm:w-[370px]">

                {/* Profile image */}
                <div className="relative h-full w-full overflow-hidden rounded-[160px] bg-[#dedbd2]">
                  <Image
                    src="/portfolio/images/profile.jpeg"
                    alt="Sinminsola Fashanu"
                    fill
                    sizes="(max-width: 640px) 300px, 370px"
                    className="profile-image object-cover"
                    priority
                  />
                </div>

                {/* Attached Product Manager badge */}
                <div className="profile-badge absolute -bottom-3 -left-3 flex h-24 w-24 items-center justify-center rounded-full bg-[#171717] text-center text-[11px] uppercase leading-4 tracking-[0.08em] text-white shadow-lg">
                  Product
                  <br />
                  Manager
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-[#999]">
          <span>Scroll to explore</span>
          <span className="h-px w-16 bg-[#c7c3bb]" />
        </div>
      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-[#171717]/10 bg-white/40"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.28fr_1fr] lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#777]">
                01 — About
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-3xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                I turn ambiguous customer and business problems into clear
                product opportunities.
              </h2>

              <div className="mt-14 grid gap-8 text-base leading-8 text-[#5c5c5c] md:grid-cols-2">
                <p>
                  I’m a Product Manager with experience across marketplaces, logistics, payments, e-commerce, and service-oriented digital products. I work at the intersection of customer needs, business goals, design, and technology to turn complex problems into practical, user-focused product solutions.
                  From discovery and requirements definition to prioritisation, delivery, and continuous improvement, I collaborate closely with Engineering, Design, Operations, and business stakeholders to move products from ideas to meaningful outcomes.
                  I also have a growing foundation in software engineering, with beginner-level experience in Node.js, APIs, MongoDB, and Firebase. This technical foundation helps me communicate effectively with engineering teams and understand the technical considerations that shape product decisions.
                  My product toolkit includes Product Discovery, Agile, Scrum, Kanban, MoSCoW prioritisation, Jira, Figma, and Asana.
                  I’m continuously learning, asking better questions, and building products that solve real problems and create measurable value for both users and businesses.
                </p>
              </div>

              <div className="mt-14 grid border-t border-[#171717]/15 sm:grid-cols-3">
                <div className="border-b border-[#171717]/15 py-6 sm:border-b-0 sm:border-r sm:pr-7">
                  <p className="text-sm font-medium">Customer-focused</p>
                  <p className="mt-2 text-sm leading-6 text-[#777]">
                    I start with the problem before jumping to the solution. I seek to understand user needs, pain points, and context before defining what to build.
                  </p>
                </div>

                <div className="border-b border-[#171717]/15 py-6 sm:border-b-0 sm:px-7 sm:border-r">
                  <p className="text-sm font-medium">Data-informed</p>
                  <p className="mt-2 text-sm leading-6 text-[#777]">
                    I use research, analytics, feedback, and experimentation to inform product decisions and continuously improve the user experience.
                  </p>
                </div>

                <div className="py-6 sm:pl-7">
                  <p className="text-sm font-medium">Technically aware</p>
                  <p className="mt-2 text-sm leading-6 text-[#777]">
                    I understand how digital products are designed, integrated, and built, allowing me to collaborate effectively with engineering teams and make informed product decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-28">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.28fr_1fr] lg:gap-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#777]">
            Selected impact
          </p>

          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              Product work measured by what changed.
            </h2>
          </div>
        </div>

        <div className="grid border-y border-[#171717]/15 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <div
              key={stat.value}
              className={`py-8 lg:px-8 lg:py-10 ${
                index !== 0 ? "border-t border-[#171717]/15 sm:border-l lg:border-t-0" : ""
              }`}
            >
              <p className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl">
                {stat.value}
              </p>

              <p className="mt-4 text-sm font-medium">{stat.label}</p>

              <p className="mt-2 max-w-[190px] text-sm leading-6 text-[#777]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="grid gap-12 lg:grid-cols-[0.28fr_1fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#777]">
              02 — Experience
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
              Where I&apos;ve worked.
            </h2>
          </div>

          <div>
            <p className="mb-12 max-w-2xl text-base leading-7 text-[#666]">
              Building, launching, and improving digital products across marketplaces, logistics, payments, e-commerce, and creator platforms; working across product strategy, discovery, delivery, and continuous improvement.
            </p>

            <div className="border-t border-[#171717]/15">
              {experiences.map((experience, index) => (
                <div
                  key={`${experience.company}-${experience.role}`}
                  className="grid gap-5 border-b border-[#171717]/15 py-8 md:grid-cols-[0.55fr_1.25fr_0.55fr] md:gap-10 md:py-10"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#aaa]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-lg font-medium">
                        {experience.company}
                      </p>
                    </div>

                    <p className="mt-1 pl-7 text-sm text-[#777]">
                      {experience.role}
                    </p>
                  </div>

                  <div>
                    <p className="max-w-2xl text-sm leading-7 text-[#5c5c5c]">
                      {experience.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full bg-white px-3 py-1.5 text-xs text-[#666]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-[#777] md:text-right">
                    {experience.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="bg-[#171717] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-[0.28fr_1fr] lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                03 — Selected work
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-6xl">
                Products, problems, and outcomes.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
                A selection of product work where I explored customer problems, translated insights into product decisions, and collaborated with cross-functional teams to build and improve digital experiences.
              </p>
            </div>
          </div>

          {/* PRIMARY CASE STUDY */}
          <div className="mt-16">
            <Link
              href="/case-studies/marketskip"
              className="group block overflow-hidden rounded-[2rem] bg-[#252525] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid lg:grid-cols-[1fr_0.9fr]">
                <div className="p-7 sm:p-10 lg:p-14">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                      Featured case study
                    </p>

                    <span className="text-xs text-white/40">
                      01 / 01
                    </span>
                  </div>

                  <h3 className="mt-12 text-5xl font-medium tracking-[-0.04em] sm:text-6xl">
                    MarketSkip
                  </h3>

                  <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
                    A local-market errand-shopper marketplace designed around
                    connecting customers with shoppers who shop for their lists
                    at actual market prices.
                  </p>

                  <div className="mt-9 flex flex-wrap gap-2">
                    {[
                      "Product Strategy",
                      "Marketplace",
                      "User Research",
                      "Customer Journey",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-12 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm font-medium">
                    Read case study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>
                </div>

                <div className="relative min-h-[360px] overflow-hidden bg-[#dedbd2] p-8 text-[#171717] lg:min-h-full">
                  <div className="absolute left-10 top-10 h-32 w-32 rounded-full border border-[#171717]/15" />

                  <div className="relative min-h-[360px] overflow-hidden bg-[#dedbd2] lg:min-h-full">
  <Image
    src="/portfolio/images/marketskip/marketskip.png"
    alt="MarketSkip interface"
    fill
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 45vw"
  />
</div>

                  <div className="absolute bottom-10 left-10 right-10 rounded-[1.5rem] border border-[#171717]/15 bg-[#f7f5f0]/60 p-6 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.15em] text-[#777]">
                      Product focus
                    </p>

                    <p className="mt-3 text-xl font-medium">
                      Market list → Shoppers → Checkout
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#666]">
                      Simplifying the journey from customer need to completed
                      marketplace transaction.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* SUPPORTING WORK */}
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-[#252525] p-7 sm:p-9">
              <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                02 — Logistics
              </p>

              <h3 className="mt-14 text-4xl font-medium tracking-[-0.03em]">
                Faramove
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Logistics products serving 100,000+ active users, with
                product initiatives that increased retention by 20% and
                platform adoption by 25%.
              </p>

              <div className="mt-14 flex flex-wrap gap-2">
                {["Logistics", "Payments", "Growth"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] bg-[#252525] p-7 sm:p-9">
              <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                03 — E-commerce
              </p>

              <h3 className="mt-14 text-4xl font-medium tracking-[-0.03em]">
                ShopOnAlpha
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Social commerce and escrow platform launched within four
                months, supporting 18,000 Nigerian merchants and reducing
                failed transactions from 9.2% to 2.1%.
              </p>

              <div className="mt-14 flex flex-wrap gap-2">
                {["E-commerce", "Escrow", "Growth"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>

          {/* DIAMONDEDGE */}
          <a
            href="https://diamondedgeconstructionltd.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 block rounded-[2rem] border border-white/10 bg-[#1e1e1e] p-7 transition-colors hover:bg-[#252525] sm:p-9"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] bg-[#dedbd2]">
  <Image
    src="/portfolio/images/diamondedge/diamondedge.png"
    alt="DiamondEdge Construction website"
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
    sizes="(max-width: 1024px) 100vw, 40vw"
  />
</div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                  Independent build
                </p>

                <h3 className="mt-5 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
                  DiamondEdge Construction
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
                  Designed and built a professional digital presence for a
                  construction company, including its website and AI-powered
                  chatbot experience.
                </p>

                <span className="mt-8 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-sm font-medium">
                  View project
                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="grid gap-14 lg:grid-cols-[0.28fr_1fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#777]">
              04 — Capabilities
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
              How I work.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-[#555]">
              From understanding the problem to helping teams ship the
              solution, I work across the product lifecycle with a focus on
              clarity, collaboration, and measurable outcomes.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#171717]/15 px-5 py-3 text-sm transition-colors hover:bg-white"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-16 border-t border-[#171717]/15 pt-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[#777]">
                Tools & technical knowledge
              </p>

              <div className="mt-7 grid grid-cols-2 gap-y-4 text-sm sm:grid-cols-3 md:grid-cols-4">
                {tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className="border-y border-[#171717]/10 bg-white/40">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.28fr_1fr] lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#777]">
                05 — Background
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.035em] sm:text-5xl">
                Education & credentials.
              </h2>
            </div>

            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#999]">
                  Education
                </p>

                <div className="mt-7 border-t border-[#171717]/15">
                  <div className="py-6">
                    <h3 className="text-2xl font-medium">
                      Bachelor of Arts
                    </h3>

                    <p className="mt-1 text-base text-[#555]">
                      English Language
                    </p>

                    <p className="mt-3 text-sm text-[#888]">
                      Obafemi Awolowo University · 2019
                    </p>
                  </div>

                  <div className="border-t border-[#171717]/10 py-6">
                    <h3 className="text-lg font-medium">
                      ICT Training Programme
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#777]">
                      Centre of Excellence in Software Engineering Building,
                      Obafemi Awolowo University · 2015
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#999]">
                  Certifications
                </p>

                <div className="mt-7 border-t border-[#171717]/15">
                  {certifications.map((certification) => (
                    <div
                      key={certification}
                      className="border-b border-[#171717]/10 py-5 text-sm leading-6"
                    >
                      {certification}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="grid gap-12 lg:grid-cols-[0.28fr_1fr] lg:gap-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#777]">
            06 — Contact
          </p>

          <div>
            <h2 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-[6.5rem]">
              Let&apos;s create{" "}
              <span className="italic">magic!</span>
            </h2>

            <div className="mt-14 flex flex-wrap gap-4">
              <a
                href="mailto:sinminsolaf@gmail.com"
                className="rounded-full border border-[#171717]/20 px-7 py-3.5 text-sm font-medium transition-colors hover:bg-white"
              >
                sinminsolaf@gmail.com ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sinminsolapeace"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#171717]/20 px-7 py-3.5 text-sm font-medium transition-colors hover:bg-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#171717]/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-8 text-xs uppercase tracking-[0.12em] text-[#888] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 Sinminsola Fashanu</p>

          <p>Product Manager · Builder · Problem Solver</p>
        </div>
      </footer>
    </main>
  );
}