import React from 'react';

export function Footer() {
  // 現在地の時間で年を取得
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
}
