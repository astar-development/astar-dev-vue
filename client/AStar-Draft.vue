<script setup lang="ts">
const packages = [
  {
    name: "AStar.Pipelines",
    description:
      "Deterministic, observable .NET pipelines that behave like a rehearsed setlist — tight, predictable, and loud when needed.",
    nugetUrl: "https://www.nuget.org/packages/AStar.Pipelines",
    docsUrl: "/docs/astar.pipelines.md",
  },
  {
    name: "AStar.Observability",
    description:
      "Traces, metrics, and logs that turn production from noise into a mix you can actually hear and tune.",
    nugetUrl: "https://www.nuget.org/packages/AStar.Observability",
    docsUrl: "/docs/astar.observability.md",
  },
  {
    name: "AStar.Resilience",
    description:
      "Resilience primitives that keep your system playing through retries, timeouts, and partial failures.",
    nugetUrl: "https://www.nuget.org/packages/AStar.Resilience",
    docsUrl: "/docs/astar.resilience.md",
  },
];

const testimonials = [
  {
    quote:
      "We expected a pipeline review. We got a complete reframe of how we think about delivery. Calm, sharp, and relentlessly practical.",
    name: "Hannah Lee",
    role: "Engineering Manager",
    company: "Vectorline Systems",
  },
  {
    quote:
      "Our deploys used to feel like a live show with no soundcheck. Now they’re tight, predictable, and fully instrumented.",
    name: "Owen Carter",
    role: "Platform Lead",
    company: "Nimbus Data",
  },
  {
    quote:
      "The mix of deep technical discipline and human, honest communication made it easy for the team to engage.",
    name: "Isabella Rossi",
    role: "CTO",
    company: "Aurora Grid",
  },
];

const tracks = [
  {
    title: "Track 1: Discovery",
    text: "Understand your context, constraints, and where the real friction lives.",
  },
  {
    title: "Track 2: Design",
    text: "Shape architectures, pipelines, and observability that fit your team and domain.",
  },
  {
    title: "Track 3: Delivery",
    text: "Pair on implementation, keep feedback loops tight, and adjust as we learn.",
  },
  {
    title: "Track 4: Encore",
    text: "Leave you with documentation, patterns, and confidence to keep iterating.",
  },
];
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50">
    <!-- HEADER -->
    <header class="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-3">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-amber-300 text-sm font-bold text-slate-950 shadow-lg shadow-fuchsia-500/40"
          >
            ★
          </div>
          <div>
            <div class="text-sm font-semibold tracking-wide">AStar Development</div>
            <div class="text-xs text-slate-400">
              Architecture, pipelines, observability — with a loud soundtrack.
            </div>
          </div>
        </div>

        <nav class="hidden items-center gap-6 text-xs text-slate-300 md:flex">
          <a href="#services" class="hover:text-cyan-300">Services</a>
          <a href="#packages" class="hover:text-cyan-300">NuGet</a>
          <a href="#tracks" class="hover:text-cyan-300">Setlist</a>
          <a href="#testimonials" class="hover:text-cyan-300">Testimonials</a>
          <a href="#contact" class="hover:text-cyan-300">Contact</a>
        </nav>
      </div>
    </header>

    <!-- HERO -->
    <section class="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div class="mx-auto max-w-6xl px-6 py-14">
        <div class="grid gap-12 md:grid-cols-[1.2fr,1fr] md:items-center">
          <!-- LEFT -->
          <div>
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-fuchsia-300">
              PRECISION // CHAOS
            </p>

            <h1 class="mt-3 text-4xl font-semibold tracking-tight">
              Production-grade .NET systems, tuned like a great live set.
            </h1>

            <p class="mt-4 text-sm text-slate-300">
              AStar Development blends TDD discipline with the energy of a stadium show.
              Metallica-level reliability. Blackpink-level polish.
            </p>

            <div class="mt-5 flex flex-wrap gap-2 text-[0.65rem] text-slate-200">
              <span class="rounded-full border border-slate-700 px-3 py-1">TDD or it didn’t happen</span>
              <span class="rounded-full border border-slate-700 px-3 py-1">Clean code, loud playlists</span>
              <span class="rounded-full border border-slate-700 px-3 py-1">Observability as a lifestyle</span>
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <a
                href="#services"
                class="inline-flex items-center rounded-full bg-fuchsia-500 px-4 py-2 text-xs font-medium text-slate-950 shadow-md shadow-fuchsia-500/40 hover:bg-fuchsia-400"
              >
                Explore services
              </a>

              <a
                href="#contact"
                class="inline-flex items-center rounded-full border border-slate-600 px-4 py-2 text-xs text-slate-200 hover:border-cyan-400"
              >
                Start a conversation
              </a>
            </div>
          </div>

          <!-- RIGHT: SIGNAL PANEL -->
          <div class="relative">
            <div
              class="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-fuchsia-500/40 via-cyan-500/30 to-amber-400/30 blur-2xl"
            ></div>

            <div class="relative rounded-2xl border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/80">
              <div class="flex items-center justify-between text-[0.65rem] text-slate-400">
                <span class="uppercase tracking-[0.18em] text-slate-500">Live signals</span>
                <span class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">On air</span>
              </div>

              <div class="mt-4 grid gap-3 sm:grid-cols-3">
                <div class="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                  <div class="text-[0.65rem] text-slate-400">Pipeline success</div>
                  <div class="mt-1 text-lg font-semibold text-emerald-400">99.1%</div>
                  <div class="mt-1 text-[0.65rem] text-emerald-300/80">Flakiness under control</div>
                </div>

                <div class="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                  <div class="text-[0.65rem] text-slate-400">Deploy frequency</div>
                  <div class="mt-1 text-lg font-semibold text-cyan-300">Daily</div>
                  <div class="mt-1 text-[0.65rem] text-cyan-300/80">Without drama</div>
                </div>

                <div class="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                  <div class="text-[0.65rem] text-slate-400">Incident MTTR</div>
                  <div class="mt-1 text-lg font-semibold text-amber-300">18 min</div>
                  <div class="mt-1 text-[0.65rem] text-amber-300/80">Signals over guesswork</div>
                </div>
              </div>

              <div
                class="mt-4 rounded-xl border border-dashed border-slate-700 bg-slate-900/70 p-3 text-[0.7rem] text-slate-300"
              >
                <div class="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  What this feels like
                </div>
                <p>
                  Releases that feel like a soundcheck you’ve already done a hundred times.
                  No surprises — just deliberate, repeatable moves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <!-- {/* Services: “What you actually get” */} -->
        <section id="services" className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-lg font-semibold">What you actually get</h2>
                <p className="mt-1 text-sm text-slate-300">
                  No slide decks for the shelf. Concrete changes to how your system behaves and how your team works.
                </p>
              </div>
              <p className="text-xs text-slate-400">Typically 2–12 weeks, shaped around your team and constraints.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <h3 className="text-sm font-semibold">Architecture & System Design</h3>
                <p className="mt-2 text-xs text-slate-300">
                  Clear boundaries, explicit contracts, and a shared mental model of how your system behaves in production.
                </p>
                <p className="mt-3 text-[0.7rem] text-slate-400">
                  Output: architecture sketches, decision records, and a roadmap that respects your reality.
                </p>
              </article>
              <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <h3 className="text-sm font-semibold">Production-Grade .NET Pipelines</h3>
                <p className="mt-2 text-xs text-slate-300">
                  Deterministic, observable pipelines that make TDD and clean code pay off all the way to production.
                </p>
                <p className="mt-3 text-[0.7rem] text-slate-400">
                  Output: pipeline definitions, guardrails, and patterns your team can extend without fear.
                </p>
              </article>
              <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <h3 className="text-sm font-semibold">Observability & Telemetry</h3>
                <p className="mt-2 text-xs text-slate-300">
                  Traces, metrics, and logs that make incidents understandable, and post-incident reviews genuinely useful.
                </p>
                <p className="mt-3 text-[0.7rem] text-slate-400">
                  Output: instrumentation plan, dashboards, and workflows tuned to your team.
                </p>
              </article>
            </div>
          </div>
        </section>

        <!-- {/* Code & Chaos strip */} -->
        <section className="border-b border-slate-800 bg-gradient-to-r from-slate-950 via-fuchsia-900/40 to-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] md:items-center">
              <div>
                <h2 className="text-lg font-semibold">Code & chaos, deliberately mixed</h2>
                <p className="mt-2 text-sm text-slate-200">
                  The same mindset that obsesses over test coverage and clean boundaries also loves loud guitars and
                  perfectly choreographed stages. That tension is useful: it keeps systems disciplined without becoming dull.
                </p>
              </div>
              <div className="grid gap-3 text-[0.7rem] text-slate-200 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
                    TDD & CLEAN CODE
                  </div>
                  <p className="mt-1">
                    Tests as design, not afterthought. Code that future-you and future-team can actually live with.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    ECLECTIC ENERGY
                  </div>
                  <p className="mt-1">
                    Metallica for focus, Blackpink for momentum. The work is serious; the atmosphere does not have to be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

    <!-- NUGET RACK -->
    <section id="packages" class="border-b border-slate-800 bg-slate-950">
      <div class="mx-auto max-w-6xl px-6 py-12">
        <h2 class="text-lg font-semibold">NuGet rack</h2>
        <p class="mt-1 text-sm text-slate-300">Packages that capture patterns proven in production.</p>

        <div class="mt-6 flex gap-4 overflow-x-auto pb-2">
          <article
            v-for="pkg in packages"
            :key="pkg.name"
            class="min-w-[260px] rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold">{{ pkg.name }}</h3>
              <span class="rounded-full bg-slate-900 px-2 py-0.5 text-[0.6rem] text-slate-400">NuGet</span>
            </div>

            <p class="mt-2 text-xs text-slate-300">{{ pkg.description }}</p>

            <div class="mt-3 flex flex-col gap-1 text-xs">
              <a :href="pkg.nugetUrl" target="_blank" class="text-cyan-300 hover:underline">View on NuGet</a>
              <a :href="pkg.docsUrl" class="text-cyan-300 hover:underline">View markdown docs</a>
            </div>

            <pre class="mt-3 overflow-x-auto rounded-lg bg-slate-900/80 p-3 text-[0.65rem] text-slate-300">
<code>dotnet add package {{ pkg.name }}</code>
            </pre>
          </article>
        </div>
      </div>
    </section>

    <!-- SETLIST -->
    <section id="tracks" class="border-b border-slate-800 bg-slate-950">
      <div class="mx-auto max-w-6xl px-6 py-12">
        <h2 class="text-lg font-semibold">Setlist: how engagements flow</h2>
        <p class="mt-1 text-sm text-slate-300">
          A structured path from understanding your context to leaving you with a system you can confidently own.
        </p>

        <div class="mt-6 grid gap-4 md:grid-cols-4">
          <article
            v-for="(track, index) in tracks"
            :key="track.title"
            class="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
          >
            <div class="mb-2 flex items-center justify-between">
              <span class="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {{ index + 1 < 10 ? `0${index + 1}` : index + 1 }}
              </span>
              <span class="h-2 w-2 rounded-full bg-fuchsia-400"></span>
            </div>

            <h3 class="text-sm font-semibold">{{ track.title }}</h3>
            <p class="mt-2 text-xs text-slate-300">{{ track.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section id="testimonials" class="border-b border-slate-800 bg-slate-950">
      <div class="mx-auto max-w-6xl px-6 py-12">
        <h2 class="text-lg font-semibold">Liner notes</h2>
        <p class="mt-1 text-sm text-slate-300">
          Feedback from teams who wanted fewer surprises and more confidence in production.
        </p>

        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <article
            v-for="t in testimonials"
            :key="t.name"
            class="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
          >
            <p class="text-xs text-slate-200">"{{ t.quote }}"</p>
            <p class="mt-3 text-[0.7rem] text-slate-400">
              {{ t.name }}, {{ t.role }}, {{ t.company }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="bg-slate-950">
      <div class="mx-auto max-w-6xl px-6 py-12">
        <div class="grid gap-8 md:grid-cols-[1.1fr,1fr] md:items-start">
          <div>
            <h2 class="text-lg font-semibold">Let’s talk about your system</h2>
            <p class="mt-2 text-sm text-slate-300">
              If your architecture, pipelines, or observability feel more like noise than music,
              a short conversation can help.
            </p>
            <p class="mt-3 text-sm text-slate-300">
              Share a brief outline of your context. You’ll receive a considered response — not a sales sequence.
            </p>
          </div>

          <div class="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
            <form class="space-y-3">
              <div>
                <label for="name" class="block text-xs text-slate-300">Name</label>
                <input
                  id="name"
                  type="text"
                  class="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label for="email" class="block text-xs text-slate-300">Email</label>
                <input
                  id="email"
                  type="email"
                  class="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label for="message" class="block text-xs text-slate-300">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  class="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 focus:border-cyan-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="button"
                class="inline-flex items-center rounded-full bg-cyan-500 px-4 py-2 text-xs font-medium text-slate-950 shadow-md shadow-cyan-500/40 hover:bg-cyan-400"
              >
                Submit (non-functional demo)
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="border-t border-slate-800 px-6 py-4 text-center text-xs text-slate-500">
      © {{ new Date().getFullYear() }} AStar Development. All rights reserved.
    </footer>
  </div>
</template>
