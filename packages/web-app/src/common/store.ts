import { create } from 'zustand';
import { Category } from './types';

type State = {
  selectedCategory: Category | undefined;
  setSelectedCategory: (category: Category) => void;
};

const useStore = create<State>((set) => ({
  selectedCategory: undefined,
  setSelectedCategory: (category: Category) =>
    set({ selectedCategory: category }),
}));

export default useStore;
