import React from 'react';

const BarPourcentage = ({ ratingYes, ratingNo }) => {
  const totalBars = 100;

  // Generate bars for "Yes"
  const yesBars = Array.from({ length: totalBars }, (_, index) => (
    <div
      key={`yes-bar-${index}`}
      style={{
        height: '8px',  // Reduced height to match example
        width: '2px',   // Thinner width for each bar
        backgroundColor: index < ratingYes ? '#fff' : '#444',  // Dark gray for unfilled bars
        display: 'inline-block',
        margin: '0 1px',  // Small space between bars
      }}
    />
  ));

  // Generate bars for "No"
  const noBars = Array.from({ length: totalBars }, (_, index) => (
    <div
      key={`no-bar-${index}`}
      style={{
        height: '8px',
        width: '2px',
        backgroundColor: index < ratingNo ? '#fff' : '#444',
        display: 'inline-block',
        margin: '0 1px',
      }}
    />
  ));

  return (
    <div style={{ backgroundColor: 'black', borderRadius: '10px', padding: '20px', display: 'inline-block' }}>
      <div style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '10px' }}>
        <span style={{ flexShrink: 0, marginRight: '10px', fontSize: '16px', fontWeight: 'bold' }}>Yes</span>
        <div style={{ display: 'flex', marginRight: '10px', width: '70%' }}>{yesBars}</div>
        <span style={{ flexShrink: 0, fontSize: '16px', fontWeight: 'bold' }}>{ratingYes}%</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <span style={{ flexShrink: 0, marginRight: '10px', fontSize: '16px', fontWeight: 'bold' }}>No</span>
        <div style={{ display: 'flex', marginRight: '10px', width: '70%' }}>{noBars}</div>
        <span style={{ flexShrink: 0, fontSize: '16px', fontWeight: 'bold' }}>{ratingNo}%</span>
      </div>
    </div>
  );
};

export default BarPourcentage;
