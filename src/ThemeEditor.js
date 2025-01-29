import React from "react";
import "./ThemeEditor.css";

const fonts = [
  { label: "Arial", value: "Arial" },
  { label: "Helvetica", value: "Helvetica" },
  { label: "Times New Roman", value: "Times New Roman" },
  { label: "Courier New", value: "Courier New" },
  { label: "Verdana", value: "Verdana" },
  { label: "Georgia", value: "Georgia" },
  { label: "Palatino", value: "Palatino" },
  { label: "Garamond", value: "Garamond" },
  { label: "Bookman", value: "Bookman" },
  { label: "Comic Sans MS", value: "Comic Sans MS" },
  { label: "Trebuchet MS", value: "Trebuchet MS" },
  { label: "Arial Black", value: "Arial Black" },
  { label: "Impact", value: "Impact" },
  { label: "Copperplate", value: "Copperplate" },
  { label: "Brushed", value: "Brushed" },
];

function ThemeEditor({ theme, setTheme }) {
  return (
    <div className="theme-editor">
      <h2>Theme</h2>
      <div class="form-field">
        <label for="background">Background:</label>
        <input
          id="background"
          name="background"
          type="color"
          value={theme.background}
          onChange={(e) => setTheme({ ...theme, background: e.target.value })}
        />
      </div>

      <div class="form-field">
        <label for="color">Color:</label>
        <input
          id="color"
          name="color"
          type="color"
          value={theme.color}
          onChange={(e) => setTheme({ ...theme, color: e.target.value })}
        />
      </div>

      <div class="form-field">
        <label for="font">Font:</label>
        <select
          id="font"
          name="font"
          value={theme.font}
          onChange={(e) => setTheme({ ...theme, font: e.target.value })}
        >
          {fonts.map((font) => (
            <option value={font.value}>{font.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ThemeEditor;
