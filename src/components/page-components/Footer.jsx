import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center px-6 py-4 border-t border-border">
      <span className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Manuel Aguirre
      </span>
      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://github.com/aguirreMan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/manuel-aguirre-05a030198/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground hover:text-[#0077B5] transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}
