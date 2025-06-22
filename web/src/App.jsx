import React, { useState, useEffect, useRef } from 'react';

// Data for the content in both French and English
// REMOVED: blogPosts are now fetched dynamically
const content = {
  fr: {
    name: "Antoine Delia",
    tagline: "Expert AWS & DevOps Freelance",
    heroTitle: "Bonjour, je suis Antoine, votre architecte Cloud & DevOps.",
    heroDescription: "Je transforme des infrastructures complexes en systèmes robustes, évolutifs et automatisés. Mon objectif : vous aider à livrer de la valeur plus rapidement et avec plus de sérénité.",
    heroImageUrl: "https://placehold.co/400x400/1a202c/9f7aea?text=Antoine+D.",
    servicesTitle: "Mes Services",
    services: [
      { title: "Migration vers AWS", description: "Vous vous demandez comment aborder votre migration vers AWS ? Je vous guide à chaque étape." },
      { title: "Optimisation d'Architecture Cloud", description: "Vous sentez que votre architecture cloud actuelle pourrait être améliorée ? Analysons et optimisons-la ensemble." },
      { title: "Automatisation et Déploiement (DevOps)", description: "Vous souhaitez fluidifier vos déploiements avec des outils DevOps ? Mettons en place les meilleures pratiques." }
    ],
    processTitle: "Déroulement d'une Mission",
    processSteps: [
      { title: "Appel Découverte", description: "Nous commençons par un échange de 30 minutes, sans engagement, pour discuter de vos objectifs, de vos défis actuels et déterminer si mes compétences correspondent à vos besoins." },
      { title: "Audit et Analyse", description: "Je plonge dans votre environnement technique. J'analyse votre infrastructure, vos outils et vos processus de déploiement pour identifier les forces, les faiblesses et les opportunités d'amélioration." },
      { title: "Proposition sur Mesure", description: "Suite à l'audit, je vous présente une proposition claire et détaillée. Elle inclut un plan d'action concret, un calendrier prévisionnel et un devis transparent, sans surprises." },
      { title: "Réalisation de la Mission", description: "Je mets en œuvre les solutions validées, en travaillant en étroite collaboration et en communication constante avec vos équipes pour garantir une intégration parfaite et une perturbation minimale." },
      { title: "Transfert de Connaissances", description: "Ma mission se termine lorsque vos équipes sont pleinement autonomes. Je fournis la documentation nécessaire et des sessions de formation pour assurer une transition en douceur et durable." }
    ],
    testimonialsTitle: "Ce qu'ils disent de moi",
    testimonials: [
      { name: "Client Satisfait", quote: "Un témoignage d'un client satisfait apparaîtra bientôt ici. Votre projet pourrait être le prochain !." },
    ],
    aboutTitle: "À Propos de Moi",
    aboutText: [
      "Passionné par la culture DevOps et le Cloud, j'aide mes clients à stabiliser et optimiser leur infrastructure en implémentant les meilleures pratiques de l'industrie.",
      "Mes points forts : mon adaptabilité, ma capacité à résoudre des problèmes complexes et mon approche pédagogique pour former vos équipes.",
      "Avec une expérience variée (de la startup à la multinationale), j'accompagne spécifiquement les startups et PME à structurer leur infrastructure cloud et à adopter les pratiques DevOps adaptées à leur contexte.",
    ],
    skillsTitle: "Compétences Techniques Principales",
    skills: ["AWS (Amazon Web Services)", "Python, Bash", "Infrastructure as Code (Terraform, Serverless)", "Conteneurisation (Kubernetes, Docker)", "CI/CD (GitHub Actions, Jenkins)"],
    blogTitle: "Mes Derniers Articles",
    blogLoading: "Chargement des articles...",
    blogError: "Impossible de charger les articles.",
    contactTitle: "Parlons de votre projet",
    contactDescription: "Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.",
    formName: "Votre nom",
    formEmail: "Votre email",
    formMessage: "Votre message",
    formSubmit: "Envoyer le Message",
    formSuccess: "Merci ! Votre message a bien été envoyé. Je reviens vers vous rapidement.",
    languageToggle: "Switch to English",
    socials: {
      github: "https://github.com/antoinedelia",
      linkedin: "https://www.linkedin.com/in/antoinedelia/",
      stackoverflow: "https://stackoverflow.com/users/4141606/antoine-delia"
    }
  },
  en: {
    name: "Antoine Delia",
    tagline: "Freelance AWS & DevOps Expert",
    heroTitle: "Hi, I'm Antoine, your Cloud & DevOps Architect.",
    heroDescription: "I transform complex infrastructures into robust, scalable, and automated systems. My goal: to help you deliver value faster and with greater peace of mind.",
    heroImageUrl: "https://placehold.co/400x400/1a202c/9f7aea?text=Antoine+D.",
    servicesTitle: "My Services",
    services: [
      { title: "AWS Migration", description: "Wondering how to approach your migration to AWS? I'll guide you every step of the way." },
      { title: "Cloud Architecture Optimization", description: "Feel your current cloud architecture could be improved? Let's analyze and optimize it together." },
      { title: "Automation & Deployment (DevOps)", description: "Want to streamline your deployments with DevOps tools? Let's implement industry best practices." }
    ],
    processTitle: "How a Mission Unfolds",
    processSteps: [
      { title: "Discovery Call", description: "We start with a no-commitment 30-minute call to discuss your goals, current challenges, and determine if my skills are the right fit for your needs." },
      { title: "Audit & Analysis", description: "I dive into your technical environment. I analyze your infrastructure, tools, and deployment processes to identify strengths, weaknesses, and opportunities for improvement." },
      { title: "Tailored Proposal", description: "Following the audit, I present you with a clear and detailed proposal. It includes a concrete action plan, a projected timeline, and a transparent quote with no surprises." },
      { title: "Mission Execution", description: "I implement the approved solutions, working in close collaboration and constant communication with your teams to ensure seamless integration and minimal disruption." },
      { title: "Knowledge Transfer", description: "My mission concludes when your teams are fully autonomous. I provide the necessary documentation and training sessions to ensure a smooth and sustainable transition." }
    ],
    testimonialsTitle: "What They Say About Me",
    testimonials: [
      { name: "Happy Client", quote: "A testimonial from a happy client will appear here soon. Your project could be next!" },
    ],
    aboutTitle: "About Me",
    aboutText: [
      "Passionate about DevOps culture and the Cloud, I help my clients stabilize and optimize their infrastructure by implementing industry best practices.",
      "My strengths: adaptability, problem-solving skills to overcome complex technical challenges, and a pedagogical approach to effectively train your teams.",
      "With diverse experience (from startups to multinationals), I specifically support startups and SMEs in structuring their cloud infrastructure and adopting DevOps practices adapted to their context.",
    ],
    skillsTitle: "Main Technical Skills",
    skills: ["AWS (Amazon Web Services)", "Python, Bash", "Infrastructure as Code (Terraform, Serverless)", "Containerization (Kubernetes, Docker)", "CI/CD (GitHub Actions, Jenkins)"],
    blogTitle: "My Latest Articles",
    blogLoading: "Loading articles...",
    blogError: "Could not load blog posts.",
    contactTitle: "Let's Talk About Your Project",
    contactDescription: "Fill out the form below, and I'll get back to you as soon as possible.",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formSubmit: "Send Message",
    formSuccess: "Thank you! Your message has been sent. I'll be in touch shortly.",
    languageToggle: "Passer en Français",
    socials: {
      github: "https://github.com/antoinedelia",
      linkedin: "https://www.linkedin.com/in/antoinedelia/",
      stackoverflow: "https://stackoverflow.com/users/4141606/antoine-delia"
    }
  }
};

// Custom hook to detect when an element is visible in the viewport
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isOnScreen, setIsOnScreen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsOnScreen(true);
        if (ref.current) { observer.unobserve(ref.current); }
      }
    }, options);
    const currentRef = ref.current;
    if (currentRef) { observer.observe(currentRef); }
    return () => { if (currentRef) { observer.unobserve(currentRef); } };
  }, [ref, options]);
  return [ref, isOnScreen];
};


// SVG Icon Components
const AwsIcon = () => (<svg width="48px" height="48px" viewBox="0 -0.375 1.875 1.875" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.534 0.784c0.066 -0.008 0.212 -0.025 0.237 0.008 0.026 0.033 -0.029 0.171 -0.054 0.232 -0.007 0.019 0.009 0.026 0.025 0.012 0.109 -0.091 0.137 -0.283 0.115 -0.31 -0.022 -0.027 -0.213 -0.051 -0.329 0.031 -0.018 0.013 -0.015 0.03 0.005 0.028" fill="#F90" />
  <path d="M0.936 1.118c0.254 0 0.548 -0.08 0.751 -0.23 0.033 -0.025 0.004 -0.062 -0.03 -0.047 -0.228 0.096 -0.475 0.143 -0.7 0.143 -0.334 0 -0.656 -0.092 -0.918 -0.244 -0.023 -0.014 -0.04 0.01 -0.021 0.027 0.242 0.219 0.562 0.35 0.917 0.35" fill="#F90" />
  <path d="M0.533 0.41c0 0.023 0.002 0.041 0.007 0.055a0.331 0.331 0 0 0 0.02 0.045c0.003 0.005 0.004 0.01 0.004 0.014 0 0.006 -0.004 0.012 -0.012 0.019l-0.039 0.026c-0.006 0.004 -0.011 0.006 -0.016 0.006 -0.006 0 -0.012 -0.003 -0.018 -0.009a0.191 0.191 0 0 1 -0.022 -0.029 0.475 0.475 0 0 1 -0.019 -0.036q-0.072 0.085 -0.181 0.085c-0.052 0 -0.093 -0.015 -0.123 -0.045s-0.046 -0.069 -0.046 -0.119c0 -0.053 0.018 -0.095 0.056 -0.127 0.038 -0.032 0.088 -0.048 0.151 -0.048 0.021 0 0.043 0.002 0.065 0.005 0.023 0.003 0.046 0.008 0.071 0.014v-0.045c0 -0.047 -0.01 -0.08 -0.029 -0.099 -0.02 -0.019 -0.053 -0.028 -0.101 -0.028 -0.022 0 -0.044 0.002 -0.067 0.008a0.488 0.488 0 0 0 -0.067 0.021 0.175 0.175 0 0 1 -0.022 0.008c-0.004 0.001 -0.007 0.002 -0.01 0.002 -0.009 0 -0.013 -0.006 -0.013 -0.019V0.082c0 -0.01 0.001 -0.017 0.004 -0.022 0.003 -0.004 0.009 -0.009 0.017 -0.013q0.032 -0.017 0.078 -0.028C0.253 0.012 0.285 0.008 0.319 0.008c0.073 0 0.127 0.017 0.162 0.05 0.034 0.033 0.051 0.084 0.051 0.152v0.2zm-0.25 0.094c0.02 0 0.041 -0.004 0.064 -0.011 0.022 -0.007 0.042 -0.021 0.059 -0.04 0.01 -0.012 0.017 -0.025 0.021 -0.04s0.006 -0.033 0.006 -0.054v-0.026a0.513 0.513 0 0 0 -0.057 -0.011 0.463 0.463 0 0 0 -0.058 -0.004c-0.041 0 -0.072 0.008 -0.092 0.025 -0.02 0.017 -0.03 0.04 -0.03 0.071 0 0.029 0.007 0.051 0.023 0.066 0.015 0.015 0.036 0.023 0.065 0.023zm0.495 0.067c-0.011 0 -0.018 -0.002 -0.023 -0.006 -0.005 -0.004 -0.009 -0.012 -0.013 -0.024L0.596 0.063c-0.004 -0.012 -0.006 -0.02 -0.006 -0.025 0 -0.01 0.005 -0.015 0.015 -0.015h0.06c0.012 0 0.02 0.002 0.024 0.006 0.005 0.004 0.009 0.012 0.012 0.024l0.104 0.409 0.096 -0.409c0.003 -0.012 0.007 -0.02 0.012 -0.024s0.014 -0.006 0.025 -0.006h0.049c0.012 0 0.02 0.002 0.025 0.006 0.005 0.004 0.009 0.012 0.012 0.024l0.097 0.414L1.229 0.053c0.004 -0.012 0.008 -0.02 0.012 -0.024 0.005 -0.004 0.013 -0.006 0.024 -0.006h0.057c0.01 0 0.015 0.005 0.015 0.015 0 0.003 -0.001 0.006 -0.001 0.01a0.088 0.088 0 0 1 -0.004 0.015L1.184 0.541q-0.006 0.019 -0.013 0.024c-0.005 0.004 -0.013 0.006 -0.023 0.006h-0.053c-0.012 0 -0.02 -0.002 -0.025 -0.006s-0.009 -0.012 -0.012 -0.025l-0.096 -0.399 -0.095 0.398c-0.003 0.012 -0.007 0.02 -0.012 0.025s-0.014 0.006 -0.025 0.006H0.778zm0.793 0.017c-0.032 0 -0.064 -0.004 -0.095 -0.011 -0.031 -0.007 -0.055 -0.015 -0.071 -0.025 -0.01 -0.006 -0.017 -0.012 -0.019 -0.017a0.044 0.044 0 0 1 -0.004 -0.017v-0.032c0 -0.013 0.005 -0.019 0.014 -0.019q0.006 0 0.011 0.002c0.004 0.001 0.009 0.004 0.015 0.006a0.335 0.335 0 0 0 0.068 0.022c0.025 0.005 0.049 0.007 0.073 0.007 0.039 0 0.069 -0.007 0.09 -0.02 0.021 -0.014 0.032 -0.033 0.032 -0.059 0 -0.017 -0.006 -0.032 -0.017 -0.043s-0.032 -0.022 -0.062 -0.032l-0.089 -0.028c-0.045 -0.014 -0.078 -0.035 -0.099 -0.063 -0.02 -0.027 -0.031 -0.057 -0.031 -0.09q0 -0.039 0.017 -0.069c0.011 -0.02 0.026 -0.037 0.044 -0.051 0.018 -0.014 0.039 -0.025 0.064 -0.032s0.051 -0.011 0.078 -0.011c0.014 0 0.028 0.001 0.041 0.002 0.014 0.002 0.027 0.004 0.04 0.007 0.012 0.003 0.024 0.006 0.035 0.01q0.017 0.006 0.026 0.011c0.009 0.005 0.015 0.01 0.019 0.015q0.006 0.007 0.006 0.02V0.102c0 0.013 -0.005 0.02 -0.014 0.02 -0.005 0 -0.013 -0.002 -0.023 -0.007q-0.053 -0.024 -0.118 -0.024c-0.035 0 -0.063 0.006 -0.082 0.017 -0.019 0.012 -0.029 0.03 -0.029 0.055 0 0.017 0.006 0.032 0.018 0.044s0.035 0.024 0.068 0.034l0.088 0.028c0.044 0.014 0.076 0.034 0.096 0.059s0.028 0.054 0.028 0.087c0 0.027 -0.006 0.051 -0.016 0.072 -0.011 0.021 -0.026 0.04 -0.045 0.054 -0.019 0.015 -0.042 0.027 -0.068 0.035 -0.028 0.009 -0.057 0.013 -0.088 0.013z" fill="#FFFFFF" />
</svg>);
const OptimizationIcon = () => (<svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995s.145.755.438.995l1.003.827c.48.398.668 1.03.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.075.124a6.57 6.57 0 01-.22.127c-.332.183-.582.495-.645.87l-.213 1.281c-.09.543-.56.94-1.11.94h-2.593c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.437-.995s-.145-.755-.437-.995l-1.004-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.075-.124.073-.044.146-.087.22-.127.332-.183.582-.495.645-.87l.213-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
const DevOpsIcon = () => (<svg className="w-10 h-10 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" strokeWidth={1.5} stroke="currentColor">
  <title>ci_cd_line</title>
  <g id="a9b55181-08cd-4e23-b315-7b35ac037aca" data-name="Layer 3">
    <path d="M23.53,19.81a7.45,7.45,0,0,1-1.65-.18,10.48,10.48,0,0,1,.72,2.13c.3,0,.61,0,.93,0a9.52,9.52,0,0,0,3-.49l-.93-1.81A7.67,7.67,0,0,1,23.53,19.81Z" />
    <path d="M18.36,17.87,18,17.49a7.4,7.4,0,0,1-2.2-5.92,7.31,7.31,0,0,1,1.54-4L17.26,9A1,1,0,0,0,18.17,10h.09a1,1,0,0,0,1-.91L19.6,5a1,1,0,0,0-.29-.79A1,1,0,0,0,18.52,4l-4.09.35a1,1,0,0,0,.17,2l1.29-.11a9.45,9.45,0,0,0-2.05,5.32,9.28,9.28,0,0,0,2.67,7.26l.31.37a7.33,7.33,0,0,1,2.06,4.91,7.39,7.39,0,0,1-.26,2.47l1.8.91a8.76,8.76,0,0,0,.45-3.51A9.28,9.28,0,0,0,18.36,17.87Z" />
    <path d="M32.4,17.91,31.19,18A9.65,9.65,0,0,0,23.53,2.45a9.33,9.33,0,0,0-3,.49l.91,1.8a7.67,7.67,0,0,1,9.76,7.39,7.58,7.58,0,0,1-1.65,4.72l.1-1.54a1,1,0,1,0-2-.13l-.28,4.08a1,1,0,0,0,.31.78.94.94,0,0,0,.69.28h.1l4.08-.42a1,1,0,0,0,.9-1.1A1,1,0,0,0,32.4,17.91Z" />
    <path d="M4.07,20.44h.08l4.09-.35a1,1,0,1,0-.17-2l-1.39.12a7.63,7.63,0,0,1,4.52-1.49,7.9,7.9,0,0,1,1.63.18,10.23,10.23,0,0,1-.71-2.13c-.3,0-.61,0-.92,0a9.66,9.66,0,0,0-5.9,2l.12-1.31a1,1,0,0,0-.92-1.08,1,1,0,0,0-1.08.91l-.35,4.08a1,1,0,0,0,1,1.08Z" />
    <path d="M18.42,28.23l-4.09.27a1,1,0,0,0,.13,2L16,30.39a7.71,7.71,0,0,1-12.54-6,7.6,7.6,0,0,1,.29-2L2,21.46a9.59,9.59,0,0,0-.47,2.95A9.7,9.7,0,0,0,17.19,32l-.12,1.18a1,1,0,0,0,.89,1.1h.11a1,1,0,0,0,1-.9l.42-4.06a1,1,0,0,0-1.06-1.1Z" />
  </g>
</svg>
);
const GithubIcon = () => (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>);
const LinkedInIcon = () => (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>);
const StackOverflowIcon = () => (<svg className="w-6 h-6" viewBox="-0.06 0 0.72 0.72" fill="currentColor"><path d="M0.514 0.656H0.064v-0.193H0V0.72h0.578v-0.257H0.514zM0.135 0.445l0.013 -0.063 0.315 0.066 -0.013 0.063zM0.176 0.295l0.027 -0.059 0.291 0.136 -0.027 0.058zm0.081 -0.143 0.041 -0.049 0.247 0.206 -0.041 0.049zM0.417 0l0.192 0.258 -0.051 0.039 -0.192 -0.258zM0.128 0.591v-0.064h0.321v0.064z" /></svg>
);
const QuoteIcon = () => (<svg className="w-12 h-12 text-blue-700 mb-4" viewBox="0 0 448 512" fill="currentColor"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h128c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h128c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z" /></svg>);

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <div className="flex items-center mb-4">{icon}<h3 className="text-xl font-bold text-white ml-4">{title}</h3></div>
    <p className="text-gray-400">{description}</p>
  </div>
);

const AnimatedProcessStep = ({ number, title, description, isLast }) => {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.6 });
  return (
    <div ref={ref} className={`relative pl-24 pb-20 transition-all duration-700 ease-out ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {!isLast && <div className="absolute left-8 top-16 h-full w-0.5 bg-gray-700"></div>}
      <div className="absolute left-0 top-0 flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full text-2xl font-bold text-white shadow-lg z-10 ring-8 ring-gray-900">
        {number}
      </div>
      <div>
        <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
        <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const BlogCard = ({ title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700/50 transition-colors duration-300 transform hover:-translate-y-2">
    <h3 className="text-xl font-bold text-blue-400 mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </a>
);

const TestimonialCard = ({ name, quote }) => (
  <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
    <QuoteIcon />
    <p className="text-gray-300 text-lg italic mb-6">"{quote}"</p>
    <p className="text-right font-bold text-blue-400">- {name}</p>
  </div>
);

const ContactForm = ({ t }) => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = formRef.current;
    const formData = new FormData(form);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw5WueF5UlX5BBodMHj3KSWSloIoZYHyVQOKM1_ss8wGixKz1cUTfNBlOH_YEXzJRpOjQ/exec';

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        console.log('Success!', response);
        setStatus('success');
        form.reset();
      })
      .catch(error => {
        console.error('Error!', error.message);
        setStatus('error');
      });
  };

  if (status === 'success') {
    return (
      <div className="text-center p-8 bg-green-900/50 border border-green-700 rounded-lg">
        <h3 className="text-2xl font-bold text-white">{t.formSuccess}</h3>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="text-center p-8 bg-red-900/50 border border-red-700 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-2">{t.formError}</h3>
        <button onClick={() => setStatus('idle')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t.formName}</label>
        <input type="text" name="name" id="name" required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" disabled={status === 'sending'} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t.formEmail}</label>
        <input type="email" name="email" id="email" required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" disabled={status === 'sending'} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{t.formMessage}</label>
        <textarea name="message" id="message" rows="4" required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" disabled={status === 'sending'}></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg text-lg transition-all transform hover:scale-105 duration-300" disabled={status === 'sending'}>
        {status === 'sending' ? t.formSending : t.formSubmit}
      </button>
    </form>
  );
};


export default function App() {
  const [language, setLanguage] = useState('fr');
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [blogError, setBlogError] = useState('');

  const toggleLanguage = () => { setLanguage(lang => lang === 'fr' ? 'en' : 'fr'); };
  const t = content[language];

  // Effect to fetch blog posts from RSS feed
  useEffect(() => {
    const fetchRssFeed = async () => {
      setBlogLoading(true);
      setBlogError('');
      setBlogPosts([]);

      const rssUrl = language === 'fr'
        ? 'https://cloud.antoinedelia.fr/fr/index.xml'
        : 'https://cloud.antoinedelia.fr/en/index.xml';

      // UPDATED: Using a different CORS proxy to bypass browser restrictions
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`;

      try {
        const response = await fetch(proxyUrl);
        if (!response.ok) { throw new Error(`Network response was not ok: ${response.statusText}`); }

        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");
        const parseError = xmlDoc.querySelector("parsererror");
        if (parseError) { throw new Error("Failed to parse XML"); }

        const items = Array.from(xmlDoc.querySelectorAll("item")).slice(0, 3); // Get first 3 items
        const posts = items.map(item => {
          const title = item.querySelector("title")?.textContent || '';
          const link = item.querySelector("link")?.textContent || '#';
          const descriptionHtml = item.querySelector("description")?.textContent || '';

          // Parse the description HTML and extract the first paragraph text
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = descriptionHtml;
          const description = tempDiv.querySelector("p")?.textContent || "Lire la suite...";

          return { title, link, description };
        });

        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching or parsing RSS feed:", error);
        setBlogError(t.blogError);
      } finally {
        setBlogLoading(false);
      }
    };

    fetchRssFeed();
  }, [language, t.blogError]);


  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
      <header className="container mx-auto px-6 py-8 flex justify-between items-center sticky top-0 bg-gray-900 z-50 shadow-lg shadow-gray-900/50">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">{t.name}</h1>
          <p className="text-blue-400 text-lg md:text-xl">{t.tagline}</p>
        </div>
        <button onClick={toggleLanguage} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">{t.languageToggle}</button>
      </header>

      <main className="container mx-auto px-6">
        <section id="hero" className="py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">{t.heroTitle}</h2>
              <p className="text-xl text-gray-300">{t.heroDescription}</p>
            </div>
            <div className="flex justify-center">
              <img src={t.heroImageUrl} alt="Antoine Delia" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl ring-4 ring-blue-500/50" />
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.servicesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard icon={<AwsIcon />} title={t.services[0].title} description={t.services[0].description} />
            <ServiceCard icon={<OptimizationIcon />} title={t.services[1].title} description={t.services[1].description} />
            <ServiceCard icon={<DevOpsIcon />} title={t.services[2].title} description={t.services[2].description} />
          </div>
        </section>

        <section id="process" className="py-16">
          <div className="max-w-3xl mx-auto"><h2 className="text-3xl font-bold text-center mb-16 text-white">{t.processTitle}</h2>
            <div className="relative">{t.processSteps.map((step, index) => (<AnimatedProcessStep key={index} number={index + 1} title={step.title} description={step.description} isLast={index === t.processSteps.length - 1} />))}</div>
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">{t.testimonialsTitle}</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {t.testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">{t.aboutTitle}</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-300">{t.aboutText.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
          <div className="max-w-3xl mx-auto mt-10">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">{t.skillsTitle}</h3>
            <div className="flex flex-wrap justify-center gap-3">{t.skills.map(skill => (<span key={skill} className="bg-gray-700 text-blue-300 text-sm font-medium px-4 py-2 rounded-full">{skill}</span>))}</div>
          </div>
        </section>

        {/* --- DYNAMIC Blog Section --- */}
        <section id="blog" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.blogTitle}</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 min-h-[200px]">
            {blogLoading && <p className="text-center col-span-3 text-gray-400">{t.blogLoading}</p>}
            {blogError && <p className="text-center col-span-3 text-red-400">{blogError}</p>}
            {!blogLoading && !blogError && blogPosts.map((post, index) => <BlogCard key={index} {...post} />)}
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.contactTitle}</h2>
            <p className="text-gray-400 mb-8">{t.contactDescription}</p>
            <ContactForm t={t} />
          </div>
        </section>

      </main>

      <footer className="text-center py-8 border-t border-gray-800">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={t.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><GithubIcon /></a>
          <a href={t.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon /></a>
          <a href={t.socials.stackoverflow} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><StackOverflowIcon /></a>
        </div>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} {t.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
