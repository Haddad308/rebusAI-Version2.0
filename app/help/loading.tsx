export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="relative mx-auto mb-8">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-500 mx-auto"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-r-blue-300 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Loading Help Center...</h2>
          <p className="text-gray-600">Please wait while we prepare your help resources</p>
        </div>
      </div>
    </div>
  )
}
