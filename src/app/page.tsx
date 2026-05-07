export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#10130f] text-white">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(83,190,90,0.35),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,166,77,0.22),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,transparent_28%,rgba(255,255,255,0.04)_100%)]" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/85 shadow-2xl backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_16px_rgba(74,222,128,0.9)]" />
              GroceryMaster for families
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                One living list.
                <span className="block bg-gradient-to-r from-green-300 via-lime-200 to-orange-200 bg-clip-text text-transparent">
                  Everyone synced.
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg font-medium leading-8 text-white/70 lg:mx-0">
                GroceryMaster helps households build one shared grocery list, organise items by shop,
                remember pantry essentials, and switch into Shopping Mode when someone is at the store.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#privacy"
                className="rounded-full bg-white px-6 py-4 text-center text-sm font-black text-[#10130f] shadow-xl shadow-black/20 transition hover:scale-[1.02]"
              >
                Privacy Policy
              </a>

              <a
                href="mailto:support@gamadynamics.com.au"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
              >
                Contact Support
              </a>
            </div>

            <p className="text-sm font-semibold text-white/45">App Store release coming soon.</p>
          </div>

          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/35 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#f4efe4] p-5 text-[#17140f] shadow-inner">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700/70">
                    Shopping Mode
                  </p>
                  <h2 className="text-2xl font-black">Woolworths</h2>
                </div>
                <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-black text-white">
                  LIVE
                </div>
              </div>

              <div className="space-y-3">
                <ListItem name="Eggs" shop="Sara added yesterday" />
                <ListItem name="Chicken thighs" shop="Meat section" />
                <ListItem name="Bananas" shop="Fruit aisle" />
                <ListItem name="Milk" shop="Dairy" />
              </div>

              <div className="mt-5 rounded-2xl bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-black text-orange-600">Pantry magnets</p>
                <div className="mt-3 flex gap-2 overflow-hidden">
                  {["Coffee · 3d", "Nappies · 2d", "Rice · 8d"].map((item) => (
                    <span
                      key={item}
                      className="shrink-0 rounded-2xl border border-black/5 bg-white px-3 py-2 text-xs font-black shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-[#141810] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeader
            eyebrow="How it works"
            title="Built for the way families actually shop."
            text="Grocery lists are not usually created in one perfect sitting. Someone remembers eggs. Someone else remembers nappies. Then someone is already at the store. GroceryMaster keeps that messy real-life flow simple."
            dark
          />

          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              number="01"
              title="Build one living list"
              text="Everyone in the household adds items to the same shared list. No screenshots, no message chains, no forgotten notes stuck in another app."
            />
            <FeatureCard
              number="02"
              title="Assign items to shops"
              text="Add milk to Woolworths, batteries to Bunnings, or leave something under Any. The list stays flexible because real shopping is flexible."
            />
            <FeatureCard
              number="03"
              title="Shop with focus"
              text="Shopping Mode gives the person in the store a cleaner view, shows who added what, and helps avoid duplicate items before they happen."
            />
          </div>
        </div>
      </section>

      <section className="relative bg-[#f7f3ea] px-6 py-20 text-[#17140f]">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#17140f] p-6 text-white shadow-2xl shadow-black/20">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-green-300">
                Why I created it
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">
                Because groceries are shared work.
              </h2>
              <p className="mt-4 text-base font-medium leading-7 text-white/70">
                GroceryMaster started from a simple household problem: grocery lists are alive. They
                change during the day, while people are busy, while someone is already at the shop,
                and while someone else suddenly remembers what the house is missing.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-lg font-medium leading-8 text-black/70">
            <p>
              Most grocery apps treat the list like a static checklist. But families do not work like
              that. One person starts the list, another person edits it, someone moves an item to a
              different shop, and the person shopping needs the clearest possible view while walking
              through the aisles.
            </p>
            <p>
              I wanted GroceryMaster to feel less like a spreadsheet and more like a living board on
              the fridge: fast, visual, shared, and easy to understand without thinking too much.
            </p>
            <p>
              The goal is not to organise everything in your life. The goal is to make groceries feel
              lighter for the people doing them every week.
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-y border-black/5 bg-white px-6 py-20 text-[#17140f]">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeader
            eyebrow="What makes it different"
            title="Not another generic checklist."
            text="GroceryMaster is focused on household grocery flow: shared lists, shops, pantry reminders, duplicate warnings, and Shopping Mode."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <DifferenceCard
              title="Duplicate warnings"
              text="If someone already added eggs, the app can warn you before you add egg again. You can discard or continue."
            />
            <DifferenceCard
              title="Shopping Mode"
              text="A focused mode for the person actually inside the store, with less noise and more space for the list."
            />
            <DifferenceCard
              title="Pantry magnets"
              text="Keep important household items visible, like coffee, nappies, rice, pet food, or cleaning supplies."
            />
            <DifferenceCard
              title="Shop-aware lists"
              text="Items can belong to different shops, so one family list can still support how people really buy things."
            />
          </div>

          <div className="rounded-[2rem] bg-[#10130f] p-8 text-center text-white shadow-2xl shadow-black/20">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-green-300">
              Simple promise
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              One person pays. The household shares.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-white/65">
              GroceryMaster is designed so one subscription can sponsor a family group. Solo lists
              stay free, while shared household features are supported by one active group subscription.
            </p>
          </div>
        </div>
      </section>

      <section id="privacy" className="relative border-t border-white/10 bg-[#f7f3ea] px-6 py-16 text-[#17140f]">
        <div className="mx-auto max-w-4xl space-y-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-green-700">
              Privacy Policy
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">GroceryMaster Privacy Policy</h2>
            <p className="mt-3 text-sm font-semibold text-black/55">Last updated: May 2026</p>
          </div>

          <div className="grid gap-4 text-base font-medium leading-7 text-black/70">
            <p>
              GroceryMaster is designed to help families and households manage shared grocery lists,
              pantry items, shops, and shopping sessions. We collect only the information needed to
              provide these features.
            </p>

            <PrivacyBlock
              title="Information we collect"
              text="We may store your display name, user identifier, group membership, shopping list items, selected shops, pantry magnets, and subscription status."
            />

            <PrivacyBlock
              title="How data is used"
              text="Your data is used to sync grocery lists across your household, show who added or bought items, support group invitations, and manage subscriptions."
            />

            <PrivacyBlock
              title="Third-party services"
              text="GroceryMaster uses Firebase for authentication, cloud storage, syncing, and crash diagnostics. Apple handles App Store subscriptions and payment processing."
            />

            <PrivacyBlock
              title="Payments"
              text="Payment information is processed by Apple. GroceryMaster does not store credit card details. We store subscription status only so shared group features can be enabled or paused."
            />

            <PrivacyBlock
              title="Contact"
              text="For privacy or support questions, contact support@gamadynamics.com.au."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ListItem({ name, shop }: { name: string; shop: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/85 px-4 py-3 shadow-sm">
      <div>
        <p className="text-lg font-black">{name}</p>
        <p className="text-xs font-bold text-black/45">{shop}</p>
      </div>
      <div className="h-7 w-7 rounded-full border-2 border-green-500" />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-black uppercase tracking-[0.2em] ${dark ? "text-green-300" : "text-green-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-4xl font-black tracking-tight sm:text-5xl ${dark ? "text-white" : "text-[#17140f]"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base font-medium leading-7 ${dark ? "text-white/65" : "text-black/60"}`}>
        {text}
      </p>
    </div>
  );
}

function FeatureCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur">
      <p className="text-sm font-black text-green-300">{number}</p>
      <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-6 text-white/65">{text}</p>
    </div>
  );
}

function DifferenceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] bg-[#f7f3ea] p-6 shadow-sm ring-1 ring-black/5">
      <h3 className="text-xl font-black tracking-tight text-[#17140f]">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-6 text-black/60">{text}</p>
    </div>
  );
}

function PrivacyBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <h3 className="text-lg font-black text-black">{title}</h3>
      <p className="mt-2">{text}</p>
    </div>
  );
}
