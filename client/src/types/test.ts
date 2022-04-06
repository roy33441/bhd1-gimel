export interface TestData {
  id: number;
  title: string;
  questions_number: number;
  form_url: string;
}

export interface TestGQL {
  allTests: TestData[];
}

export type Test = TestData & {
  isFinished: boolean;
};
