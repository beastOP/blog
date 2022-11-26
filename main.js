import blog, { ga } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Omkar Patil",
  author: "Omkar Patil",
  avatar: "./op.jpeg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:omkarpatil290@gmail.com" },
    { title: "GitHub", url: "https://github.com/beastOP" },
  ],
  background: "#fff",
  middlewares: [ga("G-B3TRQLZPSX")],
});
