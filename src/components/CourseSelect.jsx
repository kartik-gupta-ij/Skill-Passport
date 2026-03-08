import { useEffect, useRef, useState } from "react";

export default function CourseSelect({ value, options, onChange, disabled }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [open]);

  const isActive = !disabled;
  const color = isActive ? "#7878f4" : "rgba(159, 159, 159, 1)";

  return (
    <div
      ref={containerRef}
      className="course-select"
      style={{ position: "relative", maxWidth: 500, width: "100%" }}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => isActive && setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select course"
        style={{
          border: "none",
          background: "transparent",
          color,
          fontSize: 20,
          fontWeight: 700,
          cursor: isActive ? "pointer" : "default",
          outline: "none",
          padding: "4px 28px 4px 0",
          textAlign: "left",
          width: "100%",
          lineHeight: 1.3,
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        <span style={{ display: "block" }}>{value}</span>
        <span
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)",
            transition: "transform 0.2s",
            pointerEvents: "none",
          }}
        >
          ▼
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="course-select__dropdown"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            margin: 0,
            padding: "8px 0",
            listStyle: "none",
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            zIndex: 1000,
            maxHeight: 280,
            overflowY: "auto",
          }}
        >
          {options.map((c) => (
            <li
              key={c}
              role="option"
              aria-selected={c === value}
              onClick={() => {
                onChange(c);
                setOpen(false);
              }}
              style={{
                padding: "10px 12px",
                fontSize: 16,
                fontWeight: 600,
                color: c === value ? "#7878f4" : "#252525",
                cursor: "pointer",
                lineHeight: 1.3,
                whiteSpace: "normal",
                wordWrap: "break-word",
              }}
            >
              {c}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
