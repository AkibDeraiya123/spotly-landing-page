/**
 * Renders one or more JSON-LD graphs. Server component — no client JS shipped.
 */
export default function JsonLd({ schemas = [] }) {
  const list = Array.isArray(schemas) ? schemas : [schemas];

  return (
    <>
      {list.map((schema, index) => (
        <script
          key={schema['@id'] || `${schema['@type']}-${index}`}
          type="application/ld+json"
          // JSON.stringify output is escaped for safe inline embedding.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
}
