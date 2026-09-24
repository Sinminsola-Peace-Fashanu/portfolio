import Link from "next/link";

export default function FaramoveCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#171717]">
      {/* HEADER */}
      <section className="px-6 pb-20 pt-8 sm:px-10 lg:px-16 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#666] transition-colors hover:text-[#171717]"
          >
            ← Back to portfolio
          </Link>

          <div className="mt-20 max-w-5xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#777]">
              PRODUCT CASE STUDY · 02
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Faramove
            </h1>

          </div>

          {/* PROJECT META */}
          <div className="mt-16 grid gap-8 border-t border-[#d8d4cc] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#888]">
                Role
              </p>
              <p className="mt-3 text-sm font-medium">
                Senior Product Manager
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#888]">
                Industry
              </p>
              <p className="mt-3 text-sm font-medium">
                Logistics & Freight Forwarding
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#888]">
                Scale
              </p>
              <p className="mt-3 text-sm font-medium">
                100,000+ active users
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#888]">
                Period
              </p>
              <p className="mt-3 text-sm font-medium">
                May 2023 — Jan 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
              01 · Project Overview
            </p>

            <h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
              A more connected logistics experience.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-[#555]">
              Faramove is a logistics and freight-forwarding platform designed
              to address challenges businesses face when transporting goods
              across states, countries, and international borders.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#555]">
              The platform uses technology and automation to simplify
              transportation workflows and create a more accessible digital
              logistics experience.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#555]">
              As a Senior Product Manager, I worked across product strategy,
              roadmap planning, requirements, prioritisation, delivery, and
              continuous improvement, collaborating with cross-functional teams
              to translate customer and business needs into product
              initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
            02 · My Role
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
            Connecting customer needs with business and product priorities.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Product strategy & roadmap planning",
              "Requirements gathering & prioritisation",
              "Customer and business needs",
              "Cross-functional collaboration",
              "Feature delivery & iteration",
              "Continuous product improvement",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[#dedbd4] bg-white p-7"
              >
                <span className="text-2xl">↗</span>

                <p className="mt-8 text-base leading-7 text-[#444]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & COLLABORATORS */}
      <section className="bg-[#171717] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Tools
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Jira",
                "Figma",
                "Notion",
                "Miro",
                "Analytics",
                "Product Insights",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Collaborators
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Engineering",
                "Product Design",
                "Operations",
                "Business",
                "Customer-facing Teams",
              ].map((collaborator) => (
                <span
                  key={collaborator}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70"
                >
                  {collaborator}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
            03 · The Problem
          </p>

          <div className="mt-14 max-w-4xl">
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">
              Businesses needed a simpler way to navigate complex logistics.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#555]">
              Businesses moving goods across states, countries, and
              international borders face a combination of operational,
              financial, and visibility challenges.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#555]">
              Delays, unexpected costs, limited shipment visibility,
              fragmented processes, and payment constraints can make the
              logistics experience difficult to navigate.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#555]">
              The product opportunity was to create a more integrated digital
              experience that reduced friction across key logistics journeys
              while making the transportation process easier to understand and
              manage.
            </p>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
            04 · User Pain Points
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Delayed shipments",
                text: "Transportation delays can disrupt business operations, affect delivery expectations, and increase costs.",
              },
              {
                title: "Hidden fees",
                text: "Unclear taxes, fees, and additional logistics costs can make it difficult for businesses to predict their total transportation spend.",
              },
              {
                title: "Lack of transparency",
                text: "Limited visibility into shipment status and estimated arrival times can create uncertainty for customers.",
              },
              {
                title: "Theft & insecurity",
                text: "Security concerns around transportation and cargo can affect customer confidence and increase the risk associated with moving goods.",
              },
              {
                title: "Manual processes",
                text: "Limited digital support for booking, tracking, and quote requests can make logistics workflows more difficult to manage.",
              },
              {
                title: "Fulfilment-centre discovery",
                text: "Users may struggle to find fulfilment centres and access the location information they need.",
              },
              {
                title: "Bureaucracy & delays",
                text: "Customs and administrative processes can introduce additional complexity and delays when goods cross borders.",
              },
              {
                title: "Flexible payment needs",
                text: "Businesses have different invoicing cycles and payment needs, creating an opportunity for more flexible payment models.",
              },
            ].map((painPoint) => (
              <div
                key={painPoint.title}
                className="rounded-[1.5rem] border border-[#dedbd4] bg-[#f7f5f0] p-7"
              >
                <h3 className="text-xl font-medium">{painPoint.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#666]">
                  {painPoint.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
              05 · Business Goals
            </p>

            <ul className="mt-14 space-y-5">
              {[
                "Increase adoption of the logistics platform",
                "Improve customer retention",
                "Increase platform usage",
                "Reduce operational inefficiencies",
                "Create a scalable digital logistics experience",
              ].map((goal) => (
                <li
                  key={goal}
                  className="border-b border-[#dedbd4] pb-5 text-lg text-[#444]"
                >
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
              Product Goals
            </p>

            <ul className="mt-14 space-y-5">
              {[
                "Simplify key logistics journeys",
                "Reduce friction across customer workflows",
                "Improve visibility throughout transportation",
                "Make payment and transaction flows easier to navigate",
                "Use customer feedback and product data to guide iteration",
              ].map((goal) => (
                <li
                  key={goal}
                  className="border-b border-[#dedbd4] pb-5 text-lg text-[#444]"
                >
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRODUCT APPROACH */}
      <section className="bg-[#171717] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            06 · Product Approach
          </p>

          <h2 className="mt-6 max-w-3xl font-serif text-4xl tracking-[-0.03em] sm:text-6xl">
            Turning customer and business challenges into product priorities.
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Identify customer needs, business challenges, and friction across the logistics experience.",
              },
              {
                number: "02",
                title: "Prioritise",
                text: "Translate identified opportunities into product requirements and prioritise them based on customer and business value.",
              },
              {
                number: "03",
                title: "Deliver",
                text: "Work with Engineering, Design, Operations, and business stakeholders to move prioritised initiatives through delivery.",
              },
              {
                number: "04",
                title: "Improve",
                text: "Use customer feedback, product data, and observed outcomes to identify opportunities for continuous improvement.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-[1.5rem] border border-white/10 p-7"
              >
                <p className="text-sm text-white/30">{step.number}</p>

                <h3 className="mt-12 text-xl font-medium">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
            07 · Impact
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "100K+",
                label: "Active users",
              },
              {
                value: "+20%",
                label: "User retention",
              },
              {
                value: "+25%",
                label: "Platform adoption",
              },
              {
                value: "−40%",
                label: "Issue-resolution timelines",
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.5rem] bg-white p-8"
              >
                <p className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
                  {metric.value}
                </p>

                <p className="mt-4 text-sm text-[#777]">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="text-lg leading-8 text-[#555]">
              Product initiatives contributed to a 20% improvement in user
              retention and a 25% increase in platform adoption while Faramove
              served more than 100,000 active users. Improvements in product
              processes also contributed to a 40% reduction in
              issue-resolution timelines.
            </p>
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
            08 · Product Takeaway
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">
            Good logistics products are not only about moving goods. They are
            about reducing uncertainty.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#555]">
            My experience at Faramove reinforced the importance of connecting
            customer needs, operational realities, and business objectives when
            building logistics products. The strongest product decisions came
            from understanding where friction existed and translating those
            challenges into clear, prioritised opportunities for the team.
          </p>
        </div>
      </section>

      {/* CTA */}
<section className="bg-[#171717] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
  <div className="mx-auto max-w-7xl">
    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
      More from my portfolio
    </p>

    <h2 className="mt-10 max-w-2xl font-serif text-4xl tracking-[-0.03em] sm:text-6xl">
      Interested in how I approach product problems?
    </h2>

    <div className="mt-14">
      <a
        href="mailto:sinminsolaf@gmail.com"
        className="inline-flex rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
      >
        Get in touch ↗
      </a>
    </div>
  </div>
</section>
    </main>
  );
}