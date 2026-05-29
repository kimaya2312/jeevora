"use client";

import Cta from "@layouts/components/Cta";
import FeaturePanel, {
  MockupLifestyle,
  MockupLifestyleSleep,
  MockupLifestyleNutrition,
  MockupLifestyleExercise,
} from "@layouts/components/FeaturePanel";

const LIFESTYLE_INTRO = "Good health is built in everyday moments. Jeevora Care tracks the full picture — not just when something feels wrong.";

const LIFESTYLE_ITEMS = [
  { title: "Sleep & mood tracking", preview: "Daily sleep patterns and mood shifts — auto-surfaced from your wearable", body: "Log daily sleep patterns and mood shifts to build a fuller picture of your wellbeing. Sleep quality and duration surface automatically from your connected wearable every morning. Mood can be logged manually. Both feed directly into your GP report." },
  { title: "Nutrition logging", preview: "Meals, macros, calories — unusual dietary patterns surface in your GP report", body: "Log meals, macros, and calorie totals for every meal — breakfast, lunch, dinner, snacks. Track iron-rich foods on heavier days, or lighter options that ease symptoms. Unusual dietary patterns feed directly into your GP report without extra effort." },
  { title: "Exercise & activity logging", preview: "Log manually or sync from wearable — linked directly to symptoms", body: "Log workouts manually or let your wearable sync them automatically. Jeevora Care connects exercise patterns to symptoms — so your GP sees exactly how your activity level affects your health. Reduced activity on heavier symptom days is noted in your report automatically." },
  { title: "Wearable integration", preview: "Apple Watch, Fitbit, Garmin — sleep, HR, HRV, steps pulled automatically", body: "Designed to connect with major wearable devices — Apple Watch, Fitbit, Garmin and more. Sleep, heart rate, HRV, and steps are pulled automatically. Jeevora Care reads the patterns hiding in your data and surfaces them to your doctor before they become problems." },
  { title: "Clean mobile app", preview: "Unified daily view — wearable stats, entries, one-tap log button on one screen", body: "A clean, intuitive mobile experience built for everyday health logging — quick to open, quick to log, no friction. Wearable stats, today's entries, and a one-tap log button are all on one screen. Sleep quality and heart rate surface automatically every morning from your connected device." },
  { title: "Proactive health tracking", preview: "Spot what's improving, shifting, or worth watching — before it becomes a problem", body: "Jeevora Care isn't just for appointments — it's for staying on top of your health every day. Over time it builds a picture that goes far beyond a single symptom — helping you spot what is improving, what is shifting, and what is worth paying attention to before it becomes a problem." },
];

const lifestyleCategories = [
  {
    icon: "🛏️",
    title: "Sleep",
    description:
      "Log sleep duration and quality each night. Spot how poor sleep predates symptom flare-ups — or confirms your GP's suspicions.",
    accent: "#7C3AED",
    bg: "#F5F3FF",
    examples: ["Hours slept", "Sleep quality rating", "Woke in the night"],
  },
  {
    icon: "😊",
    title: "Mood",
    description:
      "Track daily mood with a simple scale. Over weeks, mood trends become visible alongside physical symptoms — a critical link for many conditions.",
    accent: "#DC2626",
    bg: "#FFF5F5",
    examples: ["Daily mood score", "Energy level", "Anxiety rating"],
  },
  {
    icon: "🥗",
    title: "Meals & Nutrition",
    description:
      "Note what you ate and when. Identify food triggers for digestive symptoms, migraines, or fatigue without needing a dedicated food diary app.",
    accent: "#1D9E75",
    bg: "#ECFDF5",
    examples: ["Meal times", "Food notes", "Dietary changes"],
  },
  {
    icon: "🏃",
    title: "Exercise",
    description:
      "Log physical activity and intensity. Understand whether exercise improves or worsens your symptoms — and at what level.",
    accent: "#D97706",
    bg: "#FFFBEB",
    examples: ["Activity type", "Duration", "Exertion level"],
  },
  {
    icon: "💊",
    title: "Medications & Supplements",
    description:
      "Record every medication, dosage, and timing alongside lifestyle logs to see what's working — and build an accurate picture for your GP.",
    accent: "#2563EB",
    bg: "#EFF6FF",
    examples: ["Medication taken", "Dosage changes", "Missed doses"],
  },
  {
    icon: "💧",
    title: "Hydration & Habits",
    description:
      "Track fluid intake, caffeine, alcohol, and other daily habits that silently influence how you feel. Small patterns, significant impact.",
    accent: "#0891B2",
    bg: "#F0FDFF",
    examples: ["Water intake", "Caffeine units", "Alcohol units"],
  },
];

const connections = [
  {
    from: "Poor sleep",
    to: "Fatigue severity",
    icon: "🛏️ → 😴",
    color: "#7C3AED",
  },
  {
    from: "Meal triggers",
    to: "Digestive symptoms",
    icon: "🥗 → 🤢",
    color: "#1D9E75",
  },
  {
    from: "Exercise intensity",
    to: "Joint pain",
    icon: "🏃 → 🦴",
    color: "#D97706",
  },
  {
    from: "Low mood days",
    to: "Energy & motivation",
    icon: "😟 → ⚡",
    color: "#DC2626",
  },
];

const benefits = [
  {
    icon: "🩺",
    heading: "Richer GP conversations",
    text: "Your GP can see your lifestyle alongside your symptoms — giving them context that transforms a 10-minute appointment into a genuinely productive one.",
  },
  {
    icon: "🔍",
    heading: "Identify your triggers",
    text: "Lifestyle tracking across weeks reveals the quiet causes of flare-ups that would be impossible to notice in the moment.",
  },
  {
    icon: "📈",
    heading: "See what's working",
    text: "When you change a habit, Jeevora Care shows you whether your symptoms improved — giving you real evidence instead of guesswork.",
  },
];

const LifestyleTracking = ({ data }) => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-9">
              <span
                style={{
                  display: "inline-block",
                  background: "#EFF6FF",
                  color: "#2563EB",
                  fontSize: "13px",
                  fontWeight: "700",
                  borderRadius: "20px",
                  padding: "4px 16px",
                  marginBottom: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Feature
              </span>
              <h1 className="font-primary font-bold mb-4">
                Lifestyle Tracking That Connects to Your Health
              </h1>
              <p className="mt-4 text-lg mx-auto max-w-2xl">
                Sleep, mood, food, and exercise aren't separate from your
                symptoms — they're part of your health story. Jeevora Care
                tracks them together so the full picture is always clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature details (below hero) ── */}
      <section className="section pt-0">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="font-bold mb-3">Features in Detail</h2>
            <p className="mx-auto max-w-xl">
              Explore every capability — tap any feature to see the full description.
            </p>
          </div>
          <FeaturePanel
            intro={LIFESTYLE_INTRO}
            items={LIFESTYLE_ITEMS}
            accent="#854F0B"
            bg="#FAEEDA"
            MockupComponents={[MockupLifestyle, MockupLifestyleSleep, MockupLifestyleNutrition, MockupLifestyleExercise]}
          />
        </div>
      </section>

      {/* ── Connections section ── */}
      <section className="section">
        <div className="container">
          <div className="row items-center gy-8">
            <div className="md:col-6">
              <h2 className="font-bold mb-4">
                Lifestyle and Symptoms — Connected
              </h2>
              <p className="mb-6">
                Jeevora Care doesn't just store your lifestyle data separately.
                It places it alongside your symptom timeline, so correlations
                become visible — automatically.
              </p>
              <p className="mb-8">
                When you log a symptom and a lifestyle event on the same day,
                Jeevora Care surfaces potential links over time — giving you
                evidence-based insight, not guesswork.
              </p>
              <ul className="space-y-4">
                {[
                  "Correlate lifestyle changes with symptom trends",
                  "See the impact of new habits on your wellbeing",
                  "Identify hidden triggers your GP never knew about",
                  "Build a timeline that connects the full picture",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      style={{
                        color: "#2563EB",
                        fontWeight: "700",
                        marginTop: "2px",
                      }}
                    >
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-6">
              <div
                className="rounded-xl p-6"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#64748B",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "16px",
                  }}
                >
                  Example correlations detected
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {connections.map((conn, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "#fff",
                        borderRadius: "12px",
                        padding: "14px 16px",
                        border: "1px solid #E2E8F0",
                      }}
                    >
                      <span style={{ fontSize: "18px" }}>{conn.icon}</span>
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: "13px", color: "#64748B" }}>
                          {conn.from}
                        </span>
                        <span style={{ fontSize: "13px", color: "#94A3B8", margin: "0 6px" }}>
                          correlates with
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: conn.color }}>
                          {conn.to}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wearables callout ── */}
      <section className="section pb-0">
        <div className="container">
          <div
            className="rounded-xl px-8 py-10"
            style={{ background: "#EFF6FF", border: "1px solid #DBEAFE" }}
          >
            <div className="row items-center gy-6">
              <div className="md:col-8">
                <h3 className="h5 font-bold mb-3" style={{ color: "#0F172A" }}>
                  ⌚ Coming soon: Wearable device integration
                </h3>
                <p>
                  Jeevora Care is designed to connect with major wearable
                  devices — so sleep, heart rate, and activity data can flow in
                  automatically. Manual logging remains always available.
                </p>
              </div>
              <div className="md:col-4 text-center md:text-right">
                <span
                  style={{
                    display: "inline-block",
                    background: "#2563EB",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: "700",
                    borderRadius: "20px",
                    padding: "8px 20px",
                  }}
                >
                  On the roadmap
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <Cta activeFeature="Lifestyle tracking" />
    </>
  );
};

export default LifestyleTracking;
