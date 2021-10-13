import { FunctionalComponent, h } from "preact";
import style from './style.scss';

type TypeButton = 'default' | 'withIcon';

interface Props {
  type?: TypeButton;
  name?: string;
  customStyle?: string;
  action?(): void;
}

const Input: FunctionalComponent<Props> = ({name, customStyle, type, action}) => {
  const getIcon = () => {
    if (type === 'withIcon')
      return <img class={style.btnIcon} src="../../assets/img/icons/icon-arrow-right-mask.svg" />
    return null;
  }
  return (
    <button class={`${style.button} ${customStyle ?? ''}`} onClick={action} >
      <label class={style.textBtn}>{name}</label>
      {getIcon()}
    </button>
  )
}

export default Input;