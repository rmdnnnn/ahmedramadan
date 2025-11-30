import { Shield, Code, Bug, Lock, Zap, Terminal } from "lucide-react";

const certifications = [
  {
    name: "OSCP",
    issuer: "Offensive Security",
    date: "2024",
    icon: Shield,
  },
  {
    name: "CISSP",
    issuer: "ISC²",
    date: "2023",
    icon: Lock,
  },
  // Add more certifications as needed
];

const arsenal = [
  { name: "Burp Suite", category: "Web Testing", icon: Bug },
  { name: "Python", category: "Scripting", icon: Code },
  { name: "Metasploit", category: "Exploitation", icon: Terminal },
  { name: "Nmap", category: "Reconnaissance", icon: Zap },
  // Add more tools as needed
];

export default function About() {
  return (
    <div className="max-w-[640px] mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-foreground">About</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Story</h2>
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            I am a cybersecurity engineer passionate about offensive security
            and vulnerability research. My journey in cybersecurity began with
            a curiosity about how systems can be compromised and how to defend
            against attacks.
          </p>
          <p>
            Over the years, I&apos;ve focused on penetration testing, exploit
            development, and security research. I enjoy participating in CTF
            competitions, conducting security assessments, and sharing knowledge
            through writeups and research articles.
          </p>
          <p>
            This portfolio serves as a collection of my work, research findings,
            and insights into the ever-evolving field of cybersecurity.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          Certifications
        </h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border border-[#262626] rounded-lg hover:border-muted transition-colors"
              >
                <Icon className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                  <p className="text-sm text-muted">{cert.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Arsenal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {arsenal.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="p-4 border border-[#262626] rounded-lg hover:border-muted transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-5 h-5 text-foreground" />
                  <h3 className="font-semibold text-foreground">
                    {tool.name}
                  </h3>
                </div>
                <p className="text-sm text-muted">{tool.category}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

