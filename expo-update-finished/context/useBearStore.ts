import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface BearStore {
    bears: number,
    increasePopulation: () => void,
    removeAllBears: () => void
}

const useBearStore = create<BearStore>()(

    persist( set => ({
        bears: 0,
        increasePopulation: () => set( state => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),

        }),
        {
            name: 'bear-storage',
            storage: createJSONStorage( () => AsyncStorage )
        }  
    )
)

export default useBearStore