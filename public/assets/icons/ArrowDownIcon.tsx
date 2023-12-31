type Props = {
  color: string;
};

export function ArrowDownIcon({ color }: Props) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.646484 1.35354L1.35359 0.646432L7.00004 6.29288L12.6465 0.646432L13.3536 1.35354L7.00004 7.70709L0.646484 1.35354Z"
        fill={color}
      />
    </svg>
  );
}
