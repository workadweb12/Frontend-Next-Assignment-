import Link from 'next/link'

const SchemaMarkupGenerator = () => {
  return (
    <div className="tool-card schema-card">
      <span className="tool-icon">🏗️</span>
      <h2 className="tool-title">Schema Markup Generator</h2>
      <p className="tool-description">
        Generate structured data markup to help search engines understand your content better.
      </p>
      <ul className="tool-features">
        <li>Article and blog post schemas</li>
        <li>Local business markup</li>
        <li>Product and review schemas</li>
        <li>Event and organization markup</li>
        <li>Rich snippet optimization</li>
      </ul>
      <Link href="/tools/schema" className="tool-button" style={{ display: 'block', marginTop: '1rem', textAlign: 'center' }}>
        Use Tool
      </Link>
    </div>
  )
}

export default SchemaMarkupGenerator

