/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_RAPID_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}