import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

const DARK_MODE_CLASS = 'dark';
const HTML = document.querySelector('html');
const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
};

const VELVET_THEME_STORAGE_KEY = 'velvetTheme';
const VELVET_THEME_NAMES = ['default', 'unstyled', 'variables'];

export default class DocsController extends Controller {
  @tracked velvetTheme =
    localStorage.getItem(VELVET_THEME_STORAGE_KEY) ?? 'default';

  get isDefaultVelvetTheme() {
    return this.velvetTheme === 'default';
  }

  get isUnstyledVelvetTheme() {
    return this.velvetTheme === 'unstyled';
  }

  get isVariablesVelvetTheme() {
    return this.velvetTheme === 'variables';
  }

  toggleDarkMode = () => {
    if (HTML === null) {
      return;
    }

    if (HTML.classList.contains(DARK_MODE_CLASS)) {
      localStorage.setItem('theme', THEME.LIGHT);
      HTML.classList.remove(DARK_MODE_CLASS);
    } else {
      localStorage.setItem('theme', THEME.DARK);
      HTML.classList.add(DARK_MODE_CLASS);
    }
  };

  setVelvetTheme = (themeName: string) => {
    localStorage.setItem(VELVET_THEME_STORAGE_KEY, themeName);
    this.velvetTheme = themeName;

    for (const name of VELVET_THEME_NAMES) {
      const link = document.getElementById(
        `theme-${name}`,
      ) as HTMLLinkElement | null;

      if (link) {
        link.disabled = name !== themeName;
      }
    }
  };
}
