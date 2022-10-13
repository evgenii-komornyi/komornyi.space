import create from 'zustand';

import { devtools } from 'zustand/middleware';

const menuStore = set => ({
    isOpen: false,

    setIsOpen: () => {
        set(state => ({ isOpen: !state.isOpen }));
    },
});

const useMenuStore = create(devtools(menuStore));

export default useMenuStore;
