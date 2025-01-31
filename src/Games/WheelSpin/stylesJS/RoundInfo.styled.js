import styled from "styled-components";

export const RoundInfoWrapper = styled.div`  // Previously: Container
  border: solid 1px rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  grid-area: stat;
  display: none;

  @media screen and (min-width: 60rem) {
    display: inherit;
  }
`;

export const RoundInfoContent = styled.div`  // Previously: Content
  padding: 1rem;
`;

export const RoundHeader = styled.div`  // Previously: Head
  display: flex;
  justify-content: space-between;
`;

export const RoundTitle = styled.p`  // Previously: HeadText
  color: #e5e7eb;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  align-self: center;
  margin-right: 0.75rem;
`;

export const TimerWrapper = styled.div`  // Previously: TimerPlaceholder
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
`;

export const RoundTimer = styled.div`  // Previously: Timer
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.08);
  background-color: #111927;
  min-width: 66px;
  min-height: 32px;
  padding-inline: 0.5rem;
`;

export const TimerValue = styled.p`  // Previously: TimerText
  color: inherit;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
`;

export const RoundDetails = styled.div`  // Previously: Body
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 0.75rem;
`;

export const PlayerStatsGrid = styled.div`  // Previously: BodyContentGrid
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (min-width: 60rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const HorizontalRule = styled.hr`  // Previously: HrStyle
  opacity: 1;
  border: 0;
  border-color: rgba(255, 255, 255, 0.08);
  border-bottom-width: 1px;
  width: 100%;
  display: none;

  @media screen and (min-width: 60rem) {
    display: inherit;
  }
`;

export const FutureEntriesWrapper = styled.div`  // Previously: BodyFooter
  display: none;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media screen and (min-width: 60rem) {
    display: grid;
  }
`;

export const FutureEntryContainer = styled.div`  // Previously: FooterContent
  flex: 1;
`;

export const FutureEntryDetails = styled.div`  // Previously: FooterContentTwo
  display: flex;
  align-items: center;
`;

export const StatsData = styled.div`  // Previously: Data
  animation: none;
`;

export const StatsValue = styled.p`  // Previously: DataText
  color: #9da4ae;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;

  @media screen and (min-width: 30rem) {
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;

export const StatsLabel = styled.p`  // Previously: Text
  color: #9da4ae;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
`;
