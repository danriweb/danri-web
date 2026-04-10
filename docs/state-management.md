# State management

Для управления состоянием используется Zustand.

## Структура стора

Каждый стор состоит из четырёх частей: типы, начальное состояние, определение, публичные хуки.

## Базовый шаблон

```ts
interface State {
  value: boolean;
}

interface Actions {
  setValue: (value: boolean) => void;
}

interface FeatureStore extends State, Actions {}

const initialState: State = {
  value: false,
};

const featureStore: StateCreator
  FeatureStore,
  [["zustand/devtools", unknown]]
> = (set) => ({
  ...initialState,
  setValue: (value) => set({ value }, false, "setValue"),
});

const useFeatureStore = create()(devtools(featureStore));

export const useFeatureValue = () => useFeatureStore((s) => s.value);
export const useFeatureActions = () => useFeatureStore.getState();
```

## Правила

- Стор не экспортируется напрямую — только публичные хуки
- Данные читаются через селектор, сеттеры через `getState()`
- Файл именуется `[name].store.ts`
- **Строго запрещена деструктуризация** корневого объекта стора в компонентах (например, `const { value } = useStore()`). Деструктуризация ломает подписки Zustand и провоцирует лишние ререндеры при изменении любых не связанных полей. Вместо этого используйте индивидуальные хуки-селекторы (как `useFeatureValue`).
