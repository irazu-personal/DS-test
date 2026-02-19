import React from 'react';

const EXAMPLE_TEXT = 'שפן אכל קצת גזר בטעם חסה, ודי.';

const tableLabelStyle = {
  fontFamily: 'system-ui, sans-serif',
  fontWeight: 400,
  lineHeight: 'normal',
  color: '#323232',
  fontSize: 26,
};

const cellLabelStyle = {
  fontFamily: 'system-ui, sans-serif',
  fontWeight: 500,
  lineHeight: 'normal',
  color: '#323232',
  fontSize: 24,
};

const usageStyle = (isPlaceholder) => ({
  fontFamily: 'system-ui, sans-serif',
  fontWeight: 400,
  lineHeight: 'normal',
  color: '#737373',
  fontSize: 16,
  fontStyle: isPlaceholder ? 'italic' : 'normal',
});

const sectionHeaderStyle = {
  fontFamily: 'var(--font-families-sf-hebrew)',
  fontWeight: 700,
  lineHeight: '38px',
  fontSize: 32,
  letterSpacing: '-0.4px',
  color: '#323232',
};

const sections = [
  {
    title: 'Title',
    rows: [
      { token: 'Title-1', size: '32', weight: 'Bold', lineHeight: '38', rem: '2', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: 'Page title', varBase: 'text-style-title-title-1' },
      { token: 'Title-2', size: '26', weight: 'Bold', lineHeight: '30', rem: '1.625', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-title-title-2' },
      { token: 'Title-3', size: '22', weight: 'Bold', lineHeight: '26', rem: '1.375', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-title-title-3' },
      { token: 'Title-4', size: '18', weight: 'Semibold', lineHeight: '24', rem: '1.125', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-title-title-4' },
      { token: 'Title-5', size: '16', weight: 'Semibold', lineHeight: '24', rem: '1', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: 'Main title in list', varBase: 'text-style-title-title-5' },
      { token: 'Title-6', size: '14', weight: 'Semibold', lineHeight: '20', rem: '0.875', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-title-title-6' },
    ],
  },
  {
    title: 'Body (md)',
    rows: [
      { token: 'Body-1-default', size: '16', weight: 'Regular', lineHeight: '24', rem: 'Base', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-body-md-body-1-default' },
      { token: 'Body-1-accent', size: '16', weight: 'Medium', lineHeight: '24', rem: 'Base', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-body-md-body-1-accent' },
    ],
  },
  {
    title: 'Body (sm)',
    rows: [
      { token: 'Body-2-default', size: '14', weight: 'Regular', lineHeight: '20', rem: '0.875', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-body-sm-body-2-default' },
      { token: 'Body-2-accent', size: '14', weight: 'Medium', lineHeight: '20', rem: '0.875', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-body-sm-body-2-accent' },
    ],
  },
  {
    title: 'Body (xs)',
    rows: [
      { token: 'Body-3-default', size: '12', weight: 'Regular', lineHeight: '16', rem: '0.75', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-body-xs-body-3-default' },
      { token: 'Body-3-accent', size: '12', weight: 'Medium', lineHeight: '16', rem: '0.75', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-body-xs-body-3-accent' },
      { token: 'Body-3-emphasize', size: '12', weight: 'Semibold', lineHeight: '16', rem: '0.75', iosFont: 'SF Hebrew', androidFont: 'NotoSansHebrew', usage: '*will be added along with building components', varBase: 'text-style-body-xs-body-3-emphasize' },
    ],
  },
];

const rowBorder = { borderBottom: '1px solid #e3e4e6' };
const colGap = 28;
const cellPadding = '8px';
const colWidths = { token: 224, size: 100, weight: 170, rem: 100, iosFont: 170, androidFont: 220, usage: 500, example: 200 };

function TitleRow() {
  return (
    <div style={{ display: 'flex', gap: colGap, alignItems: 'center', padding: '24px 8px 40px 0', paddingLeft: 24, flexShrink: 0, width: 'max-content', minWidth: '100%', ...rowBorder }}>
      <div style={{ width: colWidths.token, padding: cellPadding }}><p style={{ margin: 0, ...tableLabelStyle }}>Token</p></div>
      <div style={{ width: colWidths.size, padding: cellPadding }}><p style={{ margin: 0, ...tableLabelStyle }}>Size</p></div>
      <div style={{ width: colWidths.weight, padding: cellPadding }}><p style={{ margin: 0, ...tableLabelStyle }}>Weight</p></div>
      <div style={{ width: colWidths.weight, padding: cellPadding }}><p style={{ margin: 0, ...tableLabelStyle }}>Line height</p></div>
      <div style={{ width: colWidths.rem, padding: cellPadding }}><p style={{ margin: 0, ...tableLabelStyle }}>Rem</p></div>
      <div style={{ width: colWidths.iosFont, padding: cellPadding }}><p style={{ margin: 0, ...tableLabelStyle }}>IOS – Font</p></div>
      <div style={{ width: colWidths.androidFont, padding: cellPadding }}><p style={{ margin: 0, ...tableLabelStyle }}>Android – Font</p></div>
      <div style={{ width: colWidths.usage, padding: cellPadding }}><p style={{ margin: 0, ...tableLabelStyle }}>Usage</p></div>
      <div style={{ width: colWidths.example, padding: cellPadding }}><p style={{ margin: 0, ...tableLabelStyle }}>Example</p></div>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div style={{ background: '#fbfbfb', width: '100%', position: 'relative', ...rowBorder }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: 24 }}>
        <p style={{ margin: 0, ...sectionHeaderStyle }}>{title}</p>
      </div>
    </div>
  );
}

function DataRow({ row }) {
  const isPlaceholder = row.usage.startsWith('*');
  const exampleStyle = {
    fontFamily: 'var(--' + row.varBase + '-font-family)',
    fontSize: 'var(--' + row.varBase + '-font-size)',
    fontWeight: 'var(--' + row.varBase + '-font-weight)',
    lineHeight: 'var(--' + row.varBase + '-line-height)',
    letterSpacing: 'var(--' + row.varBase + '-letter-spacing)',
    color: '#323232',
    margin: 0,
  };
  return (
    <div style={{ background: '#fbfbfb', display: 'flex', gap: colGap, alignItems: 'center', padding: '32px 8px', paddingLeft: 24, flexShrink: 0, width: 'max-content', minWidth: '100%', position: 'relative', ...rowBorder }}>
      <div style={{ width: colWidths.token, padding: cellPadding }}><p style={{ margin: 0, ...cellLabelStyle }}>{row.token}</p></div>
      <div style={{ width: colWidths.size, padding: cellPadding }}><p style={{ margin: 0, ...cellLabelStyle }}>{row.size}</p></div>
      <div style={{ width: colWidths.weight, padding: cellPadding }}><p style={{ margin: 0, ...cellLabelStyle }}>{row.weight}</p></div>
      <div style={{ width: colWidths.weight, padding: cellPadding }}><p style={{ margin: 0, ...cellLabelStyle }}>{row.lineHeight}</p></div>
      <div style={{ width: colWidths.rem, padding: cellPadding }}><p style={{ margin: 0, ...cellLabelStyle }}>{row.rem}</p></div>
      <div style={{ width: colWidths.iosFont, padding: cellPadding }}><p style={{ margin: 0, ...cellLabelStyle }}>{row.iosFont}</p></div>
      <div style={{ width: colWidths.androidFont, padding: cellPadding }}><p style={{ margin: 0, ...cellLabelStyle }}>{row.androidFont}</p></div>
      <div style={{ width: colWidths.usage, padding: cellPadding }}><p style={{ margin: 0, ...usageStyle(isPlaceholder) }}>{row.usage}</p></div>
      <div style={{ padding: cellPadding, minWidth: colWidths.example }}><p style={exampleStyle}>{EXAMPLE_TEXT}</p></div>
    </div>
  );
}

export default {
  title: '1-Foundations/Typography',
  parameters: { layout: 'padded' },
};

export function TypographyTable() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', minHeight: '100%', overflowX: 'auto' }}>
      <TitleRow />
      {sections.map((section) => (
        <div key={section.title} style={{ width: '100%' }}>
          <SectionHeader title={section.title} />
          {section.rows.map((row) => (
            <DataRow key={row.token} row={row} />
          ))}
        </div>
      ))}
    </div>
  );
}
