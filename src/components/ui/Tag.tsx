interface TagProps {
  label:   string
  accent?: string   // hex color for highlighted tag
}

export default function Tag({ label, accent }: TagProps) {
  if (accent) {
    return (
      <span
        className="text-[11px] tracking-wider uppercase rounded-full px-3 py-1 border"
        style={{
          color:           accent,
          background:      `${accent}18`,
          borderColor:     `${accent}40`,
          letterSpacing:   '0.06em',
        }}
      >
        {label}
      </span>
    )
  }

  return (
    <span
      className="text-[11px] tracking-wider uppercase text-sub bg-white/[0.04] border border-line rounded-full px-3 py-1"
      style={{ letterSpacing: '0.06em' }}
    >
      {label}
    </span>
  )
}
