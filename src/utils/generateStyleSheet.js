import { css as color } from './colors';

const KNOWN_FONTS = [
  'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css',
];

const generateTextShadow = ({ outlineColor, outlineSize }) => {
  const values = [];
  for (let x = -outlineSize; x <= outlineSize; x += Math.ceil(outlineSize / 4)) {
    for (let y = -outlineSize; y <= outlineSize; y += Math.ceil(outlineSize / 4)) {
      values.push(`${x}px ${y}px ${color(outlineColor)}`);
    }
  }
  return `text-shadow: ${values.join(', ')};`;
};

export default ({
  authorNameColor,
  authorNameSize,
  avatarSize,
  memberAuthorNameColor,
  messageColor,
  messageSize,
  moderatorAuthorNameColor,
  outlineColor,
  outlineSize,
  ownerAuthorNameColor,
  showAuthorName,
  showAvatar,
  showBadge,
  showMemberBadge,
  showModeratorBadge,
  showNewMemberBackground,
  showOutline,
  showSuperChatBackground,
  showTimestamp,
  timestampColor,
  timestampSize,
}) => [
  KNOWN_FONTS.map(font => `@import url("${font}");`).join('\n'),
  '',
  'body {',
  '  background-color: transparent !important;',
  '  font-family: "Noto Sans Japanese", sans-serif !important;',
  '  overflow-y: hidden !important;',
  '}',
  '',
  'yt-live-chat-renderer {',
  '  background-color: transparent !important;',
  '}',
  '',
  'yt-live-chat-ticker-renderer {',
  '  display: none; !important;',
  '}',
  '',
  'yt-live-chat-item-list-renderer {',
  '  --yt-live-chat-deleted-message-color: rgba(153, 153, 153, 0.5);',
  `  --yt-live-chat-item-timestamp-display: ${showTimestamp ? 'inline' : 'none'};`,
  '  --yt-live-chat-item-timestamp-margin: 0 5px 0 0;',
  '  --yt-live-chat-message-highlight-background-color: transparent;',
  `  --yt-live-chat-message-highlight-text-color: ${color(ownerAuthorNameColor)};`,
  `  --yt-live-chat-moderator-color: ${color(moderatorAuthorNameColor)};`,
  `  --yt-live-chat-owner-color: ${color(ownerAuthorNameColor)};`,
  `  --yt-live-chat-paid-message-author-name-color: ${color(authorNameColor)};`,
  `  --yt-live-chat-primary-text-color: ${color(messageColor)};`,
  `  --yt-live-chat-secondary-text-color: ${color(authorNameColor)};`,
  `  --yt-live-chat-sponsor-color: ${color(memberAuthorNameColor)};`,
  `  --yt-live-chat-tertiary-text-color: ${color(timestampColor)};`,
  ...(showOutline ? [
    '',
    `  ${generateTextShadow({ outlineColor, outlineSize })};`,
  ] : []),
  '}',
  '',
  '#item-scroller {',
  '  overflow-y: hidden !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer {',
  '  padding: 4px 5px !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer[is-deleted] {',
  '  display: none !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer #author-photo {',
  `  display: ${showAvatar ? 'block' : 'none'} !important;`,
  `  height: ${avatarSize}px !important;`,
  `  margin: ${Math.max(2, (26 - avatarSize) / 2)}px 5px 0 0 !important;`,
  `  width: ${avatarSize}px !important;`,
  '}',
  '',
  'yt-live-chat-text-message-renderer #author-photo img {',
  '  height: 100% !important;',
  '  width: 100% !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer yt-live-chat-author-chip {',
  `  display: ${showAuthorName ? 'inline-flex' : 'none'};`,
  `  font-size: ${authorNameSize}px !important;`,
  `  line-height: ${+authorNameSize + 4}px !important;`,
  '}',
  '',
  'yt-live-chat-text-message-renderer yt-live-chat-author-chip::after {',
  '  color: var(--yt-live-chat-secondary-text-color, hsla(0, 0%, 6.7%, .6));',
  '  content: ":";',
  '  font-weight: 500;',
  '  margin-left: 3px;',
  '  order: 2;',
  '}',
  '',
  'yt-live-chat-text-message-renderer[author-type="owner"] yt-live-chat-author-chip::after {',
  '  color: var(--yt-live-chat-message-highlight-text-color);',
  '}',
  '',
  'yt-live-chat-text-message-renderer[author-type="moderator"] yt-live-chat-author-chip::after {',
  '  color: var(--yt-live-chat-moderator-color);',
  '}',
  '',
  'yt-live-chat-text-message-renderer[author-type="member"] yt-live-chat-author-chip::after {',
  '  color: var(--yt-live-chat-sponsor-color);',
  '}',
  '',
  'yt-live-chat-text-message-renderer #author-name {',
  '  background-color: transparent !important;',
  '  padding: 0 !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer {',
  `  display: ${showBadge ? 'inline-block' : 'none'};`,
  '  margin: 0  0 2px 3px !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="moderator"] {',
  `  display: ${showBadge && showModeratorBadge ? 'inline-block' : 'none'};`,
  '}',
  '',
  'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="member"] {',
  `  display: ${showBadge && showMemberBadge ? 'inline-block' : 'none'};`,
  '}',
  '',
  'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer #image {',
  `  height: ${Math.max(5, authorNameSize - 2)}px;`,
  `  width: ${Math.max(5, authorNameSize - 2)}px;`,
  '}',
  '',
  'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer #image img,',
  'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer #image yt-icon {',
  '  height: 100% !important;',
  '  width: 100% !important;',
  '}',
  '',
  'yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer #image svg {',
  `  filter: drop-shadow(1px 1px ${color(outlineColor)}) drop-shadow(-1px 1px ${color(outlineColor)}) drop-shadow(1px -1px ${color(outlineColor)}) drop-shadow(-1px -1px ${color(outlineColor)});`,
  '}',
  '',
  'yt-live-chat-text-message-renderer #message,',
  'yt-live-chat-text-message-renderer yt-formatted-string {',
  `  font-size: ${messageSize}px !important;`,
  `  line-height: ${+messageSize + 4}px !important;`,
  '}',
  '',
  'yt-live-chat-text-message-renderer #timestamp {',
  `  font-size: ${timestampSize}px !important;`,
  `  line-height: ${+timestampSize + 4}px !important;`,
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer,',
  'yt-live-chat-paid-message-renderer {',
  '  padding: 4px 2px !important;',
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer {',
  ...(!showNewMemberBackground ? [
    '  --yt-live-chat-sponsor-color: transparent !important;',
  ] : []),
  '}',
  '',
  'yt-live-chat-paid-message-renderer {',
  '  --yt-live-chat-paid-message-author-name-color: var(--yt-live-chat-secondary-text-color) !important;',
  '  --yt-live-chat-paid-message-color: var(--yt-live-chat-primary-text-color) !important;',
  '  --yt-live-chat-paid-message-header-color: var(--yt-live-chat-primary-text-color) !important;',
  '  --yt-live-chat-paid-message-timestamp-color: var(--yt-live-chat-tertiary-text-color) !important;',
  ...(!showSuperChatBackground ? [
    '  --yt-live-chat-paid-message-primary-color: transparent !important;',
    '  --yt-live-chat-paid-message-secondary-color: transparent !important;',
  ] : []),
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #author-photo,',
  'yt-live-chat-paid-message-renderer #author-photo {',
  `  display: ${showAvatar ? 'block' : 'none'} !important;`,
  `  height: ${avatarSize}px !important;`,
  '  margin: 2px 5px 0 2px !important;',
  `  width: ${avatarSize}px !important;`,
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #author-photo img,',
  'yt-live-chat-paid-message-renderer #author-photo img {',
  '  height: 100% !important;',
  '  width: 100% !important;',
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #card,',
  'yt-live-chat-paid-message-renderer #card {',
  '  box-shadow: none !important;',
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #card {',
  '  padding: 4px 2px !important;',
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #event-text,',
  'yt-live-chat-legacy-paid-message-renderer #detail-text {',
  `  font-size: ${messageSize}px !important;`,
  `  line-height: ${+messageSize + 2}px !important;`,
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #event-text {',
  '  color: var(--yt-live-chat-paid-message-author-name-color)',
  '}',
  '',
  'yt-live-chat-legacy-paid-message-renderer #detail-text {',
  '  color: var(--yt-live-chat-primary-text-color) !important;',
  '}',
  '',
  ...(!showSuperChatBackground ? [
    'yt-live-chat-paid-message-renderer #header,',
    'yt-live-chat-paid-message-renderer #content {',
    '  transition: none !important;',
    '}',
  ] : []),
  '',
  'yt-live-chat-paid-message-renderer #header {',
  '  align-items: flex-start;',
  '  padding: 4px 2px !important;',
  '}',
  '',
  'yt-live-chat-paid-message-renderer #content {',
  `  padding: 4px 2px 4px ${showAvatar ? (+avatarSize + 7) : 2}px !important;`,
  '}',
  '',
  'yt-live-chat-paid-message-renderer #author-name {',
  `  font-size: ${authorNameSize}px !important;`,
  `  line-height: ${+authorNameSize + 2}px !important;`,
  '}',
  '',
  'yt-live-chat-paid-message-renderer #purchase-amount,',
  'yt-live-chat-paid-message-renderer #message {',
  `  font-size: ${messageSize}px !important;`,
  `  line-height: ${+messageSize + 2}px !important;`,
  '}',
  '',
  'yt-live-chat-header-renderer,',
  'yt-live-chat-message-input-renderer,',
  'yt-live-chat-mode-change-message-renderer,',
  'yt-live-chat-restricted-participation-renderer {',
  '  display: none !important;',
  '}',
].join('\n');
