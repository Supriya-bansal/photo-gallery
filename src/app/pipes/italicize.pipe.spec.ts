import { ItalicizePipe } from "./italicize.pipe";

describe("ItalicizePipe", () => {
  let pipe: ItalicizePipe;

  beforeEach(() => {
    pipe = new ItalicizePipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should transform part of string value to italic style", () => {
    expect(
      pipe.transform("This is test subject for testing unit tests", "test")
    ).toBe("This is <i>test</i> subject for <i>testing</i> unit <i>tests</i>");
  });
});
