import { Helmet } from "react-helmet";

export default function SeoMeta({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
