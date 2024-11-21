interface TabItem {
  id: number;
  title: string;
  label?: string;
}

interface TabProps<T extends TabItem> {
  items: T[];
  activeTab: number;
  onChange: (id: number) => void;
  renderLabel?: (item: T) => React.ReactNode;
  className?: string;
}

const Tab = <T extends TabItem>({
  items = [], // 기본값 설정
  activeTab,
  onChange,
  renderLabel,
  className = "",
}: TabProps<T>) => (
  <div
    className={`flex justify-center rounded-xl bg-stone-100 p-4 ${className}`}
  >
    {items.length > 0 ? ( // items 배열이 비어있지 않을 때만 map 실행
      items.map((item) => (
        <button
          key={item.id}
          onClick={() => onChange(item.id)}
          role="tab"
          aria-selected={activeTab === item.id}
          className={`${
            activeTab === item.id ? "bg-stone-800 text-white" : "bg-stone-100"
          } shadow-inset px-4 py-2 rounded-lg flex-1 font-bold transition-colors hover:bg-stone-200 `}
        >
          {renderLabel ? renderLabel(item) : item.title}
        </button>
      ))
    ) : (
      <p>No tabs available</p> // 비어 있을 때 표시할 내용
    )}
  </div>
);

export default Tab;
