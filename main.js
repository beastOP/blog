import blog, { ga } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Omkar's Blog",
  author: "Omkar Patil",
  description: "Passionate self-taught developer continuously improving.",
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
