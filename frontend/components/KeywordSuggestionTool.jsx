import Link from 'next/link'

const KeywordSuggestionTool = () => {
  return (
    <div className="tool-card keyword-card">
      <span className="tool-icon">🔍</span>
      <h2 className="tool-title">Keyword Suggestion Tool</h2>
      <p className="tool-description">
        Discover high-value keywords and search terms to boost your content's search visibility.
      </p>
      <ul className="tool-features">
        <li>Long-tail keyword research</li>
        <li>Search volume analysis</li>
        <li>Competition difficulty scoring</li>
        <li>Related keyword suggestions</li>
        <li>Trending topic identification</li>
      </ul>
      <Link href="/tools/keywords" className="tool-button" style={{ display: 'block', marginTop: '1rem', textAlign: 'center' }}>
        Use Tool
      </Link>
    </div>
  )
}

export default KeywordSuggestionTool

