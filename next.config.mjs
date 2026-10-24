/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportação estática: `npm run build` gera a pasta /out, pronta para qualquer hospedagem.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};
export default nextConfig;
