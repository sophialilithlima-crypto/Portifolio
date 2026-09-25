export const profile = {
  name: "Sophia Lilith",
  role: "Desenvolvedora em formação",
  email: "sophialilithlima@gmail.com",
  github: "https://github.com/sophialilithlima-crypto",
  instagram: "https://instagram.com/Sophiaalilih",
  photo: "/images/sophia.jpg",
  year: "2026"
};

export type Tool = {
  name: string;
  logo?: string;
  color?: string;
  fallback?: string;
  invertDark?: boolean;
  iconSrc?: string;
};

export const skills: Record<string, {
  icon: string;
  accent: string;
  items: Tool[];
}> = {
  "Linguagens e fundamentos": {
    icon: "</>",
    accent: "skill-violet",
    items: [
      { name: "HTML5", logo: "html5", color: "E34F26" },
      { name: "CSS3", iconSrc: "/images/logo-css3.svg" },
      { name: "JavaScript", logo: "javascript", color: "F7DF1E" },
      { name: "Python", logo: "python", color: "3776AB" },
      { name: "Go", logo: "go", color: "00ADD8" },
      { name: "Algoritmos", fallback: "nodes", color: "7C3AED" }
    ]
  },
  "Frontend": {
    icon: "UI",
    accent: "skill-indigo",
    items: [
      { name: "React", logo: "react", color: "61DAFB" },
      { name: "Vite", logo: "vite", color: "646CFF" },
      { name: "React Router", logo: "reactrouter", color: "CA4245" },
      { name: "Axios", logo: "axios", color: "5A29E4" }
    ]
  },
  "Backend": {
    icon: "API",
    accent: "skill-cyan",
    items: [
      { name: "Go", logo: "go", color: "00ADD8" },
      { name: "Gin", logo: "gin", color: "008ECF", fallback: "go" },
      { name: "Node.js", logo: "nodedotjs", color: "5FA04E" }
    ]
  },
  "Bancos de dados": {
    icon: "DB",
    accent: "skill-emerald",
    items: [
      { name: "PostgreSQL", logo: "postgresql", color: "4169E1" },
      { name: "MySQL", logo: "mysql", color: "4479A1" }
    ]
  },
  "Ferramentas": {
    icon: "⌘",
    accent: "skill-amber",
    items: [
      { name: "Git", logo: "git", color: "F05032" },
      { name: "GitHub", logo: "github", color: "181717", invertDark: true },
      { name: "Docker", logo: "docker", color: "2496ED" },
      { name: "Docker Compose", logo: "docker", color: "2496ED" },
      { name: "npm", logo: "npm", color: "CB3837" }
    ]
  }
};

export const softSkills = [
  {
    title: "Uso de inteligência artificial",
    description: "Utilizo ferramentas de IA como apoio aos estudos e projetos, trabalhando com elaboração de prompts, programação assistida, pesquisa e exploração de ideias."
  },
  {
    title: "Aprendizado contínuo",
    description: "Busco aprender novas tecnologias e transformar estudo em prática por meio de projetos."
  },
  {
    title: "Resolução de problemas",
    description: "Desenvolvo o raciocínio lógico ao estudar algoritmos e construir aplicações."
  },
  {
    title: "Criatividade",
    description: "O desenho, a aquarela e meu interesse por jogos fazem parte da minha forma de criar e explorar ideias."
  },
  {
    title: "Disciplina",
    description: "O ballet e os estudos me ajudam a manter constância, prática e atenção ao processo."
  },
  {
    title: "Atenção aos detalhes",
    description: "Tenho interesse em melhorar tanto a parte funcional quanto a apresentação dos projetos."
  },
  {
    title: "Curiosidade",
    description: "Gosto de experimentar recursos novos e entender como diferentes tecnologias funcionam."
  }
];

export const projects = [
  {
    title: "Pokédex",
    description:
      "Aplicação interativa criada para explorar dados de Pokémon, com pesquisa, informações, evoluções, estatísticas e favoritos. O projeto foi uma das minhas primeiras experiências práticas com consumo de API e construção de uma interface web.",
    learning:
      "Foi um projeto importante para transformar conteúdos estudados em prática e ganhar experiência trabalhando com dados externos e interação com a interface.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PokéAPI"],
    github: "https://github.com/sophialilithlima-crypto/Pokedex"
  },
  {
    title: "Desafio React 3 — CRUD Full Stack",
    description:
      "Aplicação Full Stack para gerenciamento de categorias, fornecedores e produtos. O projeto reúne frontend em React, backend em Go com Gin, banco PostgreSQL e ambiente com Docker e Docker Compose.",
    learning:
      "Foi minha primeira experiência trabalhando com vários elementos de uma aplicação Full Stack no mesmo projeto. O principal aprendizado foi ganhar prática com frontend, backend, banco de dados, APIs e organização de uma aplicação completa.",
    technologies: ["React", "Vite", "Go", "Gin", "PostgreSQL", "Docker"],
    github: "https://github.com/sophialilithlima-crypto/desafio-react3"
  }
];

export const creative = {
  ballet: {
    title: "Ballet",
    summary:
      "Pratico ballet há 4 anos e atualmente estou no nível intermediário. Também já iniciei meu trabalho nas pontas, desenvolvendo disciplina, técnica, expressão e consciência corporal.",
    tags: ["4 anos", "Intermediário", "Iniciação nas pontas"],
    images: [
      { src: "/images/ballet-1.jpeg", alt: "Sophia praticando ballet em uma aula" },
      { src: "/images/ballet-2.jpeg", alt: "Sophia em uma atividade de ballet" },
      { src: "/images/ballet-3.jpeg", alt: "Sophia praticando ballet nas pontas" }
    ]
  },
  watercolor: {
    title: "Desenho e aquarela",
    summary:
      "Desenho e pinto com aquarela há 5 anos. É uma prática que desenvolve minha criatividade, observação, paciência e atenção aos detalhes.",
    tags: ["5 anos", "Desenho", "Aquarela"],
    images: [
      { src: "/images/drawing-1.png", alt: "Desenho a lápis de uma personagem com um gato" },
      { src: "/images/drawing-2.jpeg", alt: "Pintura em aquarela com tons de azul e rosa" },
      { src: "/images/drawing-3.jpeg", alt: "Ilustração digital de uma personagem" }
    ]
  }
};

export const bio =
  "Sou Sophia Lilith, estudante do ensino médio e desenvolvedora em formação. Comecei a estudar programação no início de 2026, motivada pelo contato e influência do meu pai com a área de tecnologia. Desde então, venho desenvolvendo meus primeiros projetos e explorando diferentes tecnologias, buscando transformar o aprendizado em experiências práticas. Meu interesse por tecnologia não se limita à programação: também tenho uma trajetória criativa no ballet, no desenho e na aquarela. Gosto de aprender áreas diferentes e de unir lógica, criatividade, disciplina e curiosidade no que faço.";
