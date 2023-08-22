import { RawData, CountData, Item, Label } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <RawData>
        <Item>
          <Label>Good</Label>
          <span>{good}</span>
        </Item>
        <Item>
          <Label>Neutral</Label>
          <span>{neutral}</span>
        </Item>
        <Item>
          <Label>Bad</Label>
          <span>{bad}</span>
        </Item>
      </RawData>

      <CountData>
        <li>
          <Label>Total feedback: </Label>
          <span>{total}</span>
        </li>
        <li>
          <Label>Positive feedback: </Label>
          <span>{`${positivePercentage}%`}</span>
        </li>
      </CountData>
    </>
  );
}
