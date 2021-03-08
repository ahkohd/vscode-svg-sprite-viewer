import { createStore, createHook } from "react-sweet-state";
import { ElementNode } from "svg-parser";

interface PreviewConfig {
  color: string;
  size: string;
  strokeWidth: string;
}

console.log("Jumping ship", (window as any).initialData);

const Store = createStore({
  initialState: {
    svgTree: (window as any)?.initialData?.children[0] as ElementNode,
    config: {
      color: "currentColor",
      size: "18",
      strokeWidth: "",
      stroke: "",
    },
    query: "",
  },
  actions: {
    configure: (config: Partial<PreviewConfig>) => ({ setState, getState }) => {
      setState({
        config: {
          ...getState().config,
          ...config,
        },
      });
    },
    setQuery: (query: string) => ({ setState }) => {
      setState({
        query,
      });
    },
  },
});

const useStore = createHook(Store);

export default useStore;