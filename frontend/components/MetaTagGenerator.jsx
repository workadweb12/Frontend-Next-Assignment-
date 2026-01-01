import Link from 'next/link'

const MetaTagGenerator = () => {
  return (
    <div className="tool-card meta-tag-card">
      <span className="tool-icon">🏷️</span>
      <h2 className="tool-title">Meta Tag Generator</h2>
      <p className="tool-description">
        Generate comprehensive meta tags for your website to improve SEO performance and social media sharing.
      </p>
      <ul className="tool-features">
        <li>Title and description optimization</li>
        <li>Open Graph tags for social media</li>
        <li>Twitter Card integration</li>
        <li>Canonical URL generation</li>
        <li>Mobile-friendly viewport settings</li>
      </ul>
      <Link href="/tools/meta-tags" className="tool-button" style={{ display: 'block', marginTop: '1rem', textAlign: 'center' }}>
        Use Tool
      </Link>
    </div>
  )
}

export default MetaTagGenerator

