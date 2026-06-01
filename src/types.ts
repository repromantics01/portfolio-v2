export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  image?: string;
  // Ordered screenshots shown in the dialog gallery.
  // Convention: public/projects/<slug>/01.png, 02.png, …
  screenshots?: string[];
  liveUrl?: string;
  codeUrl?: string;
};
