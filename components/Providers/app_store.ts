import create from "zustand";

const useStore = create((set) => ({
  splashed: "",
  setSplashed: () => set({ splashed: "true" }),
}));

export default useStore;
