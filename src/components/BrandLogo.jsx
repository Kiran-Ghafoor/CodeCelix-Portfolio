import { useState } from 'react';

export default function BrandLogo({ width = 60, height = 60 }) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      <img
        src="assets/codecelix_logo_removedbg.png"
        alt="CodeCelix"
        className="brand__logo"
        width={width}
        height={height}
        style={failed ? { display: 'none' } : undefined}
        onError={() => setFailed(true)}
      />
      <div className="brand__mark" style={{ display: failed ? 'flex' : 'none' }}>C</div>
    </>
  );
}
