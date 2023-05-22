import { themeValues } from "../../theme";

function ThemePicker() {
  return (
    <>
      <select data-choose-theme className="select select-bordered">
        <option value="" selected>Default</option>
        {themeValues.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </>
  );
}

export default ThemePicker;
