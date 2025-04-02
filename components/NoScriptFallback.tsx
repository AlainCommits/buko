export default function NoScriptFallback() {
  return (
    <noscript>
      <div style={{
        padding: '20px',
        margin: '40px auto',
        maxWidth: '600px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#1a1a1a'
      }}>
        <h2 style={{ 
          marginBottom: '20px',
          fontFamily: "'Anton', Impact, sans-serif" 
        }}>
          JavaScript Required
        </h2>
        <p>
          This website requires JavaScript to be enabled in your browser.
          Please enable JavaScript to view the full site.
        </p>
      </div>
    </noscript>
  );
}
