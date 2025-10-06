export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        <div className="w-1 h-6 bg-primary" />
        <div className="w-1 h-6 bg-primary/60" />
        <div className="w-1 h-6 bg-primary/30" />
      </div>
      <span className="text-xl font-bold tracking-tight">WEBSPACE</span>
    </div>
  )
}
