import { renderHook, act } from "@testing-library/react-hooks";
import useDetailProfile from "../../hooks/useDetailProfile";

describe("test hooks : useDetailProfile", () => {
  beforeEach(() => {
    // Handle Console error : ReactDOM.render is no longer supported in React 18
    // must change to new root API react ( customize )
    global.console.error = (...args) => {
      const propTypeFailures = [/Warning: ReactDOM/];
      if (propTypeFailures.some((prop) => prop.test(args[0]))) {
      }
    };
  });

  it("Test function onChangeTab set tab equals news works", () => {
    const { result } = renderHook(() => useDetailProfile());
    act(() => {
      result.current.onChangeTab("news");
    });
    expect(result.current.activeTab).toBe("news");
  });

  it("Test function onChangeTab set tab equals livestream works", () => {
    const { result } = renderHook(() => useDetailProfile());
    act(() => {
      result.current.onChangeTab("livestream");
    });
    expect(result.current.activeTab).toBe("livestream");
  });

  it("Test function onChangeTab set tab equals quiz works", () => {
    const { result } = renderHook(() => useDetailProfile());
    act(() => {
      result.current.onChangeTab("quiz");
    });
    expect(result.current.activeTab).toBe("quiz");
  });
});
