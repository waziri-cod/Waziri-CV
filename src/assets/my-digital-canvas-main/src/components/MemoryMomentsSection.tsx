import { motion, useInView } from "framer-motion";
import { useRef, useState, ChangeEvent, useEffect } from "react";
import { CalendarDays, Film, ImagePlus } from "lucide-react";

interface MemoryMoment {
  title: string;
  description: string;
  photoFile: File | null;
  photoPreview: string | null;
  videoFile: File | null;
  videoPreview: string | null;
}

const initialMemories: MemoryMoment[] = [
  {
    title: "First Moment",
    description: "A memorable milestone or event from your early journey.",
    photoFile: null,
    photoPreview: null,
    videoFile: null,
    videoPreview: null,
  },
  {
    title: "Second Moment",
    description: "A meaningful experience that shaped your current direction.",
    photoFile: null,
    photoPreview: null,
    videoFile: null,
    videoPreview: null,
  },
  {
    title: "Third Moment",
    description: "A recent highlight or event that showcases your growth.",
    photoFile: null,
    photoPreview: null,
    videoFile: null,
    videoPreview: null,
  },
];

const MemoryMomentsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [memories, setMemories] = useState<MemoryMoment[]>(initialMemories);

  useEffect(() => {
    return () => {
      memories.forEach((memory) => {
        if (memory.photoPreview) {
          URL.revokeObjectURL(memory.photoPreview);
        }
        if (memory.videoPreview) {
          URL.revokeObjectURL(memory.videoPreview);
        }
      });
    };
  }, [memories]);

  const updateFile = (
    index: number,
    file: File | null,
    type: "photo" | "video"
  ) => {
    setMemories((current) =>
      current.map((memory, i) => {
        if (i !== index) return memory;

        const next: MemoryMoment = { ...memory };

        if (type === "photo") {
          if (memory.photoPreview) {
            URL.revokeObjectURL(memory.photoPreview);
          }
          next.photoFile = file;
          next.photoPreview = file ? URL.createObjectURL(file) : null;
        }

        if (type === "video") {
          if (memory.videoPreview) {
            URL.revokeObjectURL(memory.videoPreview);
          }
          next.videoFile = file;
          next.videoPreview = file ? URL.createObjectURL(file) : null;
        }

        return next;
      })
    );
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: "photo" | "video"
  ) => {
    const file = event.target.files?.[0] ?? null;
    updateFile(selectedIndex, file, type);
  };

  const currentMemory = memories[selectedIndex];

  return (
    <section id="memories" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">
            Memory Moments
          </p>
          <h2 className="section-title">Experience, Events & Highlights</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            Share three landmark memories with a dedicated photo and video for each moment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-6 lg:grid-cols-[280px_1fr]"
        >
          <aside className="space-y-3">
            {memories.map((memory, index) => (
              <button
                key={memory.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`w-full rounded-3xl border px-4 py-4 text-left transition-all hover:border-accent/70 hover:bg-accent/5 ${
                  selectedIndex === index
                    ? "border-accent bg-accent/10 shadow-lg"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <CalendarDays size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{memory.title}</p>
                    <p className="text-sm text-muted-foreground">{memory.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </aside>

          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block rounded-3xl border border-border p-5 bg-card">
                <span className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                  <ImagePlus size={18} /> Upload Photo
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleFileChange(event, "photo")}
                  className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-accent-foreground"
                />
                <div className="mt-4 rounded-3xl border border-border bg-background overflow-hidden">
                  {currentMemory.photoPreview ? (
                    <img
                      src={currentMemory.photoPreview}
                      alt={`${currentMemory.title} photo preview`}
                      className="h-56 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-56 items-center justify-center text-muted-foreground">
                      No photo selected yet.
                    </div>
                  )}
                </div>
              </label>

              <label className="block rounded-3xl border border-border p-5 bg-card">
                <span className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                  <Film size={18} /> Upload Video
                </span>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(event) => handleFileChange(event, "video")}
                  className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-accent-foreground"
                />
                <div className="mt-4 rounded-3xl border border-border bg-background overflow-hidden">
                  {currentMemory.videoPreview ? (
                    <video
                      controls
                      src={currentMemory.videoPreview}
                      className="h-56 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-56 items-center justify-center text-muted-foreground">
                      No video selected yet.
                    </div>
                  )}
                </div>
              </label>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-2xl font-bold text-primary mb-3">{currentMemory.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {currentMemory.description}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border p-4 bg-background">
                  <p className="text-sm font-semibold text-primary mb-2">Photo</p>
                  <p className="text-sm text-muted-foreground">
                    {currentMemory.photoFile?.name ?? "No photo chosen"}
                  </p>
                </div>
                <div className="rounded-3xl border border-border p-4 bg-background">
                  <p className="text-sm font-semibold text-primary mb-2">Video</p>
                  <p className="text-sm text-muted-foreground">
                    {currentMemory.videoFile?.name ?? "No video chosen"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MemoryMomentsSection;
