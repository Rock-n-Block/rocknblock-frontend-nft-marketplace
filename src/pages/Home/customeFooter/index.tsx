import { FunctionalComponent, h } from 'preact';
import style from './style.module.scss';

const CustomeFooter: FunctionalComponent = () => {
  return (
    <div class={style.block}>
      <img class={style.imgStatue} src="../../assets/img/marketplacePage/image453.png" alt="image453.png" />
    </div>
  );
};

export default CustomeFooter;
