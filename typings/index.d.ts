declare global {
  namespace NodeJS {
    interface Global {
      wx: {
        request: jest.Mock;
      };
    }
  }
}

declare const wx: NodeJS.Global["wx"];

export {};
