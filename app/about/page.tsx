import { Code, Bug, Zap, Terminal } from "lucide-react";

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
      <h1 className="text-4xl font-bold mb-8 text-foreground">About Me</h1>

      <div className="space-y-8 text-foreground/90 leading-relaxed mb-12">
        <p>
          I am an Offensive Security Engineer and Researcher based in <strong>Cairo, Egypt</strong>. My career is built on a foundation of continuous offensive research and a drive to outsmart modern security defenses.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Experience</h3>
          <div className="space-y-4">
            <p>
              I started as a Security Engineer at <a href="https://www.bugswagger.com/" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/80"><strong>BugSwagger</strong></a>, auditing web applications, APIs, and thick clients. This role grounded my ability to validate automated findings with manual rigor.
            </p>
            <p>
              Currently, I have spent over two years at <a href="https://deepstrike.io" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/80"><strong>DeepStrike</strong></a> leading offensive engagements across <strong>Web, Mobile, and Network</strong> infrastructure. I utilize a hybrid testing approach, working directly with <strong>development teams</strong> to reproduce exploits and implement robust remediation strategies.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Impact & Acknowledgments</h3>
          <div className="space-y-4">
            <p>
              Beyond my corporate role, I actively work as a <strong>Bug Hunter</strong> to validate my methodology in the wild. I have secured acknowledgments for responsibly disclosing critical vulnerabilities to organizations like <strong>Clearview AI</strong>, <strong>K Health</strong>, <strong>Merge</strong>, <strong>Groq</strong>, <strong>Preply</strong>, <strong>Insurify</strong>, and others.
            </p>
            <p>
              Additionally, my research has been formally recognized in the <strong>Security Hall of Fame</strong> for: <a href="https://www.ebi.ac.uk/security/hall-of-fame/" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/80"><strong>EMBL-EBI</strong></a>, <a href="https://www.crunch.co.uk/responsible-disclosure" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/80"><strong>Crunch</strong></a> and others.
            </p>
          </div>
        </section>
      </div>

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

