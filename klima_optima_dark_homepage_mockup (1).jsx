import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Droplets,
  Globe2,
  ShieldCheck,
  Snowflake,
  Wind,
  Factory,
} from "lucide-react";

const products = [
  {
    icon: Snowflake,
    title: "Portable Air Conditioning",
    copy: "Fast, targeted cooling for offices, hospitality, healthcare, events, and operational backup.",
    image: "AC",
  },
  {
    icon: Droplets,
    title: "Dehumidifiers",
    copy: "Control moisture, reduce mold risk, and protect comfort in humid commercial spaces.",
    image: "DH",
  },
  {
    icon: ShieldCheck,
    title: "Precision Humidity Control",
    copy: "Maintain accurate humidity and climate stability for critical environments requiring controlled conditions.",
    image: "PHC",
  },
];

const stats = [
  ["1M+ sqm", "Climate treated"],
  ["Nationwide", "Project support"],
  ["Commercial", "Grade solutions"],
];

function ProductRender({ label }) {
  return (
    <div className="relative h-52 flex items-end justify-center">
      <div className="absolute bottom-2 h-16 w-44 rounded-full bg-cyan-400/20 blur-2xl" />
      <div className="relative h-44 w-32 rounded-[20px] bg-gradient-to-b from-slate-100 to-slate-400 shadow-2xl border border-white/50 overflow-hidden">
        <div className="absolute top-4 left-4 right-4 h-10 rounded-xl bg-[#08192c]" />
        <div className="absolute top-20 left-4 right-4 grid grid-cols-5 gap-1">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className="h-2 rounded-full bg-[#0B2E4F]/70" />
          ))}
        </div>
        <div className="absolute bottom-4 left-5 right-5 h-7 rounded-full bg-[#18B7FF]/80" />
        <div className="absolute top-2 right-3 text-[10px] font-black text-[#0A2342]">{label}</div>
      </div>
    </div>
  );
}

export default function KlimaOptimaDarkHomepageMockup() {
  return (
    <div className="min-h-screen bg-[#030B14] text-white font-sans overflow-hidden">
      <section className="relative min-h-screen bg-[#04111F]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(24,183,255,0.28),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(14,78,138,0.45),transparent_34%),linear-gradient(135deg,#030B14_0%,#071B2F_42%,#0A2342_72%,#061728_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(90deg,rgba(110,216,255,0.18)_1px,transparent_1px),linear-gradient(rgba(110,216,255,0.16)_1px,transparent_1px)] bg-[size:86px_86px]" />
        <div className="absolute inset-y-0 right-0 w-[58%] bg-[radial-gradient(circle_at_60%_45%,rgba(24,183,255,0.22),transparent_32%),linear-gradient(90deg,transparent,rgba(0,0,0,0.25))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#030B14]" />

        <header className="relative z-30 border-b border-cyan-200/10 bg-white/[0.035] backdrop-blur-2xl">
          <div className="mx-auto max-w-[1480px] px-10 h-12 flex items-center justify-between text-sm text-white/90">
            <div className="flex items-center gap-3 font-semibold">
              <span className="text-lg">🇵🇭</span>
              <span>Philippines (En)</span>
            </div>
            <nav className="hidden lg:flex items-center gap-10 font-medium">
              {['About us', 'Resources', 'Service and Support', 'Careers', 'Contact us'].map((item) => (
                <a key={item} className="hover:text-[#6ED8FF] transition-colors">{item}</a>
              ))}
            </nav>
          </div>
        </header>

        <nav className="relative z-30 border-b border-cyan-200/10 bg-[#061728]/45 backdrop-blur-2xl">
          <div className="mx-auto max-w-[1480px] px-10 h-32 flex items-center justify-between">
            <div className="leading-none">
              <div className="flex items-center text-5xl tracking-tight font-light">
                <span>Klima</span>
                <span className="mx-1 inline-flex h-11 w-11 rounded-full bg-[#18B7FF] items-center justify-center text-[#04111F] shadow-[0_0_28px_rgba(24,183,255,0.65)]">
                  <Snowflake size={27} strokeWidth={2.8} />
                </span>
                <span className="font-black">ptima</span>
                <span className="text-xs self-start mt-1 ml-1">®</span>
              </div>
              <p className="mt-3 ml-8 italic text-[#6ED8FF] tracking-wide text-lg">The Climate Control Specialist</p>
            </div>

            <div className="flex items-center gap-10 text-xl font-semibold">
              <a className="relative text-white after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:w-full after:bg-[#18B7FF] after:shadow-[0_0_18px_rgba(24,183,255,0.9)]">
                Home
              </a>

              <div className="relative group py-10">
                <button className="flex items-center gap-2 text-white/86 hover:text-[#6ED8FF] transition-colors">
                  Products <ChevronDown size={16} />
                </button>
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-3xl border border-cyan-200/12 bg-[#061728]/95 backdrop-blur-2xl p-3 shadow-[0_24px_90px_rgba(0,0,0,0.45)] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  {['Dehumidifiers', 'Air Conditioners', 'Humidifiers'].map((item) => (
                    <a key={item} className="block rounded-2xl px-5 py-3 text-base font-semibold text-white/78 hover:bg-cyan-400/10 hover:text-[#6ED8FF] transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative group py-10">
                <button className="flex items-center gap-2 text-white/86 hover:text-[#6ED8FF] transition-colors">
                  Solutions <ChevronDown size={16} />
                </button>
                <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 rounded-3xl border border-cyan-200/12 bg-[#061728]/95 backdrop-blur-2xl p-3 shadow-[0_24px_90px_rgba(0,0,0,0.45)] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  {['Humidity Control', 'Portable Cooling', 'Precision Climate Control'].map((item) => (
                    <a key={item} className="block rounded-2xl px-5 py-3 text-base font-semibold text-white/78 hover:bg-cyan-400/10 hover:text-[#6ED8FF] transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <a className="text-white/86 hover:text-[#6ED8FF] transition-colors">
                Industries
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-2 text-white/85">
                <Globe2 size={23} />
                <span>English</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </nav>

        <main className="relative z-20 mx-auto max-w-[1480px] px-10 pt-20 pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-200/15 bg-white/[0.06] backdrop-blur-xl px-5 py-2 text-sm font-bold tracking-[0.22em] uppercase text-[#6ED8FF] shadow-[0_0_40px_rgba(24,183,255,0.08)]">
              Engineered for tropical performance
            </div>
            <h1 className="mt-8 text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight max-w-4xl">
              Climate Control Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18B7FF] to-[#9EEBFF]">Demanding Spaces</span>
            </h1>
            <p className="mt-7 text-xl leading-8 text-white/76 max-w-2xl">
              Portable cooling, dehumidification, and air quality solutions for businesses, projects, and critical environments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full px-8 py-4 bg-gradient-to-r from-[#0E8ED0] to-[#18B7FF] text-white font-bold flex items-center gap-3 shadow-[0_0_38px_rgba(24,183,255,0.32)]">
                Explore Solutions <ArrowRight size={19} />
              </button>
              <button className="rounded-full px-8 py-4 border border-cyan-200/20 bg-white/[0.055] backdrop-blur-xl font-bold text-white hover:bg-white/10 transition">
                Request Consultation
              </button>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl">
              {stats.map(([top, bottom]) => (
                <div key={top} className="rounded-3xl border border-cyan-200/10 bg-white/[0.045] backdrop-blur-xl p-5">
                  <strong className="block text-2xl text-white">{top}</strong>
                  <span className="text-sm text-white/62">{bottom}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative min-h-[560px] hidden lg:block">
            <div className="absolute inset-0 rounded-full bg-[#18B7FF]/20 blur-3xl" />
            <div className="absolute right-0 top-16 w-[520px] h-[420px] rounded-[44px] border border-cyan-200/12 bg-white/[0.045] backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(24,183,255,0.22),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
              <div className="absolute bottom-10 left-10 right-10 h-52 rounded-[30px] bg-gradient-to-t from-[#0A2342] to-[#0E4E8A]/30 border border-cyan-200/10" />
              <div className="absolute bottom-14 left-20 h-72 w-40 rounded-[24px] bg-gradient-to-b from-slate-100 to-slate-500 shadow-2xl border border-white/50">
                <div className="absolute top-8 left-5 right-5 h-16 rounded-xl bg-[#061728]" />
                <div className="absolute top-32 left-5 right-5 grid grid-cols-6 gap-1">
                  {Array.from({ length: 48 }).map((_, i) => <span key={i} className="h-2 rounded bg-[#071B2F]" />)}
                </div>
              </div>
              <div className="absolute bottom-14 left-60 h-80 w-48 rounded-[24px] bg-gradient-to-b from-slate-200 to-slate-700 shadow-2xl border border-white/40">
                <div className="absolute top-8 left-5 right-5 h-20 rounded-xl bg-[#04111F]" />
                <div className="absolute bottom-8 left-6 right-6 h-16 rounded-full bg-[#18B7FF]/80" />
              </div>
            </div>
            <div className="absolute left-4 bottom-14 rounded-3xl border border-cyan-200/12 bg-[#061728]/70 backdrop-blur-xl p-5 shadow-2xl">
              <div className="flex items-center gap-3 text-[#6ED8FF]"><ShieldCheck size={24} /><span className="font-bold">Commercial-grade reliability</span></div>
              <p className="mt-2 text-sm text-white/60 max-w-xs">Built for humid heat, high occupancy, and operational continuity.</p>
            </div>
          </motion.div>
        </main>
      </section>

      <section className="relative bg-[linear-gradient(180deg,#030B14_0%,#061728_55%,#071B2F_100%)] px-10 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(24,183,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(110,216,255,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1480px] text-center">
          <p className="uppercase tracking-[0.22em] text-[#6ED8FF] font-black text-sm">Our solutions</p>
          <h2 className="mt-4 text-6xl font-black tracking-tight">
            <span className="text-white">Our</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18B7FF] to-[#9EEBFF]">Solutions</span>
          </h2>
          <p className="mt-5 mx-auto max-w-3xl text-lg leading-8 text-white/68">
            Premium climate control solutions engineered for mobility, precision, humidity control, and critical environments.
          </p>

          <div className="mt-14 grid lg:grid-cols-3 gap-6 text-left">
            {[
              [Droplets, 'Humidity Control', 'Maintain ideal moisture levels for healthier, more comfortable, and protected indoor environments.'],
              [Snowflake, 'Portable Cooling', 'Flexible cooling solutions designed for quick setup, mobility, and efficient temperature control.'],
              [ShieldCheck, 'Critical Environment Solutions', 'Accurate temperature and humidity management for critical environments requiring stable operating conditions.'],
            ].map(([Icon, title, copy]) => (
              <div key={title} className="group rounded-[34px] border border-cyan-200/12 bg-white/[0.045] backdrop-blur-2xl p-8 min-h-[380px] shadow-[0_24px_90px_rgba(0,0,0,0.36)] hover:border-cyan-300/30 hover:-translate-y-1 transition overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_12%,rgba(24,183,255,0.18),transparent_34%)]" />
                <div className="relative h-20 w-20 rounded-3xl bg-cyan-400/10 flex items-center justify-center text-[#6ED8FF] shadow-[0_0_34px_rgba(24,183,255,0.18)] group-hover:bg-[#18B7FF] group-hover:text-[#04111F] transition">
                  <Icon size={42} />
                </div>
                <h3 className="relative mt-10 text-3xl font-black">{title}</h3>
                <p className="relative mt-5 text-white/66 leading-8 text-lg">{copy}</p>
                <button className="relative mt-10 rounded-full px-6 py-3 border border-cyan-200/15 bg-white/[0.055] text-[#6ED8FF] font-bold flex items-center gap-2 group-hover:bg-cyan-400/10 transition">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#030B14] px-10 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(24,183,255,0.22),transparent_35%),linear-gradient(180deg,#030B14_0%,#061728_100%)]" />
        <div className="relative mx-auto max-w-[1480px] text-center">
          <p className="uppercase tracking-[0.22em] text-[#6ED8FF] font-black text-sm">Why Klima Optima</p>
          <h2 className="mt-4 text-6xl font-black tracking-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18B7FF] to-[#9EEBFF]">Klima Optima</span>
          </h2>
          <p className="mt-5 mx-auto max-w-3xl text-lg leading-8 text-white/68">
            We combine proven technologies, deep industry expertise, and dependable local support to deliver climate control solutions that perform.
          </p>

          <div className="mt-14 grid md:grid-cols-4 gap-6 text-left">
            {[
              [ShieldCheck, '10+', 'Years of Experience'],
              [Factory, '3,000', 'Clients and Projects'],
              [Building2, '100%', 'Local Support'],
              [Wind, '10+', 'Environments Optimized'],
            ].map(([Icon, number, label]) => (
              <div key={label} className="rounded-[30px] border border-cyan-200/12 bg-white/[0.045] backdrop-blur-2xl p-8 shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
                <div className="h-16 w-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-[#6ED8FF] shadow-[0_0_30px_rgba(24,183,255,0.18)]">
                  <Icon size={34} />
                </div>
                <div className="mt-8 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#18B7FF] to-[#9EEBFF]">{number}</div>
                <p className="mt-4 text-xl font-bold text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[linear-gradient(180deg,#030B14_0%,#061728_45%,#0A2342_100%)] text-white px-10 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_50%_10%,rgba(24,183,255,0.45),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1480px]">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div>
              <p className="uppercase tracking-[0.22em] text-[#6ED8FF] font-black text-sm">Our solutions</p>
              <h2 className="mt-4 text-5xl font-black tracking-tight">Advanced Climate Control Solutions</h2>
              <p className="mt-4 text-white/62 max-w-2xl text-lg">A dark, premium product section using blue-lit glass cards instead of white panels.</p>
            </div>
            <button className="hidden md:flex rounded-full px-7 py-4 bg-white/[0.06] backdrop-blur-xl border border-cyan-200/15 text-white font-bold items-center gap-3 hover:bg-white/10 transition">
              View all products <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map(({ icon: Icon, title, copy, image }) => (
              <div key={title} className="group relative rounded-[30px] p-6 min-h-[420px] border border-cyan-200/12 bg-white/[0.045] backdrop-blur-2xl shadow-[0_24px_90px_rgba(0,0,0,0.35)] overflow-hidden hover:border-cyan-300/30 transition">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(24,183,255,0.18),transparent_32%)] opacity-80" />
                <div className="relative flex items-center justify-between">
                  <div className="h-13 w-13 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-[#6ED8FF] group-hover:bg-[#18B7FF] group-hover:text-[#04111F] transition shadow-[0_0_28px_rgba(24,183,255,0.12)]">
                    <Icon size={28} />
                  </div>
                  <ArrowRight className="text-[#6ED8FF] opacity-70 group-hover:translate-x-1 transition" />
                </div>
                <div className="relative mt-7">
                  <h3 className="text-2xl font-black leading-tight">{title}</h3>
                  <p className="mt-4 text-white/66 leading-7">{copy}</p>
                </div>
                <ProductRender label={image} />
                <button className="relative mt-2 text-[#6ED8FF] font-bold flex items-center gap-2">View Products <ArrowRight size={16} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[linear-gradient(180deg,#0A2342_0%,#04111F_100%)] px-10 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_50%_0%,rgba(24,183,255,0.42),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1480px]">
          <div className="text-center">
            <p className="uppercase tracking-[0.22em] text-[#6ED8FF] font-black text-sm">Our clients</p>
            <h2 className="mt-4 text-5xl font-black tracking-tight">Trusted by Businesses Across Industries</h2>
            <p className="mt-5 mx-auto max-w-3xl text-lg leading-8 text-white/65">
              Supporting climate control needs across healthcare, hospitality, construction, commercial spaces, manufacturing, and critical environments.
            </p>
          </div>

          <div className="mt-14 rounded-[36px] border border-cyan-200/12 bg-white/[0.045] backdrop-blur-2xl p-8 shadow-[0_30px_110px_rgba(0,0,0,0.38)]">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Healthcare', 'Hotels', 'Construction', 'Offices', 'Manufacturing', 'Cold Storage', 'Warehousing', 'Retail', 'Restaurants', 'Events', 'Commercial', 'Industrial'].map((client) => (
                <div key={client} className="h-24 rounded-3xl border border-cyan-200/10 bg-[#061728]/70 flex items-center justify-center text-center px-4 text-white/72 font-bold tracking-wide hover:text-[#6ED8FF] hover:border-cyan-300/30 hover:bg-cyan-400/5 transition">
                  {client}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-white/55">
            {['Hospitals', 'Hotels & Resorts', 'Project Sites', 'Factories', 'Offices', 'Warehouses'].map((tag) => (
              <span key={tag} className="rounded-full border border-cyan-200/10 bg-white/[0.035] px-5 py-2">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#030B14] px-10 py-24 text-white">
        <div className="mx-auto max-w-[1480px] rounded-[40px] border border-cyan-200/12 bg-[linear-gradient(135deg,rgba(14,78,138,0.35),rgba(255,255,255,0.035))] backdrop-blur-xl p-12 grid lg:grid-cols-2 gap-12 items-center shadow-[0_30px_120px_rgba(0,0,0,0.4)]">
          <div>
            <p className="uppercase tracking-[0.22em] text-[#6ED8FF] font-black text-sm">Why Klima Optima</p>
            <h2 className="mt-4 text-5xl font-black tracking-tight">Built for Philippine heat, humidity, and demanding operations.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              [Building2, "Business-ready deployment"],
              [Snowflake, "Reliable targeted cooling"],
              [Droplets, "Humidity risk control"],
              [ShieldCheck, "Local technical support"],
            ].map(([Icon, text]) => (
              <div key={text} className="rounded-3xl border border-cyan-200/12 bg-black/20 p-6">
                <Icon className="text-[#6ED8FF]" size={28} />
                <h3 className="mt-5 text-xl font-bold">{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
