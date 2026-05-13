export interface AuthMenuItem {
  label: string;
  icon?: string;
  routerLink?: string | string[];
  visible?: boolean;
  disabled?: boolean;
  items?: AuthMenuItem[];
}
