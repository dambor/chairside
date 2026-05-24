import useFadeIn from '../hooks/useFadeIn.js';

export default function FadeIn({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useFadeIn();
  const cls = `fade-in${visible ? ' visible' : ''}${className ? ' ' + className : ''}`;
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
