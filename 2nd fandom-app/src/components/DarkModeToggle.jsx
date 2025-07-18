// ToggleThemeButton.jsx
import { useTheme } from '../contexts/ThemeContext';

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 다크모드' : '☀️ 라이트모드'}
    </button>
  );
};

export default ToggleThemeButton;
