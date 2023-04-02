import blog, { ga } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Omkar Patil",
  author: "Omkar Patil",
  description:
    "I am a self-taught developer with a strong passion for coding. Through personal projects and self-study, I have gained a deep understanding of programming languages, frameworks, and development tools. I am always striving to improve my skills and stay up to date with the latest technologies.",
  avatar: "./op.jpeg",
  avatarClass: "rounded-full",
  lang: "en",
  dateStyle: "long",
  links: [
    { title: "Email", url: "mailto:omkarpatil290@gmail.com" },
    { title: "GitHub", url: "https://github.com/beastOP" },
  ],
  background: "#fff",
  middlewares: [ga("UA-250211944-1")],
  favicon: "./op.jpeg",
});
