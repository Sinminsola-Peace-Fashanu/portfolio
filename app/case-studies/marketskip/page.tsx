import Link from "next/link";

const researchItems = [
  "Visited local markets to understand real-world purchasing behaviour.",
  "Visited restaurants to understand business purchasing needs.",
  "Sent forms to consumers to gather customer perspectives and expectations.",
];

const productAreas = [
  {
    title: "Customer",
    items: [
      "Customer onboarding",
      "Market-list journey",
      "Marketplace experience",
      "Checkout",
      "Payments",
    ],
  },
  {
    title: "Seller",
    items: ["Seller onboarding", "Marketplace listings"],
  },
  {
    title: "Shoppers",
    items: ["Shopper onboarding", "Connecting shoppers with market requests"],
  },
  {
    title: "Operations",
    items: ["Dashboards", "Workflow improvements", "Product delivery"],
  },
];

export default function MarketSkipCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#171717]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          FASHANU SINMINSOLA P.
        </Link>

        <Link
          href="/"
          className="text-sm font-medium text-neutral-600 transition hover:text-black"
        >
          ← Back to portfolio
        </Link>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
        <div className="max-w-5xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Product Case Study · 01
          </p>

          <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Making local-market shopping more accessible.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
            How I helped shape MarketSkip’s customer journey around a
            simpler way for consumers and businesses to communicate what
            they need from local markets.
          </p>
        </div>

        {/* Project metadata */}
        <div className="mt-16 grid gap-8 border-y border-black/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Role
            </p>
            <p className="mt-2 text-sm font-medium">
              Senior Product Manager
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Timeline
            </p>
            <p className="mt-2 text-sm font-medium">
              Mar 2026 — Present
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Product
            </p>
            <p className="mt-2 text-sm font-medium">
              Multi-vendor marketplace
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Focus
            </p>
            <p className="mt-2 text-sm font-medium">
              Customer journey & marketplace experience
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              01 / Overview
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Connecting people with the local market through technology.
            </h2>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-neutral-600">
              <p>
                MarketSkip is a multi-vendor marketplace designed to
                connect consumers and businesses with local markets through
                errand shoppers.
              </p>

              <p>
                Customers can create a list of what they need, while
                shoppers go into local markets, shop for those items, and
                help customers access goods at the actual prices available
                in the market.
              </p>

              <p>
                As Senior Product Manager, I worked across the product
                experience — from customer, seller and shopper onboarding to
                marketplace listings, checkout, payments and dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              02 / The Problem
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              People want the value of local markets without always having
              to physically visit them.
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-600">
              Consumers and businesses may want access to the variety and
              pricing of traditional local markets, but visiting those
              markets can be time-consuming and inconvenient.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
              MarketSkip’s model was designed to remove that barrier by
              connecting customers with shoppers who could shop on their
              behalf.
            </p>

            <div className="mt-10 rounded-2xl bg-[#f7f5f0] p-8">
              <p className="text-sm uppercase tracking-widest text-neutral-400">
                Product challenge
              </p>

              <p className="mt-4 text-xl font-medium leading-8">
                How might we make it easy for customers to communicate
                exactly what they need, connect with a shopper, and complete
                their purchase?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="bg-[#171717] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              03 / Discovery
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              I went beyond the interface to understand the behaviour behind
              the problem.
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/60">
              I conducted research in the environments where the problem
              actually exists instead of relying only on assumptions.
            </p>

            <div className="mt-10 space-y-4">
              {researchItems.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-5 border-t border-white/10 py-5"
                >
                  <span className="text-sm text-white/30">
                    0{index + 1}
                  </span>

                  <p className="max-w-2xl text-base leading-7 text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insight */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              04 / Product Insight
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
              The opportunity
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Customers often already know what they want.
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-600">
              One of the key opportunities I identified was simplifying how
              customers communicate their shopping needs.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
              Instead of forcing customers through a complex marketplace
              journey before explaining what they needed, I recommended an
              easier flow that allowed customers to write their own market
              list directly.
            </p>

            {/* Journey */}
            <div className="mt-12 grid gap-3 sm:grid-cols-4">
              {[
                "Create market list",
                "Connect with shoppers",
                "Shop",
                "Checkout",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-black/10 bg-white p-5"
                >
                  <span className="text-xs text-neutral-400">
                    0{index + 1}
                  </span>

                  <p className="mt-8 text-sm font-medium leading-6">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-neutral-500">
              The goal was to make the product adapt to the customer's
              existing behaviour rather than forcing the customer to adapt
              to the product.
            </p>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                05 / My Role
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                From discovery to delivery.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600">
                I worked across multiple areas of the product and
                collaborated with Engineering, Design and Business
                stakeholders to translate customer and business needs into
                product priorities and deliverable solutions.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {productAreas.map((area) => (
                  <div
                    key={area.title}
                    className="rounded-2xl border border-black/10 p-7"
                  >
                    <h3 className="text-lg font-medium">{area.title}</h3>

                    <ul className="mt-5 space-y-3">
                      {area.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-6 text-neutral-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              06 / Product Decision
            </p>
          </div>

          <div>
            <div className="max-w-4xl rounded-3xl bg-[#e8e3d9] p-8 sm:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-widest text-neutral-500">
                My recommendation
              </p>

              <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
                Let customers tell us what they need — instead of making
                them search for everything.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600">
                I recommended a simpler customer journey centred around a
                direct market-list experience. This allowed the product to
                better reflect how people naturally communicate their
                shopping needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                07 / Outcome
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                A simpler path from customer intent to completed purchase.
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-600">
                The improved journey made the process simpler for
                customers. Users could complete their market list, connect
                with shoppers, and move through checkout more easily.
              </p>

              <div className="mt-12 grid gap-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 p-7">
                  <p className="text-3xl font-medium">01</p>
                  <p className="mt-5 text-sm font-medium">
                    Create a market list
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Customers can communicate exactly what they need.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-7">
                  <p className="text-3xl font-medium">02</p>
                  <p className="mt-5 text-sm font-medium">
                    Connect with shoppers
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    Requests can move naturally into fulfilment.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-7">
                  <p className="text-3xl font-medium">03</p>
                  <p className="mt-5 text-sm font-medium">
                    Complete checkout
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    The journey becomes easier to complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              08 / Reflection
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              The best digital experience doesn't always replicate a
              traditional marketplace.
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-600">
              This project reinforced the importance of understanding how
              people naturally solve a problem before deciding how a digital
              product should work.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
              Research in local markets, restaurants and conversations with
              consumers helped reveal that the product didn't need to make
              customers behave like traditional e-commerce shoppers.
            </p>

            <div className="mt-10 border-l-2 border-black pl-6">
              <p className="text-xl font-medium leading-8">
                “This is what I need. Help me get it.”
              </p>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-600">
              That insight influenced how I approached the customer journey
              and prioritised simplicity across the product.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-black/10 bg-[#171717] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Next
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
              More of my work
            </h2>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Back to portfolio →
          </Link>
        </div>
      </section>
    </main>
  );
}