import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      // cria automaticamente o "slug" do post
      // usando o nome do arquivo markdown
      // ex: "meu-post.md" → slug = "meu-post"
      resolve: (doc) => doc._raw.sourceFileName.replace(".md", ""),
    },
  },
}));

export default makeSource({
  // pasta onde ficam os arquivos de conteúdo (.md). Nesse caso: /posts
  contentDirPath: "posts",

  // tipos de documentos que o Contentlayer vai gerar
  // aqui estamos dizendo que todo .md dessa pasta deve seguir o schema definido em "Post"
  documentTypes: [Post],
});
