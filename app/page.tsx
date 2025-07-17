export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 text-right">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">
          مرحبًا بك في منصة أدوات الذكاء الاصطناعي
        </h1>

        <p className="mb-10 text-lg text-gray-700">
          اختر الأداة التي تريد استخدامها:
        </p>

        <div className="grid gap-6">
          <a
            href="/summarizer"
            className="block bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🔍 أداة تلخيص النصوص</h2>
            <p className="text-gray-600">
              الصق أي نص واحصل على ملخص دقيق باللغة العربية في ثوانٍ.
            </p>
          </a>

          <a
            href="/speech-to-text"
            className="block bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🎙️ أداة تحويل الصوت إلى نص</h2>
            <p className="text-gray-600">
              حمّل ملف صوتي أو سجل بصوتك لتحصل على النص المكتوب بدقة.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
