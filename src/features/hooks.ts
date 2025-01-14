import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import type { AppDispatch } from '../app/store'


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector