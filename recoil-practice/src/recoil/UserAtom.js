import { atom, selector } from 'recoil';

// 리코일 스니펫: rclatom
export const myNewAtom = atom({
  key: 'myNewAtom',
  default: 0,
});

// 리코일 스니펫: rclselector
export const myNewSelector = selector({
  key: 'myNewSelector',
  get: ({ get }) => {
    const 원본 = get(myNewAtom);
    return 원본 + 10;
  },
  set: ({ set }, 인자로_받아온값) => {
    const 변경할_새로운값 = Number(인자로_받아온값) + 10;
    set(myNewAtom, 변경할_새로운값);
  },
  
});


