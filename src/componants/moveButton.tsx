interface Props {
  name: string;
  // color?: string;
  onClick: () => void;
}

export const MoveButton = ({ name, onClick }: Props) => {
  return <button onClick={onClick}>{name}</button>;
};
