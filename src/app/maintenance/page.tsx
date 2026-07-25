export const metadata = {
  title: "维护中 — Legal Red Flags",
};

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-[480px]">
        <div className="text-[64px] mb-6">🚩</div>
        <h1 className="font-serif text-[28px] font-bold mb-3">
          网站维护中
        </h1>
        <p className="text-[16px] text-[var(--grey)] leading-relaxed mb-2">
          Website Under Maintenance
        </p>
        <p className="text-[14px] text-[var(--grey-light)] leading-relaxed">
          我们正在完善内容，很快回来。
          <br />
          We are improving our content and will be back soon.
        </p>
      </div>
    </div>
  );
}
