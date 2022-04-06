export interface Score {
  id: number;
  test_id: number;
  tzoer_id: number;
}

export interface ScoreGQL {
  scoredTests: Score[];
}
