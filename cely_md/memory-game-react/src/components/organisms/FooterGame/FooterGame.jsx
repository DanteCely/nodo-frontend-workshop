import i18n from '@i18n';
import clsx from 'clsx';
import pkg from '../../../../package.json';
import GitHubIcon from '@mui/icons-material/GitHub';

const namespace = 'footer-game';

export const FooterGame = ({ className: extClassName }) => {
  const className = clsx(namespace, extClassName);

  return (
    <footer className={className}>
      <p>{i18n('COPYRIGHT')}</p>
      <div className={`${namespace}__version`}>
        <span>{i18n('GAME_VERSION', { $VERSION: pkg.version })}</span>
        <a href='https://github.com/DanteCely/nodo-frontend-workshop' target='_blank'>
          <GitHubIcon fontSize='large' />
        </a>
      </div>
    </footer>
  );
};
