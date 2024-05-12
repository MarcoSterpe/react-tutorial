interface ButtonProps {
  children: string;
  cssClass?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  onClick: () => void;
}
const Button = ({ children, cssClass = 'primary', onClick }: ButtonProps) => {
  return (
    <button type="button" className={'btn btn-' + cssClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
