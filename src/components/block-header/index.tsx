import { FunctionalComponent, h } from 'preact';

type BlockHeaderProps = {
  style: any;
  primary: string;
  secondary?: string;
};

const BlockHeader: FunctionalComponent<BlockHeaderProps> = ({style, primary, secondary = ''}) => {
  return (
    <div className={style['block-header']}>
      <h2 className={style['primary-header']}>{primary}</h2>
      {secondary !== '' ? (
        <h3 className={style['secondary-header']}>{secondary}</h3>
      ) : null}
    </div>
  )
}

export default BlockHeader;